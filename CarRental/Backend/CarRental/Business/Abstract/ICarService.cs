using Core.Utilities.Results;

using Entities.Concrete;
using Entities.DTOs;

using System;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace Business.Abstract
{
    public interface ICarService 
    {
        IDataResult<List<Car>> GetAll();
        IDataResult<Car> Get(Expression<Func<Car, bool>> filter);
        IDataResult<Car> GetById(int entityId);
        IResult Insert(Car entity);
        IResult Update(Car entity);
        IResult Delete(Car entity);
        IDataResult<List<CarDetailDto>> GetCarDetails();
        IDataResult<List<CarDetailDto>> GetCarsByBrands(int brandId);
        IDataResult<List<CarDetailDto>> GetCarsByColours(int colourId);
        IDataResult<List<CarDetailDto>> GetCarsByBrandsAndColours(int brandId,int colourId);
        IDataResult<List<CarDetailDto>> GetCarDetailsByCarId(int carId);
        
    }
}
