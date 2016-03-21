using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace Dramazon.DAL
{
    public class DramazonInitializer : DropCreateDatabaseAlways<DramazonContext>
    {
        protected override void Seed(DramazonContext context)
        {
            //context.Todos.Add(new Models.TodoItem() { Value = "Learn Angular 2", Done = false});
            //context.Todos.Add(new Models.TodoItem() { Value = "Learn React", Done = true });

            context.Users.Add(new Models.User() { Email = "stipe@stipe.com",  Alias = "stipica",  Password="tripica"});

            context.SaveChanges();
        }
    }

}