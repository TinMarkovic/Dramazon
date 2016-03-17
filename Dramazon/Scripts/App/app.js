var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("angular2/core");
var browser_1 = require('angular2/platform/browser');
var TodoInput_1 = require("./Components/TodoInput");
var TodoProgress_1 = require("./Components/TodoProgress");
var TodoList_1 = require("./Components/TodoList");
var TodoService_1 = require("./Services/TodoService");
var http_1 = require('angular2/http');
var router_1 = require('angular2/router');
var Dramazon = (function () {
    //Dependency Injection!
    function Dramazon(todoService) {
        this.todoService = todoService;
    }
    Dramazon.prototype.onCheckboxChange = function (checkbox, todoItem) {
        todoItem.done = checkbox.checked;
    };
    Dramazon.prototype.onTodoAdded = function (value) {
        this.todoService.addTodo(value);
    };
    Dramazon.prototype.onCompleteAll = function () {
        this.todoService.completeAll();
    };
    Dramazon.prototype.onUncheckAll = function () {
        this.todoService.resetAll();
    };
    Dramazon.prototype.onRemoveDone = function () {
        this.todoService.removeDone();
    };
    Dramazon.prototype.removeTodoItem = function (todoItem) {
        this.todoService.removeTodo(todoItem);
    };
    Dramazon.prototype.handleTodoItemValueChanged = function (event) {
        this.todoService.updateTodoValue(event.todoItem, event.value);
    };
    Dramazon.prototype.handleTodoItemDoneChanged = function (event) {
        this.todoService.updateTodoDone(event.todoItem, event.done);
    };
    Dramazon = __decorate([
        core_1.Component({
            selector: "todo-app",
            providers: [TodoService_1.TodoService],
            directives: [TodoInput_1.TodoInput, TodoProgress_1.TodoProgress, TodoList_1.TodoList],
            template: " \n                <todo-progress [todos]=\"todoService.todos\"></todo-progress>    \n                <todo-input (added)=\"onTodoAdded($event)\"></todo-input>\n\n                <todo-list [todos]=\"todoService.todos\" (remove)=\"removeTodoItem($event)\" (todoitemvaluechanged)=\"handleTodoItemValueChanged($event)\" (todoitemdonechanged)=\"handleTodoItemDoneChanged($event)\"></todo-list>\n                \n                <div class=\"well todo-toolbar\">    \n                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"onCompleteAll()\"><span class=\"glyphicon glyphicon-ok-circle\"></span> Check all</button> \n                    <button type=\"button\" class=\"btn btn-danger\" (click)=\"onUncheckAll()\"><span class=\"glyphicon glyphicon-remove-circle\"></span>  Uncheck all</button>\n                    <button type=\"button\" class=\"btn btn-success pull-right\" (click)=\"onRemoveDone()\"><span class=\"glyphicon glyphicon-ban-circle\"></span> Remove done</button>\n                </div>\n                "
        }), 
        __metadata('design:paramtypes', [TodoService_1.TodoService])
    ], Dramazon);
    return Dramazon;
})();
exports.Dramazon = Dramazon;
browser_1.bootstrap(Dramazon, [router_1.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS, TodoService_1.TodoService]);
//# sourceMappingURL=app.js.map