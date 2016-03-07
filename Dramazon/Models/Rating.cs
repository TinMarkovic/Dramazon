using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Dramazon.Models
{
    public class Rating
    {
        [Key]
        public int ID { get; set; }

        //[Required]
        public virtual User User { get; set; }

        [Required]
        public virtual Item Item { get; set; }

        [Required]
        public int Value { get; set; }

        public DateTime Date { get; set; }
    }
}