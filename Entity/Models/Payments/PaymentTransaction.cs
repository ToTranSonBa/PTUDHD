using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entity.Models.Payments
{
    public class PaymentTransaction
    {
        [Key]
        public Guid Id { get; set; }
        public string? TranMessage { get; set; }
        public string? TranPayload { get; set; }
        public string? TranStatus { get; set; }
        public string? TranAmount { get; set; }
        public string? TranDate { get; set; }
        //
        public Guid PaymentId { get; set; }
        public Payment Payment { get; set; }
    }
}
