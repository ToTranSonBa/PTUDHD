using AutoMapper;
using Contracts;
using Entity.Exceptions;
using Entity.Models.Claim;
using Service.Contracts.Claims;
using Shared.EntityDtos.Claim;
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
            var request = await _repository.ClaimRequests.GetRequestById(createPaymentDto.RequestId, false);
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
                await _repository.SaveAsync();
            }
            else
            {
                throw new ReturnBadRequestException("Tao claim payment khong thanh cong");
            }
            
        } 

        private ClaimPaymentDto ConverEntityToDto(ClaimPayment claimPayment)
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
            foreach(var health in claimPayment.claims)
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
            return _mapper.Map<List<ClaimPaymentDto>>(listRequest);
        }
    }
}
