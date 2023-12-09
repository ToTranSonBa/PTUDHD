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
        [Required]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ProductId { get; set; }
        public string? PolicyName { get; set; }
        public string? Description { get; set; }
        public string? ShortDescription { get; set; }

        public List<InsuranceBenefit> Benefits { get; set; }
        public List<InsuranceBenefitCost> Costs { get; set; }
        public List<InsurancePrice> Prices { get; set; }
    }
}
