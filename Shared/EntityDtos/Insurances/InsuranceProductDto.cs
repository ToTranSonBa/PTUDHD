using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Shared.EntityDtos.Insurances
{
    public class InsuranceProductDto
    {
        public int ProductId { get; set; }
        public string? PolicyName { get; set; }
        public string? Description { get; set; }
        public string? ShortDescription { get; set; }
    }
}
