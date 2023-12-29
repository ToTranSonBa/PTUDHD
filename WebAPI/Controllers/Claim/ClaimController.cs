using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Service.Contracts;
using Shared.EntityDtos.Claim;

namespace WebAPI.Controllers.Claim
{
    [Route("api/claim")]
    [ApiController]
    public class ClaimController : ControllerBase
    {
        private readonly IServiceManager _service;
        public ClaimController(IServiceManager serviceManager)
        {
            _service = serviceManager;
        }
        [HttpPost]
        public async Task<IActionResult> AddRequest([FromBody] CreateClaimRequestDto claimRequestDto)
        {
            await _service.ClaimRequests.CreateRequest(claimRequestDto);
            return StatusCode(StatusCodes.Status201Created);
        }
        [HttpGet("int:CustomerId")] 
        public async Task<IActionResult> GetRequestOfCustomer(int customerId)
        {
            var result = await _service.ClaimRequests.GetClaimRequestOfCustomer(customerId);
            if (result == null)
            {
                return NoContent();
            }
            return Ok(result);
        }
    }
}
