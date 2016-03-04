using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using Dramazon.Models;

namespace Dramazon.DAL
{
    public class TodoContext : DbContext
    {
        public DbSet<TodoItem> Todos { get; set; }
    }
}