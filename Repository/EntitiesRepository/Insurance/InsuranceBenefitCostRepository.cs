using Contracts.InsuranceContracts;
using Entity.Models.InsuranceModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.EntitiesRepository.Insurance
{
    public class InsuranceBenefitCostRepository : RepositoryBase<InsuranceBenefitCost>, IInsuranceBenefitCostRepository
    {
        public InsuranceBenefitCostRepository(InsuranceDBContext insuranceDBContext) : base(insuranceDBContext)
        {
        }
    }
}
