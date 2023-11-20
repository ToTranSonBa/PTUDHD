using AutoMapper;
using Contracts;
using Entity.Email;
using Entity.Models;
using Microsoft.AspNetCore.Identity;
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
        public ServiceManager (IRepositoryManager repositoryManager, UserManager<User> userManager,
            IMapper mapper, EmailConfiguration emailConfiguration)
        {

            _authenticationService = new Lazy<IAuthenticationService> (() => 
                new AuthenticationService(mapper, userManager));
            _emailService = new Lazy<IEmailService>(() => 
                new EmailService(emailConfiguration));
        }
        public IAuthenticationService AuthenticationService => _authenticationService.Value;
        public IEmailService EmailService => _emailService.Value;
    }
}
