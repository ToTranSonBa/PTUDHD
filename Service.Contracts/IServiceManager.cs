using Entity.Models;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.Contracts
{
    public interface IServiceManager
    {
        IAuthenticationService AuthenticationService { get; }
        IEmailService EmailService { get; }
    }
}
