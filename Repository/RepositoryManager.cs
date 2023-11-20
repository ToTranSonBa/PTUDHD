using Contracts;
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
        public RepositoryManager(InsuranceDBContext insuranceDBContext) { 
            _dbContext = insuranceDBContext;
        }

        public async Task SaveAsync() => await _dbContext.SaveChangesAsync();
    }
}
