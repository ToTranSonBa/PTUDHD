using Contracts;
using Entity.Models.Claim;
using Service.Contracts.Claims;
using Shared.EntityDtos.Claim;

namespace Services.Claims
{
    public class ClaimRequestService : IClaimRequestService
    {
        private readonly IRepositoryManager _repository;
        public ClaimRequestService(IRepositoryManager repositoryManager) { 
            _repository = repositoryManager;
        }
        public async Task CreateRequest(CreateClaimRequestDto requestDto)
        {
            var newRequest = new ClaimRequest
            {
                CreatedDate = requestDto.RequestDate,
                ContractId = (await _repository.Contracts.GetContractsById(requestDto.ContractId, false)).Id,
                CustomerId = (await _repository.Customers.GetCustomerAsnyc(requestDto.CustomerId, false)).Id,
                MedicalCondition = requestDto.MedicalCondition,
                MedicalHistory = requestDto.MedicalHistory,
                Status = RequestStatus.Waiting.ToString()
            };
            if(!_repository.ClaimRequests.AddRequest(newRequest))
            {
                throw new Exception("Contract is added unsuccessfully");
            }
            await _repository.SaveAsync();
        }
        public async Task<List<ClaimRequestDto>> GetClaimRequestOfCustomer(int cusotmerId)
        {
            var customer = await _repository.Customers.GetCustomerAsnyc(cusotmerId, false);
            if (cusotmerId == null)
            {
                throw new Exception("Customer with id: {customerId} dose not exist");
            }
            var requests = await _repository.ClaimRequests.GetCustomerRequest(customer.Id, false);
            var returnRequest = new List<ClaimRequestDto>();
            foreach(var request in requests)
            {
                returnRequest.Add(new ClaimRequestDto
                {
                    CreatedDate = request.CreatedDate,
                    ContractId = request.ContractId,
                    MedicalCondition = request.MedicalCondition,
                    MedicalHistory = request.MedicalHistory,
                    Status = request.Status,
                    CustomerId = request.Customer.CustomerId,
                    CustomerName = request.Customer.Name
                });
            }
            return returnRequest;
        }
    }
}
