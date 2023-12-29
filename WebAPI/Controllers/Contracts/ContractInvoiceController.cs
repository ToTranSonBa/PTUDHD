using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Service.Contracts;

namespace WebAPI.Controllers.Contracts
{
    [Route("api/contract/{contractId}/invoices")]
    [ApiController]
    public class ContractInvoiceController : ControllerBase
    {
        private readonly IServiceManager _service;
        public ContractInvoiceController(IServiceManager serviceManager)
        {
            this._service = serviceManager;
        }
        [HttpGet]
        public async Task<IActionResult> GetInvoice(Guid contractId)
        {
            var result = await _service.ContractsInvoices.GetInvoiceByContractId(contractId);
            return Ok(result);
        }
    }
}
