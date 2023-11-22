using AutoMapper;
using Contracts;
using Entity.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using Repository;
using Service.Contracts;
using Shared.UserDto;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Net;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace Services
{
    public class AuthenticationService : IAuthenticationService
    {
        private readonly IMapper _mapper;
        private readonly IRepositoryManager _repository;
        private readonly IConfiguration _configuration;
        private readonly UserManager<User> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;
        public AuthenticationService(IMapper mapper, IRepositoryManager repository, IConfiguration configuration,
            UserManager<User> userManager, RoleManager<IdentityRole> roleManager) {
            this._mapper = mapper;
            this._repository = repository;
            this._configuration = configuration;
            this._userManager = userManager;
            this._roleManager = roleManager;
        }
        public async Task<RegisterUserStatus> RegisterAsync(UserRegistrationDto userForRegistration)
        {
            var userRegister = _mapper.Map<User>(userForRegistration);

            //Check user exits
            var userExit = await _userManager.FindByEmailAsync(userRegister.Email);
            if(userExit != null)
            {
                return RegisterUserStatus.USEREXIST;
            }
            var listUserRoles = new List<string>();
            foreach(var role in userForRegistration.Roles)
            {
                var roleExit = await _roleManager.FindByNameAsync(role);
                if(roleExit != null)
                {
                    listUserRoles.Add(roleExit.Name);
                }
            }
            if(listUserRoles.Count > 0) 
            {
                // Create user
                var result = await _userManager.CreateAsync(userRegister, userForRegistration.Password);
                if(!result.Succeeded)
                {
                    return RegisterUserStatus.FAILED;
                }

                // Add roles to user
                await _userManager.AddToRolesAsync(userRegister,listUserRoles);

                await _repository.SaveAsync();
                return RegisterUserStatus.SUCCESS;
            }
            else
            {
                return RegisterUserStatus.ROLEERROR;
            }

        }
        public async Task<string> GenerateEmailConfirmationTokeAsync(UserRegistrationDto userForRegistration)
        {
            var user = await _userManager.FindByEmailAsync(userForRegistration.Email);
            var token = await _userManager.GenerateEmailConfirmationTokenAsync(user);
            return token;
        }
        public async Task<string> LoginAsync(UserLoginDto userLoginDto)
        {
            var resultUsername = await _userManager.FindByEmailAsync(userLoginDto.Email);
            if(resultUsername != null)
            {
                var result = await _userManager.CheckPasswordAsync(resultUsername, userLoginDto.Password);
                var authClaims = new List<Claim>
                {
                    new Claim(ClaimTypes.Email, userLoginDto.Email),
                    new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),

                };

                var authenKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JWT:Secret"]));
                var token = new JwtSecurityToken
                (
                    audience: _configuration["JWT:ValidAudience"],
                    issuer: _configuration["JWT:ValidIssuer"],
                    expires: DateTime.Now.AddMinutes(10),
                    claims: authClaims,
                    signingCredentials: new SigningCredentials(authenKey, SecurityAlgorithms.HmacSha256Signature)
                );
                return new JwtSecurityTokenHandler().WriteToken(token);
            }
            else
            {
                return string.Empty;
            }
        }
        public async Task<bool> ComfirmEmailAsync(string token, string email)
        {
            // Check Email Exist\
            var user = await _userManager.FindByEmailAsync(email);
            if(user != null)
            {
                var result = await _userManager.ConfirmEmailAsync(user, token);
                if(result.Succeeded)
                {
                    return true;
                }
            }
            return false;

        }
    }
}
