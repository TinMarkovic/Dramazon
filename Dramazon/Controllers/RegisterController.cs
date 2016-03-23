using Dramazon.DAL;
using Dramazon.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Dramazon.Controllers
{
    public class Reqreq
    {
        public string firstname { get; set; }
        public string lastname { get; set; }
        public string address { get; set; }
        public string email { get; set; }
        public string alias { get; set; }
        public string password { get; set; }
    }

    public class Response
    {
        public bool success { get; set; }
        public string message { get; set; }

        public Response(bool succ, string msg="")
        {
            this.success = succ;
            this.message = msg;
        }
    }

    public class RegisterController : ApiController
    {
        private DramazonContext db = new DramazonContext();

        [HttpPost]
        public string RegisterUser([FromBody] Reqreq received)
        {
            if(received.password == "" || received.password == null || received.alias == "" || received.alias == null || received.email == "" || received.email == null)
            {
                return Newtonsoft.Json.JsonConvert.SerializeObject(new Response(false, "Illegal fields"));
            }

            var result = new Response(true, "");

            if (received.password.Length < 6)
            {
                result.success = false;
                result.message += "Password is too short, it needs at least 6 signs. ";
            }
            if (received.alias.Length < 4)
            {
                result.success = false;
                result.message += "Password is too short, it needs at least 4 signs. ";
            }
            if (received.email.Length < 3)
            {
                result.success = false;
                result.message += "Not a valid email. ";
            }

            if (result.success == false)
                return Newtonsoft.Json.JsonConvert.SerializeObject(result);

            User user = new User();

            user.Password = received.password;
            user.Alias = received.alias;
            user.Email = received.email;

            if (!ModelState.IsValid)
            {
                result.success = false;
                result.message += "Model state invalid. ";
            }
            try
            {
                db.Users.Add(user);
                db.SaveChanges();
            }
            catch (Exception e)
            {
                result.success = false;
                result.message += "Database error: " + e.ToString() + " ";
            }

            return Newtonsoft.Json.JsonConvert.SerializeObject(result);
        }
    }
}
