using Entity.Models.Staff;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entity.Exceptions.Customer
{
    public class CustomerNotFoundException : NotFoundException
    {
        public CustomerNotFoundException(int customerId) : base($"Customer with id: {customerId} doesn't exist in the database")
        {
        }
    }
}
