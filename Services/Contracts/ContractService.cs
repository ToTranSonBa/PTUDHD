using AutoMapper;
using Contracts;
using Entity.Models.Customers;
using Entity.Models.InsuranceContractModels;
using Entity.Models.InsuranceModels;
using Service.Contracts.Contracts;
using Shared.EntityDtos.Contract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Contracts
{
    public class ContractService : IContractService
    {
        private readonly IMapper _mapper;
        private readonly IRepositoryManager _repositoryManager;
        public ContractService(IRepositoryManager repositoryManager, IMapper mapper)
        { 
            this._repositoryManager = repositoryManager;
            this._mapper = mapper;
        }
        public async Task<bool> CreateContract(RegisterContractDto registerContractDto)
        {
            //kiểm tra hợp đồng hợp lệ không
            var productId = registerContractDto.ProductId;
            if (!productId.HasValue)
                return false;

            // ktra hợp đồng tồn tại không
            var product = await _repositoryManager.InsuranceProducts.GetById(productId.Value, false);
            if(product == null) 
                return false;

            // kiem tra chuong trinh
            var programDto = registerContractDto.Program;
            if (programDto == string.Empty)
                return false;
            //var program = await _repositoryManager.InsurancePrograms.GetByName(programDto);
            //if(program == null)
            //    return false;

            // Ktra khách hàng
            var customerId = registerContractDto.customer.CustomerId;
            if (!customerId.HasValue)
                return false;

            var customer = await _repositoryManager.Customers.GetCustomerAsnyc(customerId.GetValueOrDefault(), false);
            // khách hàng không tồn tại thì thêm khách hàng
            if (customer == null)
            {
                customer = _mapper.Map<Customer>(registerContractDto.customer);
                _repositoryManager.Customers.CreateCusomter(customer);
            }    


            //tạo hợp đồng
            var contract = _mapper.Map<Contract>(registerContractDto);
            contract.InsuranceProductId = product.Id;
            contract.InsuranceProduct = product;
            if (!_repositoryManager.Contracts.CreateContract(contract)) 
                return false;

            // Them dieu kien suc khoe
            //foreach(var conditionProduct in product.HealthConditions)
            //{
            //    foreach(var conditionDto in registerContractDto.HealthConditions)
            //    {
            //        var addCondition = new ContractHealthCondition
            //        {
            //            ContractId = contract.Id,
            //            Contract = contract,
            //            HealthCondition = conditionProduct,
            //            HealthConditionId = conditionProduct.Id,
            //            Status = false
            //        };
            //        if (conditionProduct.HealthConditionId == conditionDto.Id)
            //        {
            //            addCondition.Status = true;
            //        }
            //        contract.ContractHealthConditions.Add(addCondition);
            //    }
            //}
            return true;
        }
    }
}
