using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.Contracts.Payments
{
    public interface IMomoService
    {
        string sendPaymentRequest(string endpoint, string postJsonString);
    }
}
