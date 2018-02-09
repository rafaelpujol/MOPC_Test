using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MOPC.Web.Models;

namespace MOPC.Web.Controllers
{
    public class HomeController : Controller
    {
       // private REPOSITORY.UnitOfWork _context;
        private readonly DAL.MopcDbContext _db;

        public HomeController(DAL.MopcDbContext context)
        {
            _db = context;
        }

        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Guardar(DAL.Registro objModel, IFormFile file)
        {

            if(file != null)
            {
                MemoryStream ms = new MemoryStream();
                file.CopyTo(ms);

                objModel.FileData = ms.ToArray();
                objModel.ContentType = file.ContentType;

            }

            _db.Registro.Add(objModel);
            _db.SaveChanges();

            return RedirectToAction("Index");
        }

    }
}
