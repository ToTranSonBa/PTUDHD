using Shared.EntityDtos.Insurances.HealthCondition;
using Shared.EntityDtos.Insurances.InsuranceBenefit;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Shared.EntityDtos.Insurances.InsuranceProduct
{
    public class AddInsuranceProductDto
    {
        public string? PolicyName { get; set; }
        public string? Description { get; set; }
        public string? ShortDescription { get; set; }
        public List<HealthConditionProductDto> Conditions { get; set; }
        public List<AddProgramPricePerProductDto> ProgramPrices { get; set; }
        public List<AddBenefitTypeInProduct> BenefitTypes { get; set; }
    }
}
