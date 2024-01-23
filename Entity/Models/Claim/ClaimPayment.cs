﻿using Entity.Models.Customers;
using Entity.Models.InsuranceContractModels;
using Entity.Models.Staff;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entity.Models.Claim
{
    public class ClaimPayment
    {
        [Key]
        public Guid Id { get; set; }
        public DateTime? CreatedDate { get; set; }
        public int? TotalCost { get; set; }
        public Guid? RequestID { get; set; }
        public string? Status { get; set; }
        public ClaimRequest? Request { get; set; }
        public List<ClaimHealthService>? claims { get; set; }

    }
    public enum ClaimHealthServiceStatus
    {
        UNPAID,
        PAID
    }
}
