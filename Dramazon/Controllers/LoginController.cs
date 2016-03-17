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

        //[HttpPost]
        //public string Login(int req)
        //{
        //    Console.WriteLine("CheckA");
        //    var user = Newtonsoft.Json.JsonConvert.DeserializeObject<User>(req);

        //    var cookie = CookieFactory.Create(user);

        //    if (!ModelState.IsValid)
        //    {
        //        return "Error!";
        //    }

        //    db.Cookies.Add(cookie);
        //    db.SaveChanges();

        //    return cookie.Value;
        //}

        [HttpPost]
        public string Login([FromBody] LoginReq recieved)
        {
            //LoginReq UserA =(LoginReq) recieved;
            ////LoginReq User = Newtonsoft.Json.JsonConvert.DeserializeObject<LoginReq>(recieved);
            //var result = UserA.rememberme ? "Zapamtim te" : "Ili ne";
            return recieved.alias;
        }
    }
}
