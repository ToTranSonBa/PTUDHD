using Entity.Models.InsuranceContractModels;
using Shared.EntityDtos.Contract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.Contracts.Contracts
{
    public interface IContractService
    {
        Task<bool> CreateContract(RegisterContractDto registerContractDto);
        Task<List<ContractDto>> GetContracts();
        Task<List<ContractDto>> GetContractByStatus(ContractStatus status);
        Task<ContractDto> GetContractById(int Id);
    }
}
