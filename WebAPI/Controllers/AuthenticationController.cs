using Entity.Email;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Service.Contracts;
using Shared.ResponseApi;
using Shared.UserDto;
using Entity;
using System.Security.AccessControl;
using Shared.Message;

namespace WebAPI.Controllers
{
    [Route("api/authentication")]
    [ApiController]
    public class AuthenticationController : ControllerBase
    {
        private IConfiguration _configuration;
        private IServiceManager _service;
        public AuthenticationController(IServiceManager serviceManager, IConfiguration configuration) {
            _service = serviceManager;
            _configuration = configuration;
        }
        [HttpPost("Register")]
        public async Task<IActionResult> RegisterUser([FromBody] UserRegistrationDto userForRegistrationDto)
        {
            var result = await _service.AuthenticationService.RegisterAsync(userForRegistrationDto);
            if ((int)result == ((int)RegisterUserStatus.FAILED))
            {
                return StatusCode(StatusCodes.Status400BadRequest,
                    new Response { Status = "Error", Message = "User failed to create" });
            }
            if ((int)result == ((int)RegisterUserStatus.ROLEERROR))
            {
                return StatusCode(StatusCodes.Status400BadRequest,
                    new Response { Status = "Error", Message = "Roles not exist" });
            }
            if ((int)result == ((int)RegisterUserStatus.USEREXIST))
            {
                return StatusCode(StatusCodes.Status400BadRequest,
                    new Response { Status = "Error", Message = "User already exist" });
            }
            // Send email comfirm
            var token = await _service.AuthenticationService.GenerateEmailConfirmationTokeAsync(userForRegistrationDto);
            var confirmLink = _configuration["ApplicationUrl:Url"] + Url.Action(nameof(ComfirmEmail), new {token, email = userForRegistrationDto.Email});
            var message = new EmailMessage(new string[] { userForRegistrationDto.Email }, "Confirm email link", ConfirmEmailMessage.Message(userForRegistrationDto, confirmLink)!);
            _service.EmailService.SendEmail(message);
            
            return StatusCode(StatusCodes.Status201Created, 
                new Response { Status = "Success", Message = "User created successfully" });
        }
        [HttpGet("ComfirmEmail")]
        public async Task<IActionResult> ComfirmEmail(string token, string email)
        {
            // Check Email exist
            var result = await _service.AuthenticationService.ComfirmEmailAsync(token, email);
            if(result)
            {
                return StatusCode(StatusCodes.Status200OK,
                new Response { Status = "Success", Message = "Email verified successfully" });
            }
            return StatusCode(StatusCodes.Status200OK,
                new Response { Status = "Error", Message = "This user doesnot exist" });
        }
        [HttpPost("Login")]
        public async Task<IActionResult> LoginUser([FromBody] UserLoginDto userLogin)
        {
            var result = await _service.AuthenticationService.LoginAsync(userLogin);
            if(string.IsNullOrEmpty(result))
            {
                return Unauthorized();
            }
            else
            {
                return Ok(result);
            }
        }
    }
}
