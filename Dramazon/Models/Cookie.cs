using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Dramazon.Models
{
    public class Cookie
    {
        public Cookie()
        {

        }
        public Cookie(string value, DateTime created, DateTime ends, User user)
        {
            Value = value;
            Created = created;
            Ends = ends;
            User = user;
        }

        [Key]
        public int ID { get; set; }

        [Required]
        public string Value { get; set; }

        [Required]
        public DateTime Created { get; set; }

        [Required]
        public DateTime Ends { get; set; }

        [Required]
        public User User { get; set; }

    }
}