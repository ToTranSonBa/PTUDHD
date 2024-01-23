using Shared.EntityDtos.Contract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.Contracts.Contracts
{
    public interface IContractInvoiceService
    {
        Task<List<ContractInvoiceDto>> GetInvoiceByContractId(Guid contractId);
        Task addContractInvoice(CreateContractInvoiceDto invoiceDto);
        Task<List<ReportContractByYearDto>> GetReportByYear(int year);
    }
}
