using App.Test.MockData;
using FluentAssertions;
using Microsoft.AspNetCore.Mvc;
using Moq;
using Org.BouncyCastle.Security;
using Service.Contracts;
using Services.Payment.Momo;
using Shared.EntityDtos.Contract;
using Shared.EntityDtos.Payment.Momo.Request;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebAPI.Controllers.Contracts;

namespace App.Test.System.Controller
{
    public class ContractControllerTest
    {
        [Fact]
        public async Task ContractController_AddContract_ReturnCreated()
        {
            //arrange
            var serviceManager = new Mock<IServiceManager>();
            var newContract = ContractMockData.NewContractDto();
            var controller = new ContractController(serviceManager.Object);

            serviceManager.Setup(ser =>
                ser.Contracts.CreateContract(It.IsAny<RegisterContractDto>()))
                .ReturnsAsync(ContractMockData.GetContractDto());

            serviceManager.Setup(ser =>
                ser.Contracts.CreateContract(It.IsAny<RegisterContractDto>()))
                .ReturnsAsync(ContractMockData.GetContractDto());

            serviceManager.Setup(ser =>
                ser.Momo.PaymentRequest(It.IsAny<MomoOneTimePaymentRequestDto>()))
                .Returns("adfadfa");
            //act
            var result = await controller.AddContract(newContract);

            //assert
            serviceManager.Verify(_ => _.Contracts.CreateContract(newContract), Times.Exactly(1));
        }
        [Fact]
        public async Task ContractController_GetContract_ReturnOK()
        {
            //arrange
            var serviceManager = new Mock<IServiceManager>();
            serviceManager.Setup(_ => _.Contracts.GetContracts()).ReturnsAsync(ContractMockData.GetContracts());
            var sut = new ContractController(serviceManager.Object);
            //act
            var result = (OkObjectResult)await sut.GetContracts();
            //assert
            result.StatusCode.Should().Be(200);
        }
        [Fact]
        public async Task ContractController_GetContract_ReturnNoConTent()
        {
            //arrange
            var serviceManager = new Mock<IServiceManager>();
            serviceManager.Setup(_ => _.Contracts.GetContracts()).ReturnsAsync(ContractMockData.GetEmptyContracts());
            var sut = new ContractController(serviceManager.Object);
            //act
            var result = (NoContentResult)await sut.GetContracts();
            //assert
            result.StatusCode.Should().Be(204);
            serviceManager.Verify(_ => _.Contracts.GetContracts(), Times.Exactly(1));
        }
        
    }
}
