using Contracts.InsuranceContracts;
using Entity.Models.InsuranceModels;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.EntitiesRepository.Insurance
{
    public class InsuranceProductRepository : RepositoryBase<InsuranceProduct>, IInsuranceProductRepository
    {
        public InsuranceProductRepository(InsuranceDBContext insuranceDBContext) : base(insuranceDBContext)
        {
        }
        public async Task<List<InsuranceProduct>> GetAll(bool trackChanges)
        {
            return await FindAll(trackChanges).ToListAsync();
        }
        public async Task<InsuranceProduct> GetById(int id, bool trackChanges)
        {
            return await FindByCondition(p => p.ProductId == id, trackChanges).SingleOrDefaultAsync();
        }
    }
}
