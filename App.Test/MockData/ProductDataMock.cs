using Entity.Models.InsuranceModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace App.Test.MockData
{
    public class ProductDataMock
    {
        public static InsuranceProduct GetProduct()
        {
            return new InsuranceProduct
            {
                ShortDescription = "Test",
                BenefitTypes = null,
                ProductId = 7,
                Id = Guid.Parse("184051AB-E6F4-48AA-3782-08DBFBCD31FD"),

            };
        }
    }
}
