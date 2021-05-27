using Core.Utilities.Results;

using Entities.Concrete;

using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using Entities.DTOs;

namespace Business.Abstract
{
    public interface ICustomerService 
    {
        IDataResult<List<Customer>> GetAll();
        IDataResult<List<CustomerDetailDto>> GetCustomerDetails();
        IDataResult<Customer> Get(Expression<Func<Customer, bool>> filter);
        IDataResult<Customer> GetById(int entityId);
        IResult Insert(Customer entity);
        IResult Update(Customer entity);
        IResult Delete(Customer entity);
    }
}
