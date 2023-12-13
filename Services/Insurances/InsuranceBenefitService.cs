using Contracts;
using Entity.Models.InsuranceModels;
using Service.Contracts.Insurances;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Insurances
{
    public class InsuranceBenefitService : IInsuranceBenefitService
    {
        private readonly IRepositoryManager _repositoryManager;
        public InsuranceBenefitService(IRepositoryManager repositoryManager) 
        { 
            this._repositoryManager = repositoryManager;
        }
        
    }
}
