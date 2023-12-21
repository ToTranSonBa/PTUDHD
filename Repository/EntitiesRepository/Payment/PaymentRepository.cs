using Contracts.Payment;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entity.Models.Payments;

namespace Repository.EntitiesRepository.Payment
{
    public class PaymentRepository : RepositoryBase<Entity.Models.Payments.Payment>, IPaymentRepository
    {
        public PaymentRepository(InsuranceDBContext insuranceDBContext) : base(insuranceDBContext)
        {

        }
        public bool AddPayment(Entity.Models.Payments.Payment payment) => Create(payment);
    }
}
