using Microsoft.AspNetCore.Identity;
using Shared.UserDto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.Contracts
{
    public interface IAuthenticationService
    {
        Task<RegisterUserStatus> RegisterAsync(UserRegistrationDto userForRegistration);
        Task<string> LoginAsync(UserLoginDto userLoginDto);
        Task<string> GenerateEmailConfirmationTokeAsync(UserRegistrationDto userForRegistration);
        Task<bool> ComfirmEmailAsync(string token, string email);
    }
}
