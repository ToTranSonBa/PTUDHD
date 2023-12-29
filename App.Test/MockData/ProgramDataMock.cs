using Entity.Models.InsuranceModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace App.Test.MockData
{
    public class ProgramDataMock
    {
        public static InsuranceProgram GetProgramId1()
        {
            return new InsuranceProgram
            {
                ProgramId = 1,
                Id = Guid.Parse("CB946FA4-B9F0-42FF-F3CF-08DBFA641634"),
                Name = "Bronze"
            };
        }
    }
}
