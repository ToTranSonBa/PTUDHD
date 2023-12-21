using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entity.Models.Payments
{
    public class Merchant
    {
        [Key]
        public Guid Id { get; set; }
        public string? MerchantName { get; set; } = string.Empty;
        public string? MerchantWebLink { get; set; } = string.Empty;
        public bool? IsActive { get; set; }
        public string? SecertKey { get; set; } = string.Empty;
        public string? MerchantIPN { get; set; } = string.Empty;
        public string? MerchantReturnUrl {  get; set; } = string.Empty;
        public string? CreatedBy { get; set; } = string.Empty;
        public string? LastUpdatedBy { get; set; } = string.Empty;
        public DateTime? CreatedDate { get; set; }
        public DateTime? LastUpdatedDate { get; set; }
        public List<Payment> Payments { get; set; }
        public List<PaymentNotification> Notifications { get; set; }
    }
}
