using AutoMapper;
using Contracts;
using Contracts.ClaimContracts;
using Contracts.CustomerContracts;
using Contracts.InsuranceContractContracts;
using Contracts.InsuranceContracts;
using Contracts.StaffContracts;
using Entity.Email;
using Entity.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Repository;
using Repository.EntitiesRepository.Claim;
using Repository.EntitiesRepository.Contracts;
using Repository.EntitiesRepository.Customers;
using Repository.EntitiesRepository.Insurance;
using Repository.EntitiesRepository.Staff;
using Service.Contract.Claims;
using Service.Contracts;
using Service.Contracts.Claims;
using Service.Contracts.Contracts;
using Service.Contracts.Customers;
using Service.Contracts.Insurances;
using Service.Contracts.Staff;
using Services.Claims;
using Services.Contracts;
using Services.Customers;
using Services.Insurances;
using Services.Staff;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services
{
    public class ServiceManager : IServiceManager
    {
        private readonly Lazy<IAuthenticationService> _authenticationService;
        private readonly Lazy<IEmailService> _emailService;

        //Claim
        private Lazy<IClaimHealthServiceService> _claimHealthServiceService;
        private Lazy<IClaimInvoiceService> _claimInvoiceService;
        private Lazy<IClaimPaymentService> _claimPaymentRepsitory;
        private Lazy<IClaimRequestService> _claimRequestService;

        //Customer
        private Lazy<ICustomerService> _customerService;

        //Contract
        private Lazy<IContractInvoiceService> _contractInvoiceService;
        private Lazy<IContractService> _contractService;

        //Insurance
        private Lazy<IInsuranceBenefitCostService> _insuranceBenefitCostService;
        private Lazy<IInsuranceBenefitService> _insuranceBenefitService;
        private Lazy<IInsurancePriceService> _insurancePriceService;
        private Lazy<IInsuranceProductService> _insuranceProductService;
        private Lazy<IInsuranceProgramService> _insuranceProgramService;
        //Staff
        private Lazy<IEmployeeService> _employeeService;
        public ServiceManager (IRepositoryManager repositoryManager,
            IMapper mapper, EmailConfiguration emailConfiguration, 
            IConfiguration configuration,
            UserManager<User> userManager, RoleManager<IdentityRole> role)
        {

            _authenticationService = new Lazy<IAuthenticationService> (() =>
            new AuthenticationService(mapper, repositoryManager, configuration, userManager, role));
            _emailService = new Lazy<IEmailService>(() => 
                new EmailService(emailConfiguration));

            //Claim
            _claimHealthServiceService = new Lazy<IClaimHealthServiceService>(() => new ClaimHealthServiceService());
            _claimInvoiceService = new Lazy<IClaimInvoiceService>(() => new ClaimInvoiceService());
            _claimPaymentRepsitory = new Lazy<IClaimPaymentService>(() => new ClaimPaymentService());
            _claimRequestService = new Lazy<IClaimRequestService>(() => new ClaimRequestService());

            //Customer
            _customerService = new Lazy<ICustomerService>(() => new CustomerService(repositoryManager, mapper, userManager));

            //Contracts
            _contractInvoiceService = new Lazy<IContractInvoiceService>(() => new ContractInvoiceService());
            _contractService = new Lazy<IContractService>(() => new ContractService());

            //Insurance
            _insuranceBenefitCostService = new Lazy<IInsuranceBenefitCostService>(() => new InsuranceBenefitCostService());
            _insuranceBenefitService = new Lazy<IInsuranceBenefitService>(() => new InsuranceBenefitService());
            _insurancePriceService = new Lazy<IInsurancePriceService>(() => new InsurancePriceService());
            _insuranceProductService = new Lazy<IInsuranceProductService>(() => new InsuranceProductService());
            _insuranceProgramService = new Lazy<IInsuranceProgramService>(() => new InsuranceProgramService());

            //Staff
            _employeeService = new Lazy<IEmployeeService>(() => new EmployeeService(repositoryManager, mapper));
        }
        public IAuthenticationService AuthenticationService => _authenticationService.Value;
        public IEmailService EmailService => _emailService.Value;

        // Claim
        public IClaimHealthServiceService ClaimHealthServices => _claimHealthServiceService.Value;

        public IClaimInvoiceService ClaimInvoices => _claimInvoiceService.Value;

        public IClaimPaymentService ClaimPayments => _claimPaymentRepsitory.Value;

        public IClaimRequestService ClaimRequests => _claimRequestService.Value;

        //Customer

        public ICustomerService Customers => _customerService.Value;
        //Contracts

        public IContractService Contracts => _contractService.Value;

        public IContractInvoiceService ContractsInvoices => _contractInvoiceService.Value;
        //Insurance

        public IInsuranceBenefitCostService InsuranceBenefitCost => _insuranceBenefitCostService.Value;

        public IInsuranceBenefitService InsuranceBenefit => _insuranceBenefitService.Value;

        public IInsurancePriceService InsurancePrices => _insurancePriceService.Value;

        public IInsuranceProductService InsuranceProducts => _insuranceProductService.Value;

        public IInsuranceProgramService InsurancePrograms => _insuranceProgramService.Value;
        //Employee

        public IEmployeeService Employees => _employeeService.Value;
    }
}
