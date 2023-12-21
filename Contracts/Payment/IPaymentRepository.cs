using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Contracts.Payment
{
    public interface IPaymentRepository
    {
        bool AddPayment(Entity.Models.Payments.Payment payment);
    }
}
