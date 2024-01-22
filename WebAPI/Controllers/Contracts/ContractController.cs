using Entity.Models.InsuranceContractModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Service.Contracts;
using Shared.EntityDtos.Contract;
using Shared.EntityDtos.Payment.Momo.Request;
using Shared.Helper;

namespace WebAPI.Controllers.Contracts
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContractController : ControllerBase
    {
        private readonly IServiceManager _service;
        public ContractController(IServiceManager serviceManager) 
        { 
            this._service = serviceManager;
        }
        [HttpPost]
        public async Task<IActionResult> AddContract([FromBody] RegisterContractDto registerContractDto)
        {
            var result = await _service.Contracts.CreateContract(registerContractDto);
            //string linkPayment = string.Empty;
            //if(registerContractDto.PaymentMethod == (int)PaymentMehtod.MOMO)
            //{
            //    var momoOnetimePaymentRequest = new MomoOneTimePaymentRequestDto
            //    {
            //        amount = result.TotalPrice.ToString(),
            //        orderId = result.ContractId.ToString(),
            //        orderInfo = $"Khách hàng {result.Customer.Name} thanh toán bảo hiểm {result.ProductName} chương trình {result.ProgramName} " +
            //        $"bằng hình thức thanh toán qua MOMO"
            //    };
            //    linkPayment = _service.Momo.PaymentRequest(momoOnetimePaymentRequest);

            //}
            return StatusCode(StatusCodes.Status201Created, result);
        }
        [HttpGet]
        public async Task<IActionResult> GetContracts()
        {
            var result = await _service.Contracts.GetContracts();
            if (result.Count() > 0)
                return Ok(result);
            else
                return NoContent();
        }
        [HttpGet("Status")] 
        public async Task<IActionResult> GetContractsWithContract(ContractStatus status) 
        {
            var result = await _service.Contracts.GetContractByStatus(status);
            return Ok(result);
        }
        [HttpGet("ContractId")]
        public async Task<IActionResult> GetContract(Guid Id)
        {
            var result = await _service.Contracts.GetContractById(Id);
            return Ok(result);
        }
        [HttpGet("{customerId}/status/{status}")]
        public async Task<IActionResult> GetContractByCustomerIdAndStatus(int customerId,ContractStatus status)
        {
            return Ok( await _service.Contracts.GetContractByCustomerIdAndStatus(customerId, status));
        }
        [HttpPost("updateStatus")] 
        public async Task<IActionResult> UpdateStatus(Guid contractId, ContractStatus status)
        {
            await _service.Contracts.UpdateStatus(contractId, status);
            return Ok();
        }

    }
    
}
