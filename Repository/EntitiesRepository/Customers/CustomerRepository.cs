using Contracts.CustomerContracts;
using Entity.Models.Customers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.EntitiesRepository.Customers
{
    public class CustomerRepository : RepositoryBase<Customer>, ICustomerRepository
    {
        public CustomerRepository(InsuranceDBContext insuranceDBContext) : base(insuranceDBContext)
        {
        }
    }
}
