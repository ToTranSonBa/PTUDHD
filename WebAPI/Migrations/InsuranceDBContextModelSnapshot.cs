﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Repository;

#nullable disable

namespace WebAPI.Migrations
{
    [DbContext(typeof(InsuranceDBContext))]
    partial class InsuranceDBContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.24")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("Entity.Models.Claim.ClaimHealthService", b =>
                {
                    b.Property<Guid>("ClaimPaymentId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("Id")
                        .HasColumnType("uniqueidentifier");

                    b.Property<int?>("CostOfATreatment")
                        .HasColumnType("int");

                    b.Property<string>("HospitalName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ServiceName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime?>("UsedDate")
                        .HasColumnType("datetime2");

                    b.HasKey("ClaimPaymentId", "Id");

                    b.ToTable("ClaimHealthServices");
                });

            modelBuilder.Entity("Entity.Models.Claim.ClaimInvoice", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime>("CreatedDate")
                        .HasColumnType("datetime2");

                    b.Property<Guid>("PaymentID")
                        .HasColumnType("uniqueidentifier");

                    b.Property<float>("TotalCost")
                        .HasColumnType("real");

                    b.HasKey("Id");

                    b.HasIndex("PaymentID");

                    b.ToTable("ClaimInvoice");
                });

            modelBuilder.Entity("Entity.Models.Claim.ClaimPayment", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime?>("CreatedDate")
                        .HasColumnType("datetime2");

                    b.Property<Guid?>("CustomerId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid?>("EmployeeId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime?>("LastModifiedDate")
                        .HasColumnType("datetime2");

                    b.Property<Guid?>("RequestID")
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Status")
                        .HasColumnType("nvarchar(max)");

                    b.Property<float?>("TotalCost")
                        .HasColumnType("real");

                    b.HasKey("Id");

                    b.HasIndex("CustomerId");

                    b.HasIndex("EmployeeId");

                    b.HasIndex("RequestID");

                    b.ToTable("ClaimPayment");
                });

            modelBuilder.Entity("Entity.Models.Claim.ClaimRequest", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid?>("ContractId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime?>("CreatedDate")
                        .HasColumnType("datetime2");

                    b.Property<Guid?>("CustomerId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("HospitalBillAmount")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Status")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("ContractId");

                    b.HasIndex("CustomerId");

                    b.ToTable("ClaimRequests");
                });

