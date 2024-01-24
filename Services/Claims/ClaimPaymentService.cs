using AutoMapper;
using Contracts;
using Entity.Exceptions;
using Entity.Models.Claim;
using Service.Contracts.Claims;
using Shared.EntityDtos.Claim;
using Shared.EntityDtos.Contract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.WebSockets;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;

namespace Services.Claims
{
    public class ClaimPaymentService : IClaimPaymentService
    {
        private readonly IRepositoryManager _repository;
        private readonly IMapper _mapper;
        public ClaimPaymentService(IRepositoryManager repository, IMapper mapper) {
            this._repository = repository;
            this._mapper = mapper;
        }
        public async Task AddPayment(CreateClaimPaymentDto createPaymentDto)
        {
            if(createPaymentDto.ClaimHeaths.Count == 0)
            {
                throw new ReturnBadRequestException("Danh sach Claim health khong hop le");
            }
            var request = await _repository.ClaimRequests.GetRequestById(createPaymentDto.RequestId, true);
            if(request == null)
            {
                throw new ReturnNotFoundException($"Request with id: {createPaymentDto.RequestId} dose not exist ");
            }
            var heathList = new List<ClaimHealthService>();
            var newpayment = new ClaimPayment
            {
                Id = Guid.NewGuid(),
                CreatedDate = DateTime.Now,
                RequestID = createPaymentDto.RequestId,
                Status = ClaimHealthServiceStatus.UNPAID.ToString()
            };
            var totalCost = 0;
            foreach(var health in createPaymentDto.ClaimHeaths)
            {
                totalCost = totalCost + health.CostOfATreatment;
                heathList.Add(new ClaimHealthService
                {
                    UsedDate = health.UsedDate,
                    HospitalName = health.HospitalName,
                    CostOfATreatment = health.CostOfATreatment,
                    ClaimPaymentId = newpayment.Id,
                    ServiceName = health.ServiceName,
                    Id = Guid.NewGuid()
                });
            }
            newpayment.TotalCost = totalCost;
            newpayment.claims = heathList;

            if( _repository.ClaimPayments.CreatePayment(newpayment))
            {
                request.Status = RequestStatus.Accepted.ToString();
                await _repository.SaveAsync();
            }
            else
            {
                throw new ReturnBadRequestException("Tao claim payment khong thanh cong");
            }
            
        } 

        private async Task<ClaimPaymentDto> ConverEntityToDto(ClaimPayment claimPayment)
        {
            var dto = new ClaimPaymentDto
            {
                Id = claimPayment.Id,
                CreatedDate = claimPayment.CreatedDate,
                RequestID = claimPayment.RequestID,
                Status = claimPayment.Status,
                TotalCost = claimPayment.TotalCost,
                claims = new List<ClaimHealthDto>()
            };
            var request = await _repository.ClaimRequests.GetRequestById(claimPayment.RequestID.Value, false);
            var contract = await _repository.Contracts.GetContractsByPrimaryId(claimPayment.Request.ContractId.Value, false);

            dto.CCCD = request.Customer.IdentifycationNumber;
            dto.Customer = request.Customer.Name;
            dto.Product = contract.InsuranceProduct.PolicyName;
            dto.Program = contract.InsuranceProgram.Name;
            foreach (var health in claimPayment.claims)
            {
                dto.claims.Add(new ClaimHealthDto
                {
                    UsedDate = health.UsedDate,
                    CostOfATreatment = health.CostOfATreatment,
                    HospitalName = health.HospitalName,
                    Id = health.Id,
                    ServiceName = health.ServiceName
                });
            }
            return dto;
        }
        public async Task<List<ClaimPaymentDto>> GetAll()
        {
            var listRequest = await _repository.ClaimPayments.GetAll(false);
            var listDto = new List<ClaimPaymentDto>();
            foreach(var claimPayment in listRequest)
            {
                listDto.Add(await ConverEntityToDto(claimPayment));
            }
            return listDto;
        }
        public async Task UpdateStatus(Guid paymentId, string EmpEmail)
        {
            var employee = await _repository.Employees.GetEmployeeByEmail(EmpEmail,false);
            var payment = await _repository.ClaimPayments.GetById(paymentId, true);
            if (payment == null)
            {
                throw new ReturnNotFoundException("Không tim thấy Payment");
            }
            if (_repository.ClaimInvoices.AddInvoice(new ClaimInvoice
            {
                CreatedDate = DateTime.Now,
                PaymentID = payment.Id,
                Id = Guid.NewGuid(),
                TotalCost = payment.TotalCost.Value
            }))
            {
                payment.EmployeeId = employee.Id;
                payment.Status = ClaimHealthServiceStatus.PAID.ToString();
                await _repository.SaveAsync();
            }
            else
            {
                throw new ReturnBadRequestException("cập nhật không thành công");
            }
        }
    }
}
