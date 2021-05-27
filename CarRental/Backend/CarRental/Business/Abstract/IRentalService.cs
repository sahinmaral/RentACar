using Core.Utilities.Results;

using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using Entities.Concrete;
using Entities.DTOs;

namespace Business.Abstract
{
    public interface IRentalService 
    {
        IDataResult<List<Rental>> GetAll();
        IDataResult<Rental> Get(Expression<Func<Rental, bool>> filter);
        IDataResult<Rental> GetById(int entityId);
        IResult Insert(Rental entity);
        IResult Update(Rental entity);
        IResult Delete(Rental entity);
        IDataResult<List<RentalDetailDto>> GetRentalDetails();
    }
}
