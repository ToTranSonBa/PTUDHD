using Contracts;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository
{
    public class RepositoryBase<T> : IRepositoryBase<T> where T : class
    {
        protected InsuranceDBContext _dbContext;
        public RepositoryBase(InsuranceDBContext insuranceDBContext) { 
            this._dbContext = insuranceDBContext;
        }
        public void Create(T entity) => _dbContext.Set<T>().Add(entity);

        public void Delete(T entity) => _dbContext.Set<T>().Remove(entity);

        public IQueryable<T> FindAll(bool trackChanges)
        {
            return !trackChanges ? _dbContext.Set<T>().AsNoTracking() : _dbContext.Set<T>();
        }

        public IQueryable<T> FindByCondition(System.Linq.Expressions.Expression<Func<T, bool>> expression, bool trackChanges)
        {
            return !trackChanges ? _dbContext.Set<T>().Where(expression).AsNoTracking() 
                : _dbContext.Set<T>().Where(expression);

        }

        public void Update(T entity) => _dbContext.Set<T>().Update(entity);
    }
}
