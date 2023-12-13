using Shared.EntityDtos.Customer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Shared.EntityDtos.Contract
{
    public class RegisterContractDto
    {
        public CustomerDto? customer { get; init; }
        public List<HealthConditionContractDto>? HealthConditions { get; init; }
        public int? ProductId { get; init; }
        public DateTime? StartDate { get; init; }
        public DateTime? EndDate { get; init;}
        public string? Program { get; set; }

    }
}
