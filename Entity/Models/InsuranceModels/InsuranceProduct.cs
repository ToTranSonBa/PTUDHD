using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entity.Models.InsuranceModels
{
    public class InsuranceProduct
    {
        [Key]
        public Guid Id { get; set; }
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ProductId { get; set; }
        public string? PolicyName { get; set; }
        public string? Description { get; set; }
        public string? ShortDescription { get; set; }

        public ICollection<InsuranceBenefitType>? BenefitTypes { get; set; }
        public ICollection<InsuranceBenefitCost>? Costs { get; set; }
        public ICollection<InsurancePrice>? Prices { get; set; }
        public ICollection<HealthCondition>? HealthConditionSource { get; set; }
    }
}
