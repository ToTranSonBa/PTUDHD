using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entity.Models.Payments
{
    public class PaymentSignature
    {
        [Key]
        public Guid SigId { get; set; }
        public string? SignValue { get; set; } = string.Empty;
        public string? SignAlgo { get; set; } = string.Empty;
        public DateTime? SignDate { get; set; }
        public string? SignOwn { get; set; } = string.Empty;
        public bool? IsValid { get; set; }
        //
        public Guid PaymentId { get; set; }
        public Payment Payment { get; set; }
    }
}
