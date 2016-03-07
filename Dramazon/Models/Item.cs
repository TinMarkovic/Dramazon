using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Dramazon.Models
{
    public class Item
    {
        [Key]
        public int ID { get; set; }

        [Required]
        [MaxLength(64)]
        [MinLength(4)]
        public string Name { get; set; }

        [MaxLength(512)]
        [MinLength(4)]
        public string Description { get; set; }

        public byte[] Image { get; set; }

        [Required]
        public float Price { get; set; }

        public virtual ICollection<Rating> Ratings { get; set; }

        public virtual ICollection<Tag> Tags { get; set; }

        [Required]
        public virtual User Creator { get; set; }
    }
}