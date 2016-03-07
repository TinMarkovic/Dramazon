using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Dramazon.Models
{
    public class Basket
    {
        [Key]
        public int ID { get; set; }

        public virtual ICollection<Item> Items { get; set; }

        [Required]
        public virtual User Customer { get; set; }

        public bool IsPurchased { get; set; }
    }
}