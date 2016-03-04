using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace Dramazon
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services

            // Web API routes
            config.MapHttpAttributeRoutes();


            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                constraints: new { id = @"\d*" },
                defaults: new { id = RouteParameter.Optional }
            );

            config.Routes.MapHttpRoute
            (
                "TodoItemsCustomAPI", 
                "api/TodoItems/ToggleChecked/{value}", 
                new { controller = "TodoItems", action = "ToggleChecked" }
            );

            config.Routes.MapHttpRoute
            (
                "TodoItemsRemoveDoneAPI",
                "api/TodoItems/RemoveDone/",
                new { controller = "TodoItems", action = "RemoveDone" }
            );
        }
    }
}
