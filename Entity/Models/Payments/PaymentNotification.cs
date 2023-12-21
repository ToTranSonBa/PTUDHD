using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entity.Models.Payments
{
    public class PaymentNotification
    {
        [Key]
        public Guid Id { get; set; }
        public Guid? PaymentRefId { get; set; }
        public string? NotiDate { get; set; }
        public string? NotiAmount { get; set; }
        public string? NotiContent { get; set; }
        public string? NotiMessage { get; set; }
        public string? NotiSignature { get; set; }
        public string? NotiStatus { get; set; }
        public string? NotiResDate { get; set; }

        //
        public Guid PaymentId { get; set; }
        public Payment Payment { get; set; }
        public Guid MerchantId { get; set; }
        public Merchant Merchant { get; set; }


    }
}
