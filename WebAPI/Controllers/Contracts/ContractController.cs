using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Service.Contracts;
using Shared.EntityDtos.Contract;

namespace WebAPI.Controllers.Contracts
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContractController : ControllerBase
    {
        private readonly IServiceManager _service;
        public ContractController(IServiceManager serviceManager) 
        { 
            this._service = serviceManager;
        }
        [HttpPost] 
        public async Task<IActionResult> AddContract([FromBody] RegisterContractDto registerContractDto)
        {
            var result = await _service.Contracts.CreateContract(registerContractDto);
            return StatusCode(StatusCodes.Status201Created, result);
        }
        [HttpGet]
        public async Task<IActionResult> GetContracts()
        {
            var result = await _service.Contracts.GetContracts();
            return Ok(result);
        }
    }
}
