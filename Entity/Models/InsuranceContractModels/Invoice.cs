﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entity.Models.InsuranceContractModels
{
    public class Invoice
    {
        [Key]
        public Guid Id { get; set; }
        [Key]
        public Guid ContractID { get; set; }

        public int LastPrice { get; set; } = 0;
        public DateTime CreatedDate { get; set; } = DateTime.Now;
        public Contract? Contract { get; set; }

    }
}
