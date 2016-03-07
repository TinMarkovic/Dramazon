using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Dramazon.Models
{
    public class User
    {
        [Key]
        public int ID { get; set; }
        
        [MaxLength(32)]
        [MinLength(4)]
        public string FirstName { get; set; }
        
        [MaxLength(32)]
        [MinLength(4)]
        public string LastName { get; set; }

        [MaxLength(32)]
        [MinLength(4)]
        public string Address { get; set; }

        [Required]
        [MaxLength(64)]
        [MinLength(4)]
        public string Email { get; set; }

        [Required]
        [MaxLength(64)]
        [MinLength(4)]
        public string Alias { get; set; }

        [Required]
        [MinLength(6)]
        public string Password { get; set; }

        public virtual ICollection<Rating> Ratings { get; set; }

        public virtual ICollection<Item> Items { get; set; }
    }
}