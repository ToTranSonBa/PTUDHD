using Shared.EntityDtos.Customer;
using Shared.EntityDtos.Staff;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Shared.EntityDtos.Contract
{
    public class ContractDto
    {
        public Guid ContractId { get; set; }
        public DateTime? StartDate { get; init; }
        public DateTime? EndDate { get; init; }
        public float? TotalPrice { get; init; }
        public string? Status { get; init; }
        public CustomerDto? Customer { get; set; }
        public EmployeeDto? Employee { get; set; }
        public string? HealthDeclaration { get; set; }
        public string ProductName { get; set; }
        public DateTime CreateDate { get; set; }
        public int ProductId { get; set; }
        public string? ProgramName { get; set; }
        public int? ProgramId { get; set; }
        public ICollection<ContractHealthConditionDto>? ContractHealthConditions { get; set; }
    }
}
