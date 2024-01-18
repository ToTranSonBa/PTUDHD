using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Service.Contracts;

namespace WebAPI.Controllers
{
    [Route("api/customer")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        private readonly IServiceManager _services;
        public CustomerController(IServiceManager serviceManager) { 
            this._services = serviceManager;
        }
        [HttpGet("{email}")]
        public async Task<IActionResult> GetCustomerByEmail(string email) {
            var result = await _services.Customers.GetCustomerByEmail(email);
            return Ok(result);
        }
        [HttpGet]
        public async Task<IActionResult> GetCustomer()
        {
            return Ok(await _services.Customers.GetCustomers());
        }
        [Authorize(Roles ="Customer")]
        [HttpGet("getinformation")] 
        public async Task<IActionResult> GetInformation()
        {
            var customerEmail = HttpContext.User.Claims.ElementAt(0).Value;
            var customer = await _services.Customers.GetCustomerByEmail(customerEmail);
            return Ok(customer);
        }
    }
}
