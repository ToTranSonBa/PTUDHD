using Contracts.ClaimContracts;
using Entity.Models.Claim;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.EntitiesRepository.Claim
{
    public class ClaimPaymentRepository : RepositoryBase<ClaimPayment>, IClaimPaymentRepository
    {
        public ClaimPaymentRepository(InsuranceDBContext insuranceDBContext) : base(insuranceDBContext)
        {
        }
    }
}
