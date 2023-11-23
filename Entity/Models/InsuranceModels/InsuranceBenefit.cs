using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entity.Models.InsuranceModels
{
    public class InsuranceBenefit
    {
        [Key]
        public Guid Id { get; set; }
        [Key]
        public Guid PolicyId { get; set; }
        public InsuranceProduct? Product { get; set; }
    }
}
