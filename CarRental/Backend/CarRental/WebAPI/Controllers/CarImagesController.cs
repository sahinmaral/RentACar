﻿using Business.Abstract;

using Core.Utilities.Results;

using Entities.Concrete;

using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using System;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarImagesController : ControllerBase
    {
        private static string _currentDirectory = Environment.CurrentDirectory + "\\wwwroot";
        private static string _folderName = "\\Images\\System\\a.png";
        private string _defaultPath = _currentDirectory + _folderName;


        private ICarImagesService _carImagesService;
        public CarImagesController(ICarImagesService serviceBase)
        {
            _carImagesService = serviceBase;
        }

        [HttpGet("getall")]
        public IActionResult GetAll()
        {
            return GetResponseByResult(_carImagesService.GetAll());
        }

        [HttpGet("getbycarid")]
        public IActionResult GetByCarId(int carId)
        {
            return GetResponseByResult(_carImagesService.GetList(carId));
        }


        [HttpPost("add")]
        public IActionResult Add([FromForm(Name = "Image")] IFormFile file, [FromForm] CarImages carImages)
        {
            return GetResponseByResult(_carImagesService.Insert(file, carImages));
        }

        [HttpPost("update")]
        public IActionResult Update([FromForm(Name = "Image")] IFormFile file, [FromForm] CarImages carImages)
        {
            return GetResponseByResult(_carImagesService.Update(file, carImages));
        }
        [HttpPost("delete")]
        public IActionResult Delete([FromForm]int id)
        {
            var entity = _carImagesService.GetById(id);
            return GetResponseByResult(_carImagesService.Delete(entity.Data));
        }

        public IActionResult GetResponseByResult(IResult result)
        {
            if (result != null)
            {
                return Ok(result);
            }

            return BadRequest(result);
        }


    }
}
