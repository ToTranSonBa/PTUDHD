using Contracts.InsuranceContractContracts;
using Entity.Models.InsuranceContractModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.EntitiesRepository.Contracts
{
    public class ContractRepository : RepositoryBase<Contract>, IContractRepository
    {
        public ContractRepository(InsuranceDBContext insuranceDBContext) : base(insuranceDBContext)
        {
        }
        public bool CreateContract(Contract contract)
        {

            return Create(contract);
        }
    }
}
