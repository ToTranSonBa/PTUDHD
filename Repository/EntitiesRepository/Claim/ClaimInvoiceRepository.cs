using Contracts.ClaimContracts;
using Entity.Models.Claim;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.EntitiesRepository.Claim
{
    public class ClaimInvoiceRepository : RepositoryBase<ClaimInvoice>, IClaimInvoiceRepository
    {
        public ClaimInvoiceRepository(InsuranceDBContext insuranceDBContext) : base(insuranceDBContext)
        {
        }
    }
}