            modelBuilder.Entity("Entity.Models.Customers.Customer", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Address")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime?>("Birthday")
                        .HasColumnType("datetime2");

                    b.Property<DateTime?>("CreateDay")
                        .HasColumnType("datetime2");

                    b.Property<int>("CustomerId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("CustomerId"), 1L, 1);

                    b.Property<string>("Email")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("IdentifycationNumber")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PhoneNumber")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserID")
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("Id");

                    b.HasIndex("UserID");

                    b.ToTable("Customers");
                });

            modelBuilder.Entity("Entity.Models.InsuranceContractModels.Contract", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime?>("ConfirmDate")
                        .HasColumnType("datetime2");

                    b.Property<Guid>("ContractId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime>("CreatedDate")
                        .HasColumnType("datetime2");

                    b.Property<Guid?>("CustomerID")
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid?>("EmployeeID")
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime?>("EndDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("HealthDeclaration")
                        .HasColumnType("nvarchar(max)");

                    b.Property<Guid?>("InsuranceProductId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid?>("InsuranceProgramId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime?>("StartDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("Status")
                        .HasColumnType("nvarchar(max)");

                    b.Property<float?>("TotalPrice")
                        .HasColumnType("real");

                    b.HasKey("Id");

                    b.HasIndex("CustomerID");

                    b.HasIndex("EmployeeID");

                    b.HasIndex("InsuranceProductId");

                    b.HasIndex("InsuranceProgramId");

                    b.ToTable("Contracts");
                });

            modelBuilder.Entity("Entity.Models.InsuranceContractModels.ContractHealthCondition", b =>
                {
                    b.Property<Guid>("ContractId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("HealthConditionId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<bool>("Status")
                        .HasColumnType("bit");

                    b.HasKey("ContractId", "HealthConditionId");

                    b.HasIndex("HealthConditionId");

                    b.ToTable("ContractHealthConditions");
                });

            modelBuilder.Entity("Entity.Models.InsuranceContractModels.ContractInvoice", b =>
                {
                    b.Property<Guid>("Id")
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("ContractID")
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime?>("CreatedDate")
                        .HasColumnType("datetime2");

                    b.Property<int>("InvoiceId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("InvoiceId"), 1L, 1);

                    b.Property<float?>("LastPrice")
                        .HasColumnType("real");

                    b.HasKey("Id", "ContractID");

                    b.HasIndex("ContractID");

                    b.ToTable("ContractsInvoice");
                });

            modelBuilder.Entity("Entity.Models.InsuranceModels.HealthCondition", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<int>("HealthConditionId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("HealthConditionId"), 1L, 1);

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<Guid>("ProductId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Question")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("ProductId");

                    b.ToTable("HealthConditions");
                });

            modelBuilder.Entity("Entity.Models.InsuranceModels.InsuranceBenefit", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<int>("BenefitId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("BenefitId"), 1L, 1);

                    b.Property<string>("BenefitName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<Guid?>("BenefitTypeId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("BenefitTypeId");

                    b.ToTable("InsuranceBenefits");
                });

            modelBuilder.Entity("Entity.Models.InsuranceModels.InsuranceBenefitCost", b =>
                {
                    b.Property<Guid>("PolicyId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("BenefitId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("ProgramId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<float?>("Cost")
                        .HasColumnType("real");

                    b.Property<Guid?>("ProductId")
                        .HasColumnType("uniqueidentifier");

                    b.HasKey("PolicyId", "BenefitId", "ProgramId");

                    b.HasIndex("BenefitId");

                    b.HasIndex("ProductId");

                    b.HasIndex("ProgramId");

                    b.ToTable("InsuranceBenefitCosts");
                });

            modelBuilder.Entity("Entity.Models.InsuranceModels.InsuranceBenefitType", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<int>("BenefitTypeId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("BenefitTypeId"), 1L, 1);

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("InsuranceBenefitType");
                });

            modelBuilder.Entity("Entity.Models.InsuranceModels.InsurancePrice", b =>
                {
                    b.Property<Guid>("PolicyId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("ProgramId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<float>("Price")
                        .HasColumnType("real");

                    b.Property<Guid?>("ProductId")
                        .HasColumnType("uniqueidentifier");

                    b.HasKey("PolicyId", "ProgramId");

                    b.HasIndex("ProductId");

                    b.HasIndex("ProgramId");

                    b.ToTable("InsurancePrices");
                });

            modelBuilder.Entity("Entity.Models.InsuranceModels.InsuranceProduct", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Commitment")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FeeGuarantee")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ImageUrl")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("InsuredParty")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ParticipationProcedure")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PolicyName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("ProductId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ProductId"), 1L, 1);

                    b.Property<string>("ShortDescription")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Status")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("TerritorialScope")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("InsuranceProducts");
                });

            modelBuilder.Entity("Entity.Models.InsuranceModels.InsuranceProgram", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<float>("Multiplier")
                        .HasColumnType("real");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("NormalizedName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("ProgramId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ProgramId"), 1L, 1);

                    b.HasKey("Id");

                    b.ToTable("InsurancePrograms");
                });

            modelBuilder.Entity("Entity.Models.Staff.Employee", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Address")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime?>("Birthday")
                        .HasColumnType("datetime2");

                    b.Property<DateTime?>("CreateDay")
                        .HasColumnType("datetime2");

                    b.Property<string>("Email")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("EmployeeId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("EmployeeId"), 1L, 1);

                    b.Property<string>("IdentifycationNumber")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PhoneNumber")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserID")
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("Id");

                    b.HasIndex("EmployeeId")
                        .IsUnique();

                    b.HasIndex("UserID");

                    b.ToTable("Employees");
                });

            modelBuilder.Entity("Entity.Models.User", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<int>("AccessFailedCount")
                        .HasColumnType("int");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Email")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<bool>("EmailConfirmed")
                        .HasColumnType("bit");

                    b.Property<bool>("LockoutEnabled")
                        .HasColumnType("bit");

                    b.Property<DateTimeOffset?>("LockoutEnd")
                        .HasColumnType("datetimeoffset");

                    b.Property<string>("NormalizedEmail")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("NormalizedUserName")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("PasswordHash")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PhoneNumber")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("PhoneNumberConfirmed")
                        .HasColumnType("bit");

                    b.Property<string>("RefreshToken")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("RefreshTokenExpiry")
                        .HasColumnType("datetime2");

                    b.Property<string>("SecurityStamp")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("TwoFactorEnabled")
                        .HasColumnType("bit");

                    b.Property<string>("UserName")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.HasKey("Id");

                    b.HasIndex("NormalizedEmail")
                        .HasDatabaseName("EmailIndex");

                    b.HasIndex("NormalizedUserName")
                        .IsUnique()
                        .HasDatabaseName("UserNameIndex")
                        .HasFilter("[NormalizedUserName] IS NOT NULL");

                    b.ToTable("AspNetUsers", (string)null);
                });

            modelBuilder.Entity("InsuranceBenefitTypeInsuranceProduct", b =>
                {
                    b.Property<Guid>("BenefitTypesId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("ProductsId")
                        .HasColumnType("uniqueidentifier");

                    b.HasKey("BenefitTypesId", "ProductsId");

                    b.HasIndex("ProductsId");

                    b.ToTable("InsuranceBenefitTypeInsuranceProduct");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRole", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("NormalizedName")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.HasKey("Id");

                    b.HasIndex("NormalizedName")
                        .IsUnique()
                        .HasDatabaseName("RoleNameIndex")
                        .HasFilter("[NormalizedName] IS NOT NULL");

                    b.ToTable("AspNetRoles", (string)null);

                    b.HasData(
                        new
                        {
                            Id = "4d86709e-fd75-4190-9b5f-c723972c549d",
                            ConcurrencyStamp = "e95722ff-c475-40ff-847b-61eed5257e54",
                            Name = "Manager",
                            NormalizedName = "MANAGER"
                        },
                        new
                        {
                            Id = "69503958-43a3-4045-8f45-ab305830839e",
                            ConcurrencyStamp = "e6af2ba7-6702-4502-a622-ca4426c127a1",
                            Name = "Administrator",
                            NormalizedName = "ADMINISTRATOR"
                        },
                        new
                        {
                            Id = "a39bf69c-ed55-421a-9a3f-2065c3c563ff",
                            ConcurrencyStamp = "f05977af-c5ab-43b2-a698-d51a6ffb8286",
                            Name = "Customer",
                            NormalizedName = "CUSTOMER"
                        },
                        new
                        {
                            Id = "4002ccda-eee3-451f-bfc1-2fd2e8c590d5",
                            ConcurrencyStamp = "13d25e56-4cba-4f3a-949d-e4de053f646e",
                            Name = "Employee",
                            NormalizedName = "EMPLOYEE"
                        });
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<string>("ClaimType")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ClaimValue")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("RoleId")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("Id");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetRoleClaims", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<string>("ClaimType")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ClaimValue")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserId")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserClaims", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<string>", b =>
                {
                    b.Property<string>("LoginProvider")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("ProviderKey")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("ProviderDisplayName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserId")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("LoginProvider", "ProviderKey");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserLogins", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<string>", b =>
                {
                    b.Property<string>("UserId")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("RoleId")
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("UserId", "RoleId");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetUserRoles", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<string>", b =>
                {
                    b.Property<string>("UserId")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("LoginProvider")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Value")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("UserId", "LoginProvider", "Name");

                    b.ToTable("AspNetUserTokens", (string)null);
                });

            modelBuilder.Entity("Entity.Models.Claim.ClaimHealthService", b =>
                {
                    b.HasOne("Entity.Models.Claim.ClaimPayment", "ClaimPayment")
                        .WithMany("claims")
                        .HasForeignKey("ClaimPaymentId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("ClaimPayment");
                });

            modelBuilder.Entity("Entity.Models.Claim.ClaimInvoice", b =>
                {
                    b.HasOne("Entity.Models.Claim.ClaimPayment", "Payment")
                        .WithMany()
                        .HasForeignKey("PaymentID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Payment");
                });

            modelBuilder.Entity("Entity.Models.Claim.ClaimPayment", b =>
                {
                    b.HasOne("Entity.Models.Customers.Customer", null)
                        .WithMany("Payments")
                        .HasForeignKey("CustomerId");

                    b.HasOne("Entity.Models.Staff.Employee", "Employee")
                        .WithMany()
                        .HasForeignKey("EmployeeId");

                    b.HasOne("Entity.Models.Claim.ClaimRequest", "Request")
                        .WithMany()
                        .HasForeignKey("RequestID");

                    b.Navigation("Employee");

                    b.Navigation("Request");
                });

            modelBuilder.Entity("Entity.Models.Claim.ClaimRequest", b =>
                {
                    b.HasOne("Entity.Models.InsuranceContractModels.Contract", "Contract")
                        .WithMany()
                        .HasForeignKey("ContractId");

                    b.HasOne("Entity.Models.Customers.Customer", "Customer")
                        .WithMany("Claims")
                        .HasForeignKey("CustomerId")
                        .OnDelete(DeleteBehavior.SetNull);

                    b.Navigation("Contract");

                    b.Navigation("Customer");
                });

            modelBuilder.Entity("Entity.Models.Customers.Customer", b =>
                {
                    b.HasOne("Entity.Models.User", "User")
                        .WithMany()
                        .HasForeignKey("UserID");

                    b.Navigation("User");
                });

            modelBuilder.Entity("Entity.Models.InsuranceContractModels.Contract", b =>
                {
                    b.HasOne("Entity.Models.Customers.Customer", "Customer")
                        .WithMany()
                        .HasForeignKey("CustomerID");

                    b.HasOne("Entity.Models.Staff.Employee", "Employee")
                        .WithMany()
                        .HasForeignKey("EmployeeID");

                    b.HasOne("Entity.Models.InsuranceModels.InsuranceProduct", "InsuranceProduct")
                        .WithMany()
                        .HasForeignKey("InsuranceProductId");

                    b.HasOne("Entity.Models.InsuranceModels.InsuranceProgram", "InsuranceProgram")
                        .WithMany()
                        .HasForeignKey("InsuranceProgramId");

                    b.Navigation("Customer");

                    b.Navigation("Employee");

                    b.Navigation("InsuranceProduct");

                    b.Navigation("InsuranceProgram");
                });

            modelBuilder.Entity("Entity.Models.InsuranceContractModels.ContractHealthCondition", b =>
                {
                    b.HasOne("Entity.Models.InsuranceContractModels.Contract", "Contract")
                        .WithMany("ContractHealthConditions")
                        .HasForeignKey("ContractId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Entity.Models.InsuranceModels.HealthCondition", "HealthCondition")
                        .WithMany("contracts")
                        .HasForeignKey("HealthConditionId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Contract");

                    b.Navigation("HealthCondition");
                });

            modelBuilder.Entity("Entity.Models.InsuranceContractModels.ContractInvoice", b =>
                {
                    b.HasOne("Entity.Models.InsuranceContractModels.Contract", "Contract")
                        .WithMany()
                        .HasForeignKey("ContractID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Contract");
                });

            modelBuilder.Entity("Entity.Models.InsuranceModels.HealthCondition", b =>
                {
                    b.HasOne("Entity.Models.InsuranceModels.InsuranceProduct", "Product")
                        .WithMany("HealthConditionSource")
                        .HasForeignKey("ProductId")
                        .IsRequired();

                    b.Navigation("Product");
                });

            modelBuilder.Entity("Entity.Models.InsuranceModels.InsuranceBenefit", b =>
                {
                    b.HasOne("Entity.Models.InsuranceModels.InsuranceBenefitType", "BenefitType")
                        .WithMany("Benefits")
                        .HasForeignKey("BenefitTypeId");

                    b.Navigation("BenefitType");
                });

            modelBuilder.Entity("Entity.Models.InsuranceModels.InsuranceBenefitCost", b =>
                {
                    b.HasOne("Entity.Models.InsuranceModels.InsuranceBenefit", "Benefit")
                        .WithMany()
                        .HasForeignKey("BenefitId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Entity.Models.InsuranceModels.InsuranceProduct", "Product")
                        .WithMany("Costs")
                        .HasForeignKey("ProductId");

                    b.HasOne("Entity.Models.InsuranceModels.InsuranceProgram", "Program")
                        .WithMany("Benefits")
                        .HasForeignKey("ProgramId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Benefit");

                    b.Navigation("Product");

                    b.Navigation("Program");
                });

            modelBuilder.Entity("Entity.Models.InsuranceModels.InsurancePrice", b =>
                {
                    b.HasOne("Entity.Models.InsuranceModels.InsuranceProduct", "Product")
                        .WithMany("Prices")
                        .HasForeignKey("ProductId");

                    b.HasOne("Entity.Models.InsuranceModels.InsuranceProgram", "Program")
                        .WithMany("Prices")
                        .HasForeignKey("ProgramId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Product");

                    b.Navigation("Program");
                });

            modelBuilder.Entity("Entity.Models.Staff.Employee", b =>
                {
                    b.HasOne("Entity.Models.User", "User")
                        .WithMany()
                        .HasForeignKey("UserID");

                    b.Navigation("User");
                });

            modelBuilder.Entity("InsuranceBenefitTypeInsuranceProduct", b =>
                {
                    b.HasOne("Entity.Models.InsuranceModels.InsuranceBenefitType", null)
                        .WithMany()
                        .HasForeignKey("BenefitTypesId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Entity.Models.InsuranceModels.InsuranceProduct", null)
                        .WithMany()
                        .HasForeignKey("ProductsId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole", null)
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<string>", b =>
                {
                    b.HasOne("Entity.Models.User", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<string>", b =>
                {
                    b.HasOne("Entity.Models.User", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole", null)
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Entity.Models.User", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<string>", b =>
                {
                    b.HasOne("Entity.Models.User", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Entity.Models.Claim.ClaimPayment", b =>
                {
                    b.Navigation("claims");
                });

            modelBuilder.Entity("Entity.Models.Customers.Customer", b =>
                {
                    b.Navigation("Claims");

                    b.Navigation("Payments");
                });

            modelBuilder.Entity("Entity.Models.InsuranceContractModels.Contract", b =>
                {
                    b.Navigation("ContractHealthConditions");
                });

            modelBuilder.Entity("Entity.Models.InsuranceModels.HealthCondition", b =>
                {
                    b.Navigation("contracts");
                });

            modelBuilder.Entity("Entity.Models.InsuranceModels.InsuranceBenefitType", b =>
                {
                    b.Navigation("Benefits");
                });

            modelBuilder.Entity("Entity.Models.InsuranceModels.InsuranceProduct", b =>
                {
                    b.Navigation("Costs");

                    b.Navigation("HealthConditionSource");

                    b.Navigation("Prices");
                });

            modelBuilder.Entity("Entity.Models.InsuranceModels.InsuranceProgram", b =>
                {
                    b.Navigation("Benefits");

                    b.Navigation("Prices");
                });
#pragma warning restore 612, 618
        }
    }
}
