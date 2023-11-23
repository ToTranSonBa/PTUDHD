using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entity.Models.Staff
{
    public class Employee
    {
        public Guid Id { get; set; } 
        public string? Name { get; set; }

        public string? UserID {  get; set; }
        public User? User { get; set; }
    }
}
