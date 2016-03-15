using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Dramazon.Models;
using System.Security.Cryptography;
using Dramazon.DAL;

namespace Dramazon.Controllers
{
    public static class CookieFactory
    {

        public static Cookie Create(User user)
        {
            var rnd = new Random();
            var value = MD5.Create(rnd.Next().ToString()).ToString();

            var result = new Cookie(value, DateTime.Now, DateTime.Now.AddHours(4), user);
            


            return result;
        }

        public static Cookie CreateLong(User user)
        {
            var rnd = new Random();
            var value = MD5.Create(rnd.Next().ToString()).ToString();

            var result = new Cookie(value, DateTime.Now, DateTime.Now.AddMonths(12), user);

            return result;
        }
    }
}