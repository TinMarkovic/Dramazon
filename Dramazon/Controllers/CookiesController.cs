using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Dramazon.DAL;
using Dramazon.Models;

namespace Dramazon.Controllers
{
    public class CookiesController : Controller
    {
        private DramazonContext db = new DramazonContext();
        
        public bool SaveCookie(Cookie cookie)
        {
            if (!ModelState.IsValid)
            {
                return false;
            }

            db.Cookies.Add(cookie);
            db.SaveChanges();
            
            return true;
        }
    }
}
