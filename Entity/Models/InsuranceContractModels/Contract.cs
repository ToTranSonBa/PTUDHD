using Entity.Models.Customers;
using Entity.Models.InsuranceModels;
using Entity.Models.Staff;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entity.Models.InsuranceContractModels
{
    public class Contract
    {
        [Key]
        public Guid Id { get; set; }
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ContractId { get; set; }
        public DateTime CreatedDate { get; set; } = DateTime.Now;
        public DateTime? StartDate { get; init; }
        public DateTime? EndDate { get; init; }
        public float? TotalPrice { get; init; }
        public string? Status { get; init; }
        public Guid? CustomerID { get; set; }
        public Guid? EmployeeID { get; set; }
        public Guid? InsuranceProductId { get; set; }
        public Guid? InsuranceProgramId { get; set; }
        public Customer? Customer { get; set; }
        public Employee? Employee { get; set; }
        public InsuranceProduct? InsuranceProduct { get; set;}
        public InsuranceProgram? InsuranceProgram { get; set; }
        public ICollection<ContractHealthCondition>? ContractHealthConditions { get; set; }
    }
    public enum ContractStatus
    {
        Unpaid,
        Paid,
        Processing,
        Completed
    }
}
