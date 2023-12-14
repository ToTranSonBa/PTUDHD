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
        public async Task<List<ContractDto>> GetContracts()
        {
            var contracts = await _repositoryManager.Contracts.GetAll(false);
            var rContracts = new List<ContractDto>();
            foreach(var contract in contracts)
            {
                var contractDto = _mapper.Map<ContractDto>(contract);
                contractDto.ProgramName = contract.InsuranceProgram.Name;
                contractDto.ProductName = contract.InsuranceProduct.PolicyName;
                contractDto.ProductId = contract.InsuranceProduct.ProductId;
                contractDto.ProgramId = contract.InsuranceProgram.ProgramId;
                contractDto.ContractHealthConditions = new List<ContractHealthConditionDto>();
                foreach(var Item in contract.ContractHealthConditions)
                {
                    var Condition = await _repositoryManager.HealthConditions.GetByGuidIdAsync(Item.HealthConditionId, false);
                    contractDto.ContractHealthConditions.Add(new ContractHealthConditionDto
                    {
                        ConditionId = Condition.HealthConditionId,
                        ConditionName = Condition.Name,
                        Status = Item.Status
                    });
                }
                rContracts.Add(contractDto);
            }
            return rContracts;
        }
        public async Task<bool> CreateContract(RegisterContractDto registerContractDto)
        { 
            // ktra hợp đồng tồn tại không
            var product = await _repositoryManager.InsuranceProducts.GetById(registerContractDto.ProductId, false);
            if(product == null)
                throw new Exception($"Product with Id: {registerContractDto.ProductId} don't exits");

            // kiem tra chuong trinh
            var program = await _repositoryManager.InsurancePrograms.GetById(registerContractDto.ProgramId);
            if (program == null)
                throw new Exception($"Proram with Id: {registerContractDto.ProgramId} don't exits");

            var customer = await _repositoryManager.Customers.GetCustomerByEmail(registerContractDto.Customer.Email, false);
            // khách hàng không tồn tại thì thêm khách hàng
            if (customer == null)
            {
                customer = _mapper.Map<Customer>(registerContractDto.Customer);
                _repositoryManager.Customers.CreateCusomter(customer);
            }    


            //tạo hợp đồng
            var contract = _mapper.Map<Contract>(registerContractDto);
            contract.Customer = null;
            contract.Employee = null;
            contract.EmployeeID = null;
            contract.Id = new Guid();
            contract.InsuranceProductId = product.Id;
            contract.InsuranceProgramId = program.Id;
            contract.CustomerID = customer.Id;
            contract.ContractHealthConditions = new List<ContractHealthCondition>();


            // Them dieu kien suc khoe
            foreach(var conditionDto in registerContractDto.HealthConditions)
            {
                var condtion = product.HealthConditionSource.Where(p => p.HealthConditionId == conditionDto.Id).SingleOrDefault();
                contract.ContractHealthConditions.Add(new ContractHealthCondition
                {
                    ContractId = contract.Id,
                    HealthConditionId = condtion.Id,
                    Status = conditionDto.Status,
                });
            }
            if (!_repositoryManager.Contracts.CreateContract(contract))
                throw new Exception("Contract can not be created");
            await _repositoryManager.SaveAsync();
            return true;
        }
    }
}
