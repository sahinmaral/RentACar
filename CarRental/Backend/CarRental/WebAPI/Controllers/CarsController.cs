using Business.Abstract;

using Core.Utilities.Results;

using Entities.Concrete;

using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarsController : ControllerBase
    {
        private ICarService _carService;
        public CarsController(ICarService serviceBase)
        {
            _carService = serviceBase;
        }

        [HttpGet("getall")]
        public IActionResult GetAll()
        {
            return GetResponseByResult(_carService.GetAll());
        }

        [HttpGet("getcardetails")]
        public IActionResult GetCarDetails()
        {
            return GetResponseByResult(_carService.GetCarDetails());
        }

        [HttpGet("getcardetailsbycarid")]
        public IActionResult GetCarDetailsByCarId(int carId)
        {
            return GetResponseByResult(_carService.GetCarDetailsByCarId(carId));
        }

        [HttpGet("getcarsbybrands")]
        public IActionResult GetCarsByBrands(int brandId)
        {
            return GetResponseByResult(_carService.GetCarsByBrands(brandId));
        }

        [HttpGet("getcarsbybrandsandcolours")]
        public IActionResult GetCarsByBrandsAndColours(int brandId,int colourId)
        {
            return GetResponseByResult(_carService.GetCarsByBrandsAndColours(brandId,colourId));
        }

        [HttpGet("getcarsbycolours")]
        public IActionResult GetCarsByColours(int colourId)
        {
            return GetResponseByResult(_carService.GetCarsByColours(colourId));
        }

        [HttpGet("getbyid")]
        public IActionResult GetById(int id)
        {
            return GetResponseByResult(_carService.GetById(id));
        }

        [HttpPost("add")]
        public IActionResult Add(Car car)
        {
            return GetResponseByResult(_carService.Insert(car));
        }
        [HttpPost("update")]
        public IActionResult Update(Car car)
        {
            return GetResponseByResult(_carService.Update(car));
        }
        [HttpPost("delete")]
        public IActionResult Delete(Car car)
        {
            return GetResponseByResult(_carService.Delete(car));
        }

        public IActionResult GetResponseByResult(IResult result)
        {
            if (result.Success)
            {
                return Ok(result);
            }

            return BadRequest(result);
        }

    }
}
