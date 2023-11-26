using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entity.Models.Claim
{
    public class ClaimHealthService
    {
        [Key]
        public Guid Id { get; set; }
        [Key]
        public Guid RequestId { get; set; }
        public string? ServiceName { get; set; }
        public int? CostOfATreatment { get; set; }
        public string? HospitalName { get; set; }
        public int? QuantityTreatment { get; set; }
        public ClaimHealthServiceStatus Status { get; set; }
        public ClaimRequest? Request { get; set; }
    }
    public enum ClaimHealthServiceStatus
    {
        WAITING,
        PROCESSING,
        DENIED,
        ACCEPTED
    }
}