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
    }
}
