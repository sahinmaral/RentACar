using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

using Core.DataAccess.EntityFramework;

using DataAccess.Abstract;

using Entities.Concrete;
using Entities.DTOs;

using Microsoft.EntityFrameworkCore.Query.SqlExpressions;

namespace DataAccess.Concrete.EntityFramework
{
    public class EfCarDal : EfEntityRepositoryBase<Car, CarRentalContext>, ICarDal
    {
        public List<CarDetailDto> GetCarDetails()
        {
            using (CarRentalContext context = new CarRentalContext())
            {
                var result = from car in context.Cars
                    join co in context.Colours on car.ColourId equals co.ColourId
                    join br in context.Brands on car.BrandId equals br.BrandId
                    select new CarDetailDto()
                    {
                        CarId = car.CarId,
                        BrandName = br.BrandName,
                        ColourName = co.ColourName,
                        CarName = car.CarName,
                        DailyPrice = car.DailyPrice
                    };

                return result.ToList();
            }
        }

        public List<CarDetailDto> GetCarsByBrands(int brandId)
        {
            using (CarRentalContext context = new CarRentalContext())
            {
                var result = from car in context.Cars
                    join co in context.Colours on car.ColourId equals co.ColourId
                    join br in context.Brands on car.BrandId equals br.BrandId
                             where br.BrandId==brandId
                    select new CarDetailDto()
                    {
                        CarId = car.CarId,
                        BrandName = br.BrandName,
                        ColourName = co.ColourName,
                        CarName = car.CarName,
                        DailyPrice = car.DailyPrice
                    };

                return result.ToList();
            }
        }

        public List<CarDetailDto> GetCarsByColours(int colourId)
        {
            using (CarRentalContext context = new CarRentalContext())
            {
                var result = from car in context.Cars
                    join co in context.Colours on car.ColourId equals co.ColourId
                    join br in context.Brands on car.BrandId equals br.BrandId
                    where co.ColourId == colourId
                             select new CarDetailDto()
                    {
                        CarId = car.CarId,
                        BrandName = br.BrandName,
                        ColourName = co.ColourName,
                        CarName = car.CarName,
                        DailyPrice = car.DailyPrice
                    };

                return result.ToList();
            }
        }

        public List<CarDetailDto> GetCarsByBrandsAndColours(int brandId, int colourId)
        {
            var carResult =  GetAll(x => x.ColourId == colourId && x.BrandId==brandId);

            using (CarRentalContext context = new CarRentalContext())
            {
                var result = from car in carResult
                    join colour in context.Colours on car.ColourId equals colour.ColourId
                    join brand in context.Brands on car.BrandId equals brand.BrandId
                    select new CarDetailDto()
                    {
                        CarId = car.CarId,
                        BrandName = brand.BrandName,
                        CarName = car.CarName,
                        ColourName = colour.ColourName,
                        DailyPrice = car.DailyPrice
                    };
                return result.ToList();
            }
        }

        public List<CarDetailDto> GetCarDetailsByCarId(int carId)
        {
            var details = GetCarDetails();
            return details.Where(x => x.CarId == carId).ToList();
        }
    }
}