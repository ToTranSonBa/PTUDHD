using Contracts.InsuranceContracts;
using Entity.Models.InsuranceModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.EntitiesRepository.Insurance
{
    public class InsuranceProgramRepository : RepositoryBase<InsuranceProgram>, IInsuranceProgramRepository
    {
        public InsuranceProgramRepository(InsuranceDBContext insuranceDBContext) : base(insuranceDBContext)
        {
        }
    }
}
