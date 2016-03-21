using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Dramazon.DAL;
using Dramazon.Models;
using System.Web;

namespace Dramazon.Controllers
{

    public class LoginReq
    {
        public string alias { get; set; }
        public string password { get; set; }
        public bool rememberme { get; set; }
    }

    public class LoginController : ApiController
    {
        private DramazonContext db = new DramazonContext();
        private Models.Cookie cookie;

        private User AuthUser(string alias, string password)
        {
            if (alias != null && 
                password != null)
            {
                try {
                return db.Users.First(e => e.Alias == alias && e.Password == password);
                } catch(Exception e)
                {
                    return null;
                }
            }
            else return null;
        }

        [HttpPost]
        public string Login([FromBody] LoginReq recieved)
        {
            var userLogin = AuthUser(recieved.alias, recieved.password);

            if (userLogin == null)
            {
                return "Invalid login.";
            }

            if (!ModelState.IsValid)
            {
                return "Error!";
            }
            
            if (!recieved.rememberme)
            {
                cookie = CookieFactory.Create(userLogin);
            }
            else
            {
                cookie = CookieFactory.CreateLong(userLogin);
            }
            
            db.Cookies.Add(cookie);
            db.SaveChanges();

            return Newtonsoft.Json.JsonConvert.SerializeObject(cookie);
        }
    }
}
