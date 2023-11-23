using Entity.Models.Customers;
using Entity.Models.Staff;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entity.Models.InsuranceContractModels
{
    public class Contract
    {
        public Guid Id { get; set; }
        public DateTime CreatedDate { get; set; }
        public Guid CustomerID { get; set; }
        public Guid EmployeeID { get; set; }
        public Customer? Customer { get; set; }
        public Employee? Employee { get; set; }
    }
}
