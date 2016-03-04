using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using Dramazon.DAL;
using Dramazon.Models;

namespace Dramazon.Controllers
{
    public class TodoItemsController : ApiController
    {
        private TodoContext db = new TodoContext();

        // GET: api/TodoItems
        public IQueryable<TodoItem> GetTodos()
        {
            return db.Todos;
        }

        // GET: api/TodoItems/5
        [ResponseType(typeof(TodoItem))]
        public IHttpActionResult GetTodoItem(int id)
        {
            TodoItem todoItem = db.Todos.Find(id);
            if (todoItem == null)
            {
                return NotFound();
            }

            return Ok(todoItem);
        }

        // PUT: api/TodoItems/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutTodoItem(int id, TodoItem todoItem)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != todoItem.ID)
            {
                return BadRequest();
            }

            db.Entry(todoItem).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TodoItemExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // PUT: api/TodoItems/ToggleChecked/true
        [ResponseType(typeof(void))]
        [HttpPut]
        public IHttpActionResult ToggleChecked(bool value)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            foreach (var todo in db.Todos)
            {
                todo.Done = value;
                db.Entry(todo).State = EntityState.Modified;
            }

            try{ db.SaveChanges();}
            catch (DbUpdateConcurrencyException){}

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/TodoItems
        [ResponseType(typeof(TodoItem))]
        public IHttpActionResult PostTodoItem(TodoItem todoItem)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Todos.Add(todoItem);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = todoItem.ID }, todoItem);
        }

        // DELETE: api/TodoItems/5
        [ResponseType(typeof(void))]
        [HttpDelete]
        public IHttpActionResult RemoveDone()
        {
            foreach (var todo in db.Todos)
            {
                if (todo.Done) { db.Todos.Remove(todo); }
            }
            
            db.SaveChanges();

            return StatusCode(HttpStatusCode.NoContent);
        }

        // DELETE: api/TodoItems/5
        [ResponseType(typeof(TodoItem))]
        public IHttpActionResult DeleteTodoItem(int id)
        {
            TodoItem todoItem = db.Todos.Find(id);
            if (todoItem == null)
            {
                return NotFound();
            }

            db.Todos.Remove(todoItem);
            db.SaveChanges();

            return Ok(todoItem);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool TodoItemExists(int id)
        {
            return db.Todos.Count(e => e.ID == id) > 0;
        }
    }
}