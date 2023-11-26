using Contracts.InsuranceContracts;
using Entity.Models.InsuranceModels;
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
    }
}
