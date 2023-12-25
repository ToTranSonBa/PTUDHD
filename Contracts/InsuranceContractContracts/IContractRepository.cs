using Entity.Models.InsuranceContractModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Contracts.InsuranceContractContracts
{
    public interface IContractRepository
    {
        bool CreateContract(Contract contract);
        Task<List<Contract>> GetAll(bool trackChanges);
        Task<List<Contract>> GetByProductId(Guid productId, bool trackChanges);
        Task<List<Contract>> GetContractsByStatus(ContractStatus status, bool trackChanges);
        Task<Contract> GetContractsById(Guid Id, bool trackChanges);
    }
}
