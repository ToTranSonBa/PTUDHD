using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Service.Contracts;
using Shared.EntityDtos.Claim;

namespace WebAPI.Controllers.Claim
{
    [Route("api/claim/payment")]
    [ApiController]
    public class ClaimPaymentController : ControllerBase
    {
        private readonly IServiceManager _service;
        public ClaimPaymentController(IServiceManager serviceManager)
        {
            _service = serviceManager;
        }
        [HttpPost] 
        public async Task<IActionResult> AddPayment([FromBody] CreateClaimPaymentDto createClaimPaymentDto)
        {
            await _service.ClaimPayments.AddPayment(createClaimPaymentDto);
            return StatusCode(StatusCodes.Status201Created);
        }
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            return Ok(await _service.ClaimPayments.GetAll());
        }
    }

}
