using AutoMapper;
using Contracts;
using Entity.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Repository;
using Service.Contracts;
using Services;

namespace WebAPI.Extensions;
public static class ServiceExtension
{
    public static void ConfigureServiceManager(this IServiceCollection service)
        => service.AddScoped<IServiceManager, ServiceManager>();
    public static void ConfigureRepositoryManager(this IServiceCollection service)
        => service.AddScoped<IRepositoryManager, RepositoryManager>();
    public static void ConfigureMapping(this IServiceCollection service)
        => service.AddScoped<IMapper, Mapper>();
    public static void ConfigureSqlContext(this IServiceCollection services, IConfiguration configuration) =>
        services.AddDbContext<InsuranceDBContext>(opts =>
            opts.UseSqlServer(configuration.GetConnectionString("InsuranceConnectionString")));
    public static void ConfigureIdentity(this IServiceCollection services)
    {
        var builder = services.AddIdentity<User, IdentityRole>(o =>
        {
            o.Password.RequireDigit = true;
            o.Password.RequireLowercase = false;
            o.Password.RequireUppercase = false;
            o.Password.RequireNonAlphanumeric = false;
            o.Password.RequiredLength = 10;
            o.User.RequireUniqueEmail = true;
        })
        .AddEntityFrameworkStores<InsuranceDBContext>()
        .AddDefaultTokenProviders();
    }

}
