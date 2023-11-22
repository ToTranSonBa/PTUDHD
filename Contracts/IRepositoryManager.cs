using Entity.Models;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Contracts
{
    public interface IRepositoryManager
    {
        //metheo
        IUserRepository Users { get; }
        IRoleRepository Role { get; }
        Task SaveAsync();
    }
}
