using App.Test.MockData;
using AutoMapper;
using Contracts;
using Entity.Models.InsuranceContractModels;
using Moq;
using Services.Contracts;
using Shared.EntityDtos.Contract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace App.Test.System.Sevices
{
    public class ContractServiceTest
    {
        [Fact]
        public async Task ContractService_CreateContract_Success()
        {
            //arrange
            var mockRepository = new Mock<IRepositoryManager>();
            mockRepository.Setup(repo =>
                repo.Customers.GetCustomerByEmail(It.IsAny<string>(), It.IsAny<bool>()))
                .ReturnsAsync(CustomerDataMock.GetCustomer());
            mockRepository.Setup(repo => 
                repo.InsurancePrograms.GetById(It.IsAny<int>()))
                .ReturnsAsync(ProgramDataMock.GetProgramId1());
            mockRepository.Setup(repo =>
               repo.InsuranceProducts.GetById(It.IsAny<int>(), It.IsAny<bool>()))
               .ReturnsAsync(ProductDataMock.GetProduct());
            mockRepository.Setup(repo =>
               repo.Contracts.CreateContract(It.IsAny<Contract>()))
               .Returns(true);
            mockRepository.Setup(repo =>
                repo.Contracts.GetContractsById(It.IsAny<Guid>(), It.IsAny<bool>()))
                .ReturnsAsync(ContractMockData.GetContract());

            var mockMapper = new Mock<IMapper>();
            mockMapper.Setup(map => map.Map<Contract>(It.IsAny<RegisterContractDto>()))
                .Returns(new Contract
                {
                    EndDate = DateTime.Parse("2024-12-12"),
                    StartDate = DateTime.Parse("2023-12-12"),
                    TotalPrice = 1000000
                });
            mockMapper.Setup(map => map.Map<ContractDto>(It.IsAny<Contract>()))
                .Returns(ContractMockData.GetContractDto());

            var testData = ContractMockData.NewContractDto();

            var mockContractService = new ContractService(mockRepository.Object, mockMapper.Object);
            //act
            var result = await mockContractService.CreateContract(testData);
            //Assert
            Assert.NotNull(result);
        }
    }
}
