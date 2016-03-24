using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Dramazon.Models;
using System.Security.Cryptography;
using Dramazon.DAL;
using System.Text;

namespace Dramazon.Controllers
{
    public static class CookieFactory
    {
        public static Cookie Create(User user)
        {
            var value = GetUniqueKey();

            var result = new Cookie(value, DateTime.Now, DateTime.Now.AddHours(4), user);
            
            return result;
        }

        public static Cookie CreateLong(User user)
        {
            var value = GetUniqueKey();

            var result = new Cookie(value, DateTime.Now, DateTime.Now.AddMonths(12), user);

            return result;
        }

        public static Cookie GetFromDB(DramazonContext db, string token)
        {
            Cookie cookie;

            try { 
                cookie = db.Cookies.First(e => e.Value == token && DateTime.Compare(e.Ends, DateTime.Now) > 0 );
            } catch (Exception e)
            {
                return null;
            }
            return cookie;
        }

        public static string GetUniqueKey(int maxSize = 24)
        {
            char[] chars = new char[62];
            chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".ToCharArray();
            byte[] data = new byte[1];
            using (RNGCryptoServiceProvider crypto = new RNGCryptoServiceProvider())
            {
                crypto.GetNonZeroBytes(data);
                data = new byte[maxSize];
                crypto.GetNonZeroBytes(data);
            }
            StringBuilder result = new StringBuilder(maxSize);
            foreach (byte b in data)
            {
                result.Append(chars[b % (chars.Length)]);
            }
            return result.ToString();
        }
    }
}