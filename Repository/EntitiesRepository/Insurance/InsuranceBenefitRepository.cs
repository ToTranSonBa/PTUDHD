using Contracts.InsuranceContracts;
using Entity.Models.InsuranceModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.EntitiesRepository.Insurance
{
    public class InsuranceBenefitRepository : RepositoryBase<InsuranceBenefit>, IInsuranceBenefitRepository
    {
        public InsuranceBenefitRepository(InsuranceDBContext insuranceDBContext) : base(insuranceDBContext)
        {
        }
    }
}
