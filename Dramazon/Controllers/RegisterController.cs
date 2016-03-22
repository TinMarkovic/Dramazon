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

    public class RegisterController : ApiController
    {
        private DramazonContext db = new DramazonContext();

        [HttpPost]
        public string RegisterUser([FromBody] Reqreq recieved)
        {
            if(recieved.password == "" || recieved.password == null || recieved.alias == "" || recieved.alias == null)
            {
                return "The alias or password is invalid";
            }
            
            User user = new User();

            user.Password = recieved.password;
            user.Alias = recieved.alias;

            if (recieved.firstname != "" || recieved.firstname != null)
            {
                user.FirstName = recieved.firstname;
            }
            if (recieved.lastname != "" || recieved.lastname != null)
            {
                user.LastName = recieved.lastname;
            }
            if (recieved.address != "" || recieved.address != null)
            {
                user.Address = recieved.address;
            }
            if (recieved.email != "" || recieved.email != null)
            {
                user.Email = recieved.email;
            }

            if (!ModelState.IsValid)
            {
                return "Error!";
            }
            try
            {
                db.Users.Add(user);
                db.SaveChanges();
            }
            catch (Exception e)
            {
                return "Error, can't add user";
            }

            return "Success";
        }
    }
}
