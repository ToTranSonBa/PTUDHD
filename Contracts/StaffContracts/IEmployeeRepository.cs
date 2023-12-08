﻿using Entity.Models.Staff;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Contracts.StaffContracts
{
    public interface IEmployeeRepository
    {
        Task<Employee> GetEmployee(int employeeId, bool trackChanges);
        public bool CreateEmployee(Employee employee);
    }
}
