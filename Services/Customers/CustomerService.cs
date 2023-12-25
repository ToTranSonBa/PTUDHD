using AutoMapper;
using Contracts;
using Entity.Exceptions.Customer;
using Entity.Models;
using Entity.Models.Customers;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using Service.Contracts.Customers;
using Shared.EntityDtos.Customer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Customers
{
    public class CustomerService : ICustomerService
    {
        private readonly IRepositoryManager _repositoryManager;
        private readonly IMapper _mapper;
        private readonly UserManager<User> _userManager;

        public CustomerService(IRepositoryManager repositoryManager, IMapper mapper, UserManager<User> userManager) 
        {
            this._repositoryManager = repositoryManager;
            this._mapper = mapper;
            this._userManager = userManager;
        }
        public async Task<CustomerDto> GetByCustomerId(int id, bool trackChanges)
        {
            var customer = await _repositoryManager.Customers.GetCustomerAsnyc(id, trackChanges);
            if(customer == null)
            {
                throw new CustomerNotFoundException("id",id.ToString());
            }
            var customerReturn = _mapper.Map<CustomerDto>(customer);
            return customerReturn;
        }
        public async Task<CustomerDto> GetCustomerByEmail(string email)
        {
            var customer = await _repositoryManager.Customers.GetCustomerByEmail(email, false);
            if(customer == null )
            {
                throw new CustomerNotFoundException("email", email);
            }
            var customerReturn = _mapper.Map<CustomerDto>(customer);
            return customerReturn;
        }
        public async Task<CustomerDto> CreateCustomerAsync(CustomerCreateDto CustomerDto)
        {

            var user = await _userManager.FindByEmailAsync(CustomerDto.Email);
            var existCustomer = await _repositoryManager.Customers.GetCustomerByEmail(CustomerDto.Email, true);
            if(existCustomer != null)
            {
                existCustomer.User = user;
                existCustomer.UserID = user.Id;
                await _repositoryManager.SaveAsync();
                var customerReturn = _mapper.Map<CustomerDto>(existCustomer);
                return customerReturn;
            }
            var customer = _mapper.Map<Customer>(CustomerDto);
            var result = _repositoryManager.Customers.CreateCusomter(customer);
            customer.UserID = user.Id;
            customer.User = user;
            await _repositoryManager.SaveAsync();
            if(result)
            {
                var customerReturn = _mapper.Map<CustomerDto>(customer);
                return customerReturn;
            }
            else
            {
                return null;
            }
        }
    }
}
