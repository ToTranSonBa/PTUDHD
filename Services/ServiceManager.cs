using AutoMapper;
using Contracts;
using Entity.Email;
using Entity.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Repository;
using Service.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services
{
    public class ServiceManager : IServiceManager
    {
        private readonly Lazy<IAuthenticationService> _authenticationService;
        private readonly Lazy<IEmailService> _emailService;
        public ServiceManager (IRepositoryManager repositoryManager,
            IMapper mapper, EmailConfiguration emailConfiguration, 
            IConfiguration configuration,
            UserManager<User> userManager, RoleManager<IdentityRole> role)
        {

            _authenticationService = new Lazy<IAuthenticationService> (() => 
                new AuthenticationService(mapper, repositoryManager, configuration, userManager, role));
            _emailService = new Lazy<IEmailService>(() => 
                new EmailService(emailConfiguration));
        }
        public IAuthenticationService AuthenticationService => _authenticationService.Value;
        public IEmailService EmailService => _emailService.Value;
    }
}
