using AutoMapper;
using Entity.Models;
using Entity.Models.Customers;
using Entity.Models.InsuranceModels;
using Entity.Models.Staff;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Shared.EntityDtos.Customer;
using Shared.EntityDtos.Insurances;
using Shared.EntityDtos.Staff;
using Shared.UserDto;

namespace WebAPI
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<User, UserRegistrationDto>().ReverseMap();
            
            //staff
            CreateMap<Employee, EmployeeDto>().ReverseMap();
            CreateMap<Employee, EmployeeCreateDto>().ReverseMap();
            //customer
            CreateMap<Customer, CustomerDto>().ReverseMap();
            CreateMap<Customer, CustomerCreateDto>().ReverseMap();

            //insurance
            CreateMap<InsuranceProduct, InsuranceProductDto>().ReverseMap();
        }
    }
}
