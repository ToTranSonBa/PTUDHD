using AutoMapper;
using Entity.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Shared.UserDto;

namespace WebAPI
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<User, UserRegistrationDto>().ReverseMap();
        }
    }
}
