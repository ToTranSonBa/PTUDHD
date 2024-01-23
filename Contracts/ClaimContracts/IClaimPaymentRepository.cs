﻿using Entity.Models.Claim;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Contracts.ClaimContracts
{
    public interface IClaimPaymentRepository
    {
        bool CreatePayment(ClaimPayment claimPayment);
        Task<List<ClaimPayment>> GetAll(bool trackChange);
    }
}
