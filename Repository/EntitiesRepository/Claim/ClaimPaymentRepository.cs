using Contracts.ClaimContracts;
using Entity.Models.Claim;
using Microsoft.EntityFrameworkCore;
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
        public bool CreatePayment(ClaimPayment claimPayment) => Create(claimPayment);
        public async Task<List<ClaimPayment>> GetAll(bool trackChange) =>
            await FindAll(trackChange).Include(x => x.claims).ToListAsync();
    }
}
