using Contracts.CustomerContracts;
using Entity.Models.Customers;
using Microsoft.EntityFrameworkCore;
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
        public bool CreateCusomter(Customer customer)
        {
            return Create(customer);
        }
        public async Task<Customer> GetCustomerAsnyc(int customerId, bool trachChanges)
        {
            return await FindByCondition(c => c.CustomerId == customerId, trachChanges).SingleOrDefaultAsync();
        }
    }
}
