using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entity.Models.InsuranceModels
{
    public class InsuranceProduct
    {
        public InsuranceProduct() 
        {
            Benefits = new List<InsuranceBenefit>();
            Costs = new List<InsuranceBenefitCost> { };
            Prices = new List<InsurancePrice> { };  
        }
        [Key]
        public Guid Id { get; set; }
        public string? PolicyName { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }


        public List<InsuranceBenefit> Benefits { get; set; }
        public List<InsuranceBenefitCost> Costs { get; set; }
        public List<InsurancePrice> Prices { get; set; }
    }
}
