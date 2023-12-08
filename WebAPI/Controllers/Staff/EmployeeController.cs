using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Service.Contracts;

namespace WebAPI.Controllers.Staff
{
    [Route("api/[controller]")]
    public class EmployeeController : ControllerBase
    {
        private readonly IServiceManager _serviceManager;
        public EmployeeController(IServiceManager serviceManager) 
        {
            this._serviceManager = serviceManager;
        }

        [HttpGet("{EmployeeId:int}")]
        public async Task<IActionResult> GetEmployee(int EmployeeId)
        {
             await _serviceManager.Employees.GetEmployee(EmployeeId);
            return Ok();
        }
    }
}
