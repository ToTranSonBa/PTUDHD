using Entity.Models.InsuranceContractModels;
using Entity.Models.InsuranceModels;
using Shared.EntityDtos.Contract;
using Shared.EntityDtos.Customer;

namespace App.Test.MockData
{
    public class ContractMockData
    {
        public static List<ContractDto> GetContracts()
        {
            return new List<ContractDto> {
                new ContractDto
                {
                    StartDate = DateTime.Parse("2023-12-25"),
                    EndDate = DateTime.Parse("2024-12-25"),
                    ContractHealthConditions = null,
                    ContractId = Guid.NewGuid(),
                    Status = ContractStatus.Unpaid.ToString(),
                    TotalPrice = 100000,
                    ProductId = 1,
                    ProgramId = 1,
                    ProductName = "An tâm sống khỏe",
                    ProgramName = "Bronze"
                },
                new ContractDto
                {
                    StartDate = DateTime.Parse("2023-12-25"),
                    EndDate = DateTime.Parse("2024-12-25"),
                    ContractHealthConditions = null,
                    ContractId = Guid.NewGuid(),
                    Status = ContractStatus.Unpaid.ToString(),
                    TotalPrice = 100000,
                    ProductId = 1,
                    ProgramId = 1,
                    ProductName = "An tâm sống khỏe",
                    ProgramName = "Gold"
                }
            };
        }
        public static List<ContractDto> GetEmptyContracts()
        {
            return new List<ContractDto>();
        }
        public static Contract GetContract()
        {
            return new Contract
            {
                ContractId = Guid.Parse("F53272E2-AC97-4D59-8E58-147A93B6345E"),
                Id = Guid.Parse("103DDBB4-436B-4B2C-EF69-08DC06C6E6A1"),
                InsuranceProduct = new InsuranceProduct
                {
                    Id = Guid.NewGuid(),
                    ProductId = 1,
                    PolicyName = "",
                },
                InsuranceProgram = new InsuranceProgram
                {
                    ProgramId = 1,
                    Name = "Bronze"
                },
                ContractHealthConditions = new List<ContractHealthCondition>
                {

                }
            };
        }
        public static ContractDto GetContractDto()
        {
            return new ContractDto
            {
                ContractId = Guid.Parse("F53272E2-AC97-4D59-8E58-147A93B6345E"),
                TotalPrice = 1000000,
                Customer = new CustomerDto
                {
                    Name = "123123"
                },
                ProductId = 1,
                ProductName = "da",
                ProgramId = 1,
                ProgramName = "Bronze"
            };
        }
        public static RegisterContractDto NewContractDto()
        {
            return new RegisterContractDto
            {
                Customer = new CustomerDto
                {
                    Address = "Ktx khu b",
                    Birthday = DateTime.Parse("2002-12-12"),
                    CustomerId = 3,
                    Email = "sonbatest@gmail.com",
                    Name = "To Tran Son Ba",
                    PhoneNumber = "0123456789",
                    IdentifycationNumber = "0123456789"
                },
                ProductId = 7,
                EndDate = DateTime.Parse("2024-12-12"),
                StartDate = DateTime.Parse("2023-12-12"),
                HealthConditions = new List<RegisterContractHealthConditionDto>
                {
                   new RegisterContractHealthConditionDto
                   {
                       Id = 15,
                       Status = true
                   },
                   new RegisterContractHealthConditionDto
                   {
                       Id = 16,
                       Status = true
                   },
                   new RegisterContractHealthConditionDto
                   {
                       Id = 17,
                       Status = true
                   }
                },
                PaymentMethod = 0,
                ProgramId = 1,
                TotalPrice = 1000000
            };
        }
    }
}
