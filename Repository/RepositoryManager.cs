using Contracts;
using Entity.Models;
using Microsoft.AspNetCore.Identity;
using Repository.EntitiesRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository
{
    public class RepositoryManager : IRepositoryManager
    {
        private InsuranceDBContext _dbContext;
        private Lazy<IUserRepository> _userRepository;
        private Lazy<IRoleRepository> _roleRepository;
        

        public RepositoryManager(InsuranceDBContext insuranceDBContext) { 
            _dbContext = insuranceDBContext;
            _userRepository = new Lazy<IUserRepository>(() => new UserReporitory(_dbContext));
            _roleRepository = new Lazy<IRoleRepository>(() => new RoleRepository(_dbContext));
        }

        public IUserRepository Users => _userRepository.Value;

        public IRoleRepository Role => _roleRepository.Value;

        public async Task SaveAsync()
        {
            await _dbContext.SaveChangesAsync();
        }
    }
}
