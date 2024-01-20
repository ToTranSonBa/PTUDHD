using AutoMapper;
using Contracts;
using Entity.Exceptions;
using Entity.Exceptions.Insurance;
using Entity.Models.InsuranceModels;
using Service.Contracts.Insurances;
using Shared.EntityDtos.Insurances.HealthCondition;
using Shared.EntityDtos.Insurances.InsuranceBenefit;
using Shared.EntityDtos.Insurances.InsuranceProduct;
using Shared.EntityDtos.Insurances.InsuranceProgram;
using Shared.Helper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Insurances
{
    public class InsuranceProductService : IInsuranceProductService
    {
        private readonly IRepositoryManager _repositoryManager;
        private readonly IMapper _mapper;
        public InsuranceProductService(IRepositoryManager repositoryManager, IMapper mapper) { 
            this._repositoryManager = repositoryManager;
            this._mapper = mapper;
        }
        public async Task<List<InsuranceProductDto>> GetAll(bool trackChanges)
        {
            var products = await _repositoryManager.InsuranceProducts.GetAll(trackChanges);
            var returnProducts = new List<InsuranceProductDto>();
            foreach (var product in products)
            {
                var rProduct = await ConvertProductEntityToDto(product);
                returnProducts.Add(rProduct);
            }
            return returnProducts;
        }
        public async Task<InsuranceProductDto> GetById(int Id, bool trachChanges)
        {
            var product = await _repositoryManager.InsuranceProducts.GetById(Id, trachChanges);
            if(product  == null)
            {
                throw new InsuranceProductNotFoundException(Id); 
            }
            var returnProduct = await ConvertProductEntityToDto(product);
            return returnProduct;
        }
        private async Task<InsuranceProductDto> ConvertProductEntityToDto(InsuranceProduct product)
        {
            var rProduct = _mapper.Map<InsuranceProductDto>(product);
            rProduct.Conditions = _mapper.Map<List<HealthConditionProductDto>>(product.HealthConditionSource);
            rProduct.TotalQuantitySold = await TotalQuantitySoldOfProduct(product.Id);
            // Map entity to Dto Benefit
            // cách làm:
            // 1. lặp qua danh sách product.benefitTypes
            // 2. Lấy danh sách benefit theo từng benefitType.
            // 3. lặp qua danh sách benefit và lấy danh sách product.costs theo benefit
            // 4. lặp qua danh sách cost vừa lấy và lấy thông tin của program của từng cost
            // 

            var ListBenefitTypeDto = new List<InsuranceBenefitTypeProductDto>();
            foreach (var benefitType in product.BenefitTypes)
            {
                // get benefitType and list benefit
                var BenefitType = await _repositoryManager.InsuranceBenefitType.GetByIdAsync(benefitType.BenefitTypeId, false);
                var benefitTypeDto = new InsuranceBenefitTypeProductDto
                {
                    BenefitTypeId = benefitType.BenefitTypeId,
                    Name = benefitType.Name,
                    Benefits = new List<InsuranceBenefitProductDto>()
                };
                foreach (var benefit in BenefitType.Benefits)
                {
                    var costs = product.Costs.Where(e => e.BenefitId == benefit.Id);
                    var benefitdto = _mapper.Map<InsuranceBenefitProductDto>(benefit);
                    benefitdto.benefitProgramCosts = new List<BenefitProgramCostDto>();
                    // get information about Program
                    foreach (var cost in costs)
                    {
                        var program = await _repositoryManager.InsurancePrograms.GetByGuidId(cost.ProgramId, false);
                        benefitdto.benefitProgramCosts.Add(new BenefitProgramCostDto
                        {
                            Price = cost.Cost,
                            ProgramId = program.ProgramId,
                            ProgramName = program.Name
                        });
                    }
                    benefitTypeDto.Benefits.Add(benefitdto);
                }
                ListBenefitTypeDto.Add(benefitTypeDto);
            }
            rProduct.benefitType = ListBenefitTypeDto;

            // price
            var ListPrice = new List<ProgramPriceDto>();
            foreach (var price in product.Prices)
            {
                var program = await _repositoryManager.InsurancePrograms.GetByGuidId(price.ProgramId, false);
                ListPrice.Add(new ProgramPriceDto
                {
                    Price = price.Price,
                    ProgramId = program.ProgramId,
                    ProgramName = program.Name,
                });
            }
            rProduct.ProgramPrice = ListPrice;

            return rProduct;
        }
        private async Task<int> TotalQuantitySoldOfProduct(Guid ProductId)
        {
            return (await _repositoryManager.Contracts.GetByProductId(ProductId, false)).Count();
        }
        public async Task AddInsuranceProduct (AddInsuranceProductDto productDto)
        {
            //var product = _mapper.Map<InsuranceProduct>(productDto);
            var product = new InsuranceProduct
            {
                Id = new Guid(),
                PolicyName = productDto.PolicyName,
                InsuredParty = productDto.InsuredParty,
                FeeGuarantee = productDto.FeeGuarantee,
                Commitment = productDto.Commitment,
                ParticipationProcedure = productDto.ParticipationProcedure,
                TerritorialScope = productDto.TerritorialScope,
                ShortDescription = productDto.ShortDescription,
                ImageUrl = ImageHelper.Upload(productDto.ImageUrl)
            };
            var check = _repositoryManager.InsuranceProducts.Add(product);

            product.HealthConditionSource = new List<HealthCondition>();
            // add condition
            var listcondition = productDto.Conditions;
            product.HealthConditionSource = new List<HealthCondition>();
            foreach ( var conditionDto in listcondition)
            {
                var newCondtion = new HealthCondition
                {
                    Id = new Guid(),
                    Name = conditionDto.Name,
                    Question = conditionDto.Question,
                    ProductId = product.Id
                };
                product.HealthConditionSource.Add(newCondtion);
            }

            // add price
            var prices = productDto.ProgramPrices;
            product.Prices = new List<InsurancePrice>();
            foreach(var priceDto in prices)
            {
                var  programs = await _repositoryManager.InsurancePrograms.GetAllAsync(false);
                foreach(var program in programs)
                {
                    if(priceDto.ProgramName == program.Name)
                    {
                        var price = new InsurancePrice
                        {
                            PolicyId = product.Id,
                            ProgramId = program.Id,
                            Price = priceDto.price
                        };
                        product.Prices.Add(price);
                    }
                } 
            }
            await _repositoryManager.SaveAsync();

            // add benefit
            product.BenefitTypes = new List<InsuranceBenefitType>();
            product.Costs = new List<InsuranceBenefitCost>();
            foreach(var benefitTypeDto in productDto.BenefitTypes)
            {
                var benefitType = await _repositoryManager.InsuranceBenefitType.GetByIdAsync(benefitTypeDto.BenefitTypeId, false);
                if(benefitType == null)
                {
                    throw new ReturnNotFoundException($"Benefit type with id: {benefitTypeDto.BenefitTypeId} not found");
                }
                product.BenefitTypes.Add(benefitType);
                foreach(var benefit in benefitTypeDto.Benefits)
                {
                    var existBenefit = benefitType.Benefits.Where(e => e.BenefitId == benefit.BenefitId).SingleOrDefault();
                    if(existBenefit != null)
                    {
                        var listProgram = _repositoryManager.InsurancePrograms.GetAll(false);
                        foreach(var program in listProgram)
                        {
                            product.Costs.Add(new InsuranceBenefitCost
                            {
                                BenefitId = existBenefit.Id,
                                PolicyId = product.Id,
                                ProgramId = program.Id,
                                Cost = benefit.Price * program.Multiplier
                            }) ;
                        }
                        
                    }
                }
                
            }
            await _repositoryManager.SaveAsync();
        }
    }
}
