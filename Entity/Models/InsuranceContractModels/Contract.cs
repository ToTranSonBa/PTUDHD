using Entity.Models.Customers;
using Entity.Models.InsuranceModels;
using Entity.Models.Staff;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entity.Models.InsuranceContractModels
{
    public class Contract
    {
        [Key]
        public Guid Id { get; set; }
        public DateTime CreatedDate { get; set; }
        public Guid CustomerID { get; set; }
        public Guid EmployeeID { get; set; }
        public Guid InsuranceProductId { get; set; }
        public Guid InsuranceProgramId { get; set; }
        public Customer? Customer { get; set; }
        public Employee? Employee { get; set; }
        public InsuranceProduct? InsuranceProduct { get; set;}
        public InsuranceProgram? InsuranceProgram { get; set; }
    }
}
