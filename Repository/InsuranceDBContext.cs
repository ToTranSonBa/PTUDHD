using Entity.Models;
using Entity.Models.Claim;
using Entity.Models.Customers;
using Entity.Models.InsuranceContractModels;
using Entity.Models.InsuranceModels;
using Entity.Models.Staff;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Repository.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository
{
    public class InsuranceDBContext : IdentityDbContext<User>
    {
        public InsuranceDBContext(DbContextOptions options) : base(options)
        {

        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base .OnModelCreating(modelBuilder);

            modelBuilder.ApplyConfiguration(new RoleConfiguration());
            modelBuilder.Entity<InsuranceBenefit>().HasKey(e
                => new {e.PolicyId, e.Id }) ;
            modelBuilder.Entity<InsuranceBenefitCost>().HasKey(e
                => new { e.PolicyId, e.BenefitId, e.ProgramId });
            modelBuilder.Entity<InsurancePrice>().HasKey(e
                => new { e.PolicyId, e.ProgramId });
            modelBuilder.Entity<ClaimHealthService>().HasKey(e
                => new { e.RequestId, e.Id });
            modelBuilder.Entity<ContractInvoice>().HasKey(e
                => new { e.Id, e.ContractID });
            modelBuilder.Entity<ClaimRequest>(entity
                =>
            {
                entity.HasOne<Customer>(e => e.Customer)
                .WithMany(e => e.Claims)
                .HasForeignKey(e => e.CustomerId)
                .OnDelete(DeleteBehavior.SetNull);
                
            } );
        }
        #region Dbset
        public DbSet<InsuranceProduct>? InsurancePolicies { get; set; }
        public DbSet<InsurancePrice>? InsurancePrices { get; set; }
        public DbSet<InsuranceProgram>? InsurancePrograms { get; set; }
        public DbSet<InsuranceBenefit>? InsuranceBenefits { get; set; }
        public DbSet<InsuranceBenefitCost>? InsuranceBenefitCosts { get; set; }
        public DbSet<Employee>? Employees { get; set; }
        public DbSet<Customer>? Customers { get; set; }
        public DbSet<ClaimHealthService>? ClaimHealthServices { get; set; }
        public DbSet<ClaimInvoice>? ClaimInvoice { get; set;}
        public DbSet<ClaimPayment>? ClaimPayment { get; set; }
        public DbSet<ClaimRequest>? ClaimRequests { get; set; }
        public DbSet<Contract> Contracts { get; set; }
        public DbSet<ContractInvoice> ContractsInvoice { get; set; }
        #endregion
    }
}
