﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Shared.EntityDtos.Insurances.HealthCondition
{
    public class HealthConditionDto
    {
        public int HealthConditionId { get; set; }
        public string? Name { get; set; }
        public string? Type { get; set; }
    }
}
