using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Dramazon.Models
{
    public class TodoItem
    {
        public int ID { get; set; }
        public string Value { get; set; }
        public bool Done { get; set; }
    }
}