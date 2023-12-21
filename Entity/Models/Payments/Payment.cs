using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entity.Models.Payments
{
    public class Payment
    {
        [Key]
        public Guid PaymentId { get; set; }
        public string? PaymentContent { get; set; }
        public string? PaymentCurrency { get; set; }
        public string? PaymentRefld { get; set; }
        public int? RequiredAmount { get; set; }
        public DateTime? PaymentDate { get; set; }
        public DateTime? ExpireDate { get; set; }
        public string? PaymentLanguage { get; set; }
        public int? PaidAmount { get; set; }
        public string? PaymentStatus { get; set; }
        public string? PaymentLastMessage { get; set; }
        //
        public Guid? MerchantId { get; set; }
        public Merchant? Merchant { get; set; }
        public Guid? PaymentDestinationId {  get; set; }
        public PaymentDestination PaymentDestination { get; set; }
        public List<PaymentSignature>? Signatures { get; set; }
        public List<PaymentTransaction>? Transactions { get; set; }
        public List<PaymentNotification>? Notifications { get; set; }
    }
}
