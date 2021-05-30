using System;
using System.Collections.Generic;
using System.Text;
using Core.DataAccess;
using Entities.Concrete;
using Entities.DTOs;

namespace DataAccess.Abstract
{
    public interface ICarDal:IEntityRepository<Car>
    {
        List<CarDetailDto> GetCarDetails();
        List<CarDetailDto> GetCarsByBrands(int brandId);
        List<CarDetailDto> GetCarsByColours(int colourId);
        List<CarDetailDto> GetCarsByBrandsAndColours(int brandId,int colourId); 
        List<CarDetailDto> GetCarDetailsByCarId(int carId);
    }
}
