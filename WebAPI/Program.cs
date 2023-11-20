using Entity.Email;
using Microsoft.EntityFrameworkCore;
using NETCore.MailKit.Core;
using Repository;
using WebAPI.Extensions;

var builder = WebApplication.CreateBuilder(args);
var configure = builder.Configuration;

// Add services to the container.
builder.Services.AddAutoMapper(typeof(Program));
builder.Services.AddAuthentication();
builder.Services.ConfigureIdentity();


builder.Services.ConfigureServiceManager();
builder.Services.ConfigureRepositoryManager();
builder.Services.ConfigureSqlContext(configure);

//Email configuration
var email = configure.GetSection("EmailConfiguration").Get<EmailConfiguration>();
builder.Services.AddSingleton(email);
//builder.Services.AddScoped<IEmailService, EmailService>();

builder.Services.AddControllers();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
