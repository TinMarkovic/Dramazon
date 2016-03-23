using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using Dramazon.DAL;
using Dramazon.Models;

namespace Dramazon.Controllers
{
    public class UsersController : ApiController
    {
        private DramazonContext db = new DramazonContext();

        public class Token
        {
            public string token { get; set; }
        }

        [HttpGet]
        public string GetUserData([FromBody] Token req)
        {
            User user = new User();

            if (!ModelState.IsValid)
            {
                return "Error!";
            }
            try
            {
                user = db.Cookies.First(e => e.Value == req.token).User;
            }
            catch (Exception e)
            {
                return "Error, cookie is not valid";
            }

            return Newtonsoft.Json.JsonConvert.SerializeObject(user);
        }

        [HttpPut]
        public string ChangeUserData([FromBody] User user)
        {
            int userid = -1;

            // Provjeravam jeli uopće primljeni user postoji
            if (!ModelState.IsValid)
            {
                return "Error!";
            }
            try
            {
                userid = db.Users.First(e => e.ID == user.ID).ID;
            }
            catch (Exception e)
            {
                return "Error while searching for user";
            }

            if (userid == -1)
            {
                return "Error, user is nowhere to be found";
            }

            // Mjenjam podatke usera
            if (!ModelState.IsValid)
            {
                return "Error!";
            }
            try
            {
                db.Users.First(e => e.ID == user.ID).FirstName = user.FirstName;
                db.Users.First(e => e.ID == user.ID).LastName = user.LastName;
                db.Users.First(e => e.ID == user.ID).Address = user.Address;
                db.Users.First(e => e.ID == user.ID).Email = user.Email;
                db.Users.First(e => e.ID == user.ID).Password = user.Password;
            }
            catch (Exception e)
            {
                return "Error while changing user data";
            }

            return "User successfully edited";
        }

        //[HttpPost]
        //public string Login(string req)
        //{
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

        //// GET: api/Users
        //public string GetUsers()
        //{
        //    return Newtonsoft.Json.JsonConvert.SerializeObject(db.Users);
        //}

        //// GET: api/Users/5
        //[ResponseType(typeof(User))]
        //public IHttpActionResult GetUser(int id)
        //{
        //    User user = db.Users.Find(id);
        //    if (user == null)
        //    {
        //        return NotFound();
        //    }

        //    return Ok(user);
        //}

        //// PUT: api/Users/5
        //[ResponseType(typeof(void))]
        //public IHttpActionResult PutUser(int id, User user)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    if (id != user.ID)
        //    {
        //        return BadRequest();
        //    }

        //    db.Entry(user).State = EntityState.Modified;

        //    try
        //    {
        //        db.SaveChanges();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        if (!UserExists(id))
        //        {
        //            return NotFound();
        //        }
        //        else
        //        {
        //            throw;
        //        }
        //    }

        //    return StatusCode(HttpStatusCode.NoContent);
        //}

        //// POST: api/Users
        //[ResponseType(typeof(User))]
        //public IHttpActionResult PostUser(User user)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    db.Users.Add(user);
        //    db.SaveChanges();

        //    return CreatedAtRoute("DefaultApi", new { id = user.ID }, user);
        //}

        //// DELETE: api/Users/5
        //[ResponseType(typeof(User))]
        //public IHttpActionResult DeleteUser(int id)
        //{
        //    User user = db.Users.Find(id);
        //    if (user == null)
        //    {
        //        return NotFound();
        //    }

        //    db.Users.Remove(user);
        //    db.SaveChanges();

        //    return Ok(user);
        //}

        //protected override void Dispose(bool disposing)
        //{
        //    if (disposing)
        //    {
        //        db.Dispose();
        //    }
        //    base.Dispose(disposing);
        //}

        //private bool UserExists(int id)
        //{
        //    return db.Users.Count(e => e.ID == id) > 0;
        //}
    }
}