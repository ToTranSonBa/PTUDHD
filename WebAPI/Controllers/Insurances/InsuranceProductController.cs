using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Service.Contracts;

namespace WebAPI.Controllers.Insurances
{
    [Route("api/[controller]")]
    [ApiController]
    public class InsuranceProductController : ControllerBase
    {
        private IServiceManager _serviceManager;
        public InsuranceProductController(IServiceManager serviceManager) { 
            this._serviceManager = serviceManager;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var products = await _serviceManager.InsuranceProducts.GetAll(false);
            return StatusCode(StatusCodes.Status200OK, products);
        }
        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetById(int id)
        {
            var product = await _serviceManager.InsuranceProducts.GetById(id, false);
            return StatusCode(StatusCodes.Status200OK, product);
        }
    }
}
