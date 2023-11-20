using AutoMapper;
using Entity.Models;
using Microsoft.AspNetCore.Identity;
using Service.Contracts;
using Shared;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace Services
{
    public class AuthenticationService : IAuthenticationService
    {
        private IMapper _mapper;
        private UserManager<User> _userManager;
        public AuthenticationService(IMapper mapper, UserManager<User> userManager) {
            this._mapper = mapper;
            this._userManager = userManager;
        }
        public async Task<IdentityResult> Register(UserForRegistrationDto userForRegistration)
        {
            var userRegister = _mapper.Map<User>(userForRegistration);

            var result = await _userManager.CreateAsync(userRegister, userForRegistration.Password);
            if(result.Succeeded)
            {
                await _userManager.AddToRolesAsync(userRegister, userForRegistration.Roles);
            }
            return result;
        }
    }
}
