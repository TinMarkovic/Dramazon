using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Dramazon.DAL;
using Dramazon.Models;

namespace Dramazon.Controllers
{
    public class LoginController : ApiController
    {
        private DramazonContext db = new DramazonContext();

        [HttpPost]
        public string Login(string req)
        {
            var user = Newtonsoft.Json.JsonConvert.DeserializeObject<User>(req);

            var cookie = CookieFactory.Create(user);

            if (!ModelState.IsValid)
            {
                return "Error!";
            }

            db.Cookies.Add(cookie);
            db.SaveChanges();

            return cookie.Value;
        }

        [HttpPost]
        public string Login()
        {
            return "RADI!";
        }
    }
}
