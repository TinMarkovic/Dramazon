using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace Dramazon.DAL
{
    public class TodoInitializer : DropCreateDatabaseAlways<TodoContext>
    {
        protected override void Seed(TodoContext context)
        {
            context.Todos.Add(new Models.TodoItem() { Value = "Learn Angular 2", Done = false});
            context.Todos.Add(new Models.TodoItem() { Value = "Learn React", Done = true });

            context.SaveChanges();
        }
    }

}