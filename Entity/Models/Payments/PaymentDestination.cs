using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entity.Models.Payments
{
    public class PaymentDestination
    {
        [Key]
        public Guid Id { get; set; }
        public string? DesLogo { get; set; }
        public string? DesShortName { get; set; }
        public string? DesName { get; set; }
        public int? DesSortIndex { get; set; }
        public bool? IsActive { get; set; }
        public Guid? ParentId { get; set; }
        public PaymentDestination Parent { get; set; }
        public List<Payment> Payments { get; set; }
    }
}
