using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Service.Contracts;
using Shared;
using System.Security.AccessControl;

namespace WebAPI.Controllers
{
    [Route("api/authentication")]
    [ApiController]
    public class AuthenticationController : ControllerBase
    {
        private IServiceManager _service;
        public AuthenticationController(IServiceManager serviceManager) { 
            _service = serviceManager;
        }
        [HttpPost]
        public async Task<IActionResult> RegisterUser([FromBody] UserForRegistrationDto userForRegistrationDto)
        {
            var result = await _service.AuthenticationService.Register(userForRegistrationDto);
            if (!result.Succeeded)
            {
                return BadRequest(result);
            }
            return StatusCode(201);
        }
    }
}
