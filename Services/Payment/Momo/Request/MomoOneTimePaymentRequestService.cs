using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using Service.Contracts.Payments;
using Shared.EntityDtos.Payment.Momo.Reponse;
using Shared.EntityDtos.Payment.Momo.Request;
using Shared.Helper.Hash;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace Services.Payment.Momo.Request
{
    public class MomoOneTimePaymentRequestService : IMomoService
    {
        public MomoOneTimePaymentRequestService()
        {

        }

        public string sendPaymentRequest(string endpoint, string postJsonString)
        {

            try
            {
                HttpWebRequest httpWReq = (HttpWebRequest)WebRequest.Create(endpoint);

                var postData = postJsonString;

                var data = Encoding.UTF8.GetBytes(postData);

                httpWReq.ProtocolVersion = HttpVersion.Version11;
                httpWReq.Method = "POST";
                httpWReq.ContentType = "application/json";

                httpWReq.ContentLength = data.Length;
                httpWReq.ReadWriteTimeout = 30000;
                httpWReq.Timeout = 15000;
                Stream stream = httpWReq.GetRequestStream();
                stream.Write(data, 0, data.Length);
                stream.Close();

                HttpWebResponse response = (HttpWebResponse)httpWReq.GetResponse();

                string jsonresponse = "";

                using (var reader = new StreamReader(response.GetResponseStream()))
                {

                    string temp = null;
                    while ((temp = reader.ReadLine()) != null)
                    {
                        jsonresponse += temp;
                    }
                }


                //todo parse it
                return jsonresponse;
                //return new MomoResponse(mtid, jsonresponse);

            }
            catch (WebException e)
            {
                return e.Message;
            }
        }

        public void MakeSignature(string accessKey, string secretKey, MomoOneTimePaymentRequestDto momo)
        {
            var rawHash = "accessKey=" + accessKey +
                "&amount=" + momo.amount +
                "&extraData=" + momo.extraData +
                "&ipnUrl=" + momo.ipnUrl +
                "&orderId=" + momo.orderId +
                "&orderInfo=" + momo.orderInfo +
                "&partnerCode=" + momo.partnerCode +
                "&redirectUrl=" + momo.requestId +
                "&requestType=" + momo.requestType;
            momo.signature = HashHelper.HmacSHA256(rawHash, secretKey);
        }

        public (bool, string?) GetLink(MomoOneTimePaymentRequestDto momo, string paymentUrl)
        {
            using HttpClient client = new HttpClient();
            var requestData = JsonConvert.SerializeObject(momo, new JsonSerializerSettings()
            {
                ContractResolver = new CamelCasePropertyNamesContractResolver(),
                Formatting = Formatting.Indented,
            });
            var requestContent = new StringContent(requestData, Encoding.UTF8,
                "application/json");

            var createPaymentLinkRes = client.PostAsync(paymentUrl, requestContent)
                .Result;

            if (createPaymentLinkRes.IsSuccessStatusCode)
            {
                var responseContent = createPaymentLinkRes.Content.ReadAsStringAsync().Result;
                var responseData = JsonConvert
                    .DeserializeObject<MomoOneTimePaymentCreatedLinkResponseDto>(responseContent);
                if (responseData.resultCode == "0")
                {
                    return (true, responseData.payUrl);
                }
                else
                {
                    return (false, responseData.message);
                }

            }
            else
            {
                return (false, createPaymentLinkRes.ReasonPhrase);
            }
        }
    }
}
