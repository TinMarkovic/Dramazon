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

        private bool UserExists(string alias, string password = null)
        {
            if (password != null)
            {
                return db.Users.Count(e => e.Alias == alias && e.Password == password) > 0;
            }
            else return db.Users.Count(e => e.Alias == alias) > 0;
        }

        private User GetUserById(int id)
        {
            User user = db.Users.Where(e => e.ID == id).First();

            return user;
        }

        [HttpPost]
        public string Login([FromBody] LoginReq recieved)
        {
            if (!UserExists(recieved.alias, recieved.password))
            {
                return "User doesn't exist.";
            }

            if (!ModelState.IsValid)
            {
                return "Error!";
            }

            int id = db.Users.Where(e => e.Alias == recieved.alias && e.Password == recieved.password).First().ID;
            User user = GetUserById(id);
            
            Models.Cookie cookie = new Models.Cookie();

            if (!recieved.rememberme)
            {
                cookie = CookieFactory.Create(user);
            }
            else
            {
                cookie = CookieFactory.CreateLong(user);
            }
            
            db.Cookies.Add(cookie);
            db.SaveChanges();

            return cookie.Value;
        }
    }
}
