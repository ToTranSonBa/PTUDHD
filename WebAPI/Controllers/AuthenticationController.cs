using Entity.Email;
using Microsoft.AspNetCore.Mvc;
using Service.Contracts;
using Shared.ResponseApi;
using Shared.UserDto;
using Shared.Message;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;

namespace WebAPI.Controllers
{
    [Route("api/authentication")]
    [ApiController]
    public class AuthenticationController : ControllerBase
    {
        private IConfiguration _configuration;
        private IServiceManager _service;
        public AuthenticationController(IServiceManager serviceManager, IConfiguration configuration)
        {
            _service = serviceManager;
            _configuration = configuration;
        }
        [HttpPost("Register")]
        public async Task<IActionResult> RegisterUser([FromBody] UserRegistrationDto userForRegistrationDto)
        {
            if (userForRegistrationDto == null)
            {
                return StatusCode(StatusCodes.Status400BadRequest,
                    new Response { Status = "Error", Message = "Invalid User" });
            } 
            else
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
                var token = await _service.AuthenticationService.GenerateEmailConfirmationTokeAsync(userForRegistrationDto.Email ?? throw new Exception("Invalid Mail"));
                var confirmLink = _configuration["ApplicationUrl:Url"] + Url.Action(nameof(ComfirmEmail), new { token, email = userForRegistrationDto.Email });
                var message = new EmailMessage(new string[] { userForRegistrationDto.Email }, "Confirm email link", ConfirmEmailMessage.Message(userForRegistrationDto.Email, confirmLink)!);
                _service.EmailService.SendEmail(message);

                return StatusCode(StatusCodes.Status201Created,
                    new Response { Status = "Success", Message = "User created successfully" });
            }  
        }
        [HttpGet("SendEmailConfirm")]
        public async Task<IActionResult> SendEmailConfirm(string Email)
        {
            // Send email comfirm
            var token = await _service.AuthenticationService.GenerateEmailConfirmationTokeAsync(Email);
            if(string.IsNullOrEmpty(token))
            {
                return StatusCode(StatusCodes.Status400BadRequest, new Response { Status = "Error", Message = "Invalid Email" });
            }
            var confirmLink = _configuration["ApplicationUrl:Url"] + Url.Action(nameof(ComfirmEmail), new { token, email = Email });
            var message = new EmailMessage(new string[] { Email }, "Confirm email link", ConfirmEmailMessage.Message(Email, confirmLink)!);
            _service.EmailService.SendEmail(message);
            return StatusCode(StatusCodes.Status201Created,
                new Response { Status = "Success", Message = "Email has been sent successfully" });
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
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<IActionResult> LoginUser([FromBody] UserLoginDto userLogin)
        {
            var result = await _service.AuthenticationService.LoginAsync(userLogin);
            switch ((int)result.status)
            {
                case (int)LoginStatus.USERNOTEXIST:
                    return StatusCode(StatusCodes.Status401Unauthorized, new Response { Status = "Error", Message = "User Not Exist" });
                case (int)LoginStatus.INCORRECTPASSWORD:
                    return StatusCode(StatusCodes.Status401Unauthorized, new Response { Status = "Error", Message = "Incorreted Password" });
                case (int)LoginStatus.EMAILNOTCONFIRMED:
                    return StatusCode(StatusCodes.Status401Unauthorized, new Response { Status = "Error", Message = "Email Not Confirm" });
                default:
                    return StatusCode(StatusCodes.Status200OK, 
                        new LoginRespone
                        {
                            AccessToken = result.Token.AccessToken,
                            RefreshToken = result.Token.RefreshToken,
                            ValidTo = result.Token.ValidTo
                        });
            }
        }
        [HttpPost("RefreshToken")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<IActionResult> RefreshToken([FromBody] RefreshTokenDto refreshToken)
        {
            var result = await _service.AuthenticationService.RefreshTokenAsnyc(refreshToken);
            if(result.status)
            {
                return StatusCode(StatusCodes.Status200OK,
                        new LoginRespone
                        {
                            AccessToken = result.Token.AccessToken,
                            RefreshToken = result.Token.RefreshToken,
                            ValidTo = result.Token.ValidTo
                        });
            }
            else
            {
                return StatusCode(StatusCodes.Status401Unauthorized, new Response { Status = "Error", Message = "RefreshToken cannot be created" });
            }
        }
        [Authorize]
        [HttpDelete("Logout")]
        public async Task<IActionResult> LogOut()
        {
            if (HttpContext.User.Identity.IsAuthenticated)
            {
                // Lấy thông tin người dùng từ HttpContext
                string userEmail = HttpContext.User.FindFirst(ClaimTypes.Email)?.Value;

                if (!string.IsNullOrEmpty(userEmail))
                {
                    if (userEmail is null)
                        return Unauthorized();
                    var result = await _service.AuthenticationService.DeleteFreshTokenAsync(userEmail);

                    if (!result)
                    {
                        return Unauthorized();
                    }

                    return StatusCode(StatusCodes.Status200OK, new Response { Status = "Success", Message = "Logout is Successfully" });
                }
                else
                {
                    return Unauthorized();
                }
            }
            else
            {
                return Unauthorized();
            }
        }

    }
}
