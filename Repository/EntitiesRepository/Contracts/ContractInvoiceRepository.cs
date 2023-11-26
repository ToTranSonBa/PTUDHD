using Contracts.InsuranceContractContracts;
using Entity.Models.Claim;
using Entity.Models.InsuranceContractModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.EntitiesRepository.Contracts
{
    public class ContractInvoiceRepository : RepositoryBase<ContractInvoice>, IContractInvoiceRepository
    {
        public ContractInvoiceRepository(InsuranceDBContext insuranceDBContext) : base(insuranceDBContext)
        {
        }
    }
}
