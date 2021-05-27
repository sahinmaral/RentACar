using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Castle.Components.DictionaryAdapter;
using Core.DataAccess.EntityFramework;
using DataAccess.Abstract;
using Entities.Concrete;
using Entities.DTOs;

namespace DataAccess.Concrete.EntityFramework
{
    public class EfRentalDal:EfEntityRepositoryBase<Rental, CarRentalContext>, IRentalDal
    {
        public List<RentalDetailDto> GetRentalDetails()
        {
            using (CarRentalContext context = new CarRentalContext())
            {
                var result = from rental in context.Rentals
                    join car in context.Cars on rental.CarId equals car.CarId
                    join customer in context.Customers on rental.CustomerId equals customer.Id
                    join user in context.Users on customer.UserId equals user.Id

                    select new RentalDetailDto()
                    {
                        RentalId = rental.RentalId,
                        CarName = car.CarName,
                        CustomerFirstName = user.FirstName,
                        CustomerLastName = user.LastName,
                        RentDate = rental.RentDate.ToShortDateString(),
                        ReturnDate = rental.ReturnDate.ToShortDateString()
                    };

                return result.ToList();
            }
        }
    }
}
