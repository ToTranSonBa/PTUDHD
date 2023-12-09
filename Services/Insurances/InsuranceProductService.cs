using AutoMapper;
using Contracts;
using Entity.Exceptions.Insurance;
using Service.Contracts.Insurances;
using Shared.EntityDtos.Insurances;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Insurances
{
    public class InsuranceProductService : IInsuranceProductService
    {
        private readonly IRepositoryManager _repositoryManager;
        private readonly IMapper _mapper;
        public InsuranceProductService(IRepositoryManager repositoryManager, IMapper mapper) { 
            this._repositoryManager = repositoryManager;
            this._mapper = mapper;
        }
        public async Task<List<InsuranceProductDto>> GetAll(bool trackChanges)
        {
            var products = await _repositoryManager.InsuranceProducts.GetAll(trackChanges);
            var returnProducts = _mapper.Map<List<InsuranceProductDto>>(products);
            return returnProducts;
        }
        public async Task<InsuranceProductDto> GetById(int Id, bool trachChanges)
        {
            var product = await _repositoryManager.InsuranceProducts.GetById(Id, trachChanges);
            if(product  == null)
            {
                throw new InsuranceProductNotFoundException(Id); 
            }
            var returnProduct = _mapper.Map<InsuranceProductDto>(product);
            return returnProduct;
        }
    }
}
