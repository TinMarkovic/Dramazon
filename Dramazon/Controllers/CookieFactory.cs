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
        static byte[] GetBytes(string str)
        {
            byte[] bytes = new byte[str.Length * sizeof(char)];
            System.Buffer.BlockCopy(str.ToCharArray(), 0, bytes, 0, bytes.Length);
            return bytes;
        }

        public static Cookie Create(User user)
        {
            var rnd = new Random();
            MD5 md5 = MD5.Create();

            var value = md5.ComputeHash(GetBytes(rnd.NextBytes()));

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