﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Shared.EntityDtos.Payment.Momo.Reponse
{
    public class MomoOneTimePaymentCreatedLinkResponseDto
    {
        public string partnerCode { get; set; } = string.Empty;
        public string requestId { get; set; } = string.Empty;
        public string orderId { get; set; } = string.Empty;
        public long amount { get; set; }
        public long responseTime { get; set; }
        public string message { get; set; } = string.Empty;
        public string resultCode { get; set; } = string.Empty;
        public string payUrl { get; set; } = string.Empty;
        public string deeplink { get; set; } = string.Empty;
        public string qrCodeUrl { get; set; } = string.Empty;
    }
}
