using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Shared.EntityDtos.Claim
{
    public class CreateClaimRequestDto
    {

        [Required]
        public Guid ContractId { get; set; }
        [Required]
        public int CustomerId { get; set; }
        [Required]
        public string MedicalCondition { get; set; } // Tình trạng y tế
        [Required]
        public string MedicalHistory { get; set; } // Lịch sử bệnh án
        [Required]
        public string HospitalBillAmount { get; set; } // Số tiền hóa đơn viện phí
        [Required]
        public DateTime RequestDate { get; set; }
    }
}
