"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var TodoItem_1 = require("./../Model/TodoItem");
var http_1 = require('angular2/http');
var core_1 = require('angular2/core');
var TodoService = (function () {
    function TodoService(http) {
        this.todos = [];
        this.http = http;
        this.fetchTodos();
    }
    TodoService.prototype.fetchTodos = function () {
        var _this = this;
        var request = this.http.request("/api/TodoItems");
        request.subscribe(function (response) {
            _this.todos = response.json().map(function (todo) { return new TodoItem_1.TodoItem(todo.Value, todo.Done, todo.ID); });
        }, function (error) { return alert("Error: " + JSON.stringify(error)); });
    };
    TodoService.prototype.addTodo = function (value) {
        var todoItem = new TodoItem_1.TodoItem(value);
        this.todos.push(todoItem);
        this.http.post("/api/TodoItems", JSON.stringify({ Value: value }), this.getJsonRequestOptions()).subscribe(function (response) {
            todoItem.ID = response.json().ID;
        }, function (error) { return alert("Error: " + JSON.stringify(error)); });
    };
    TodoService.prototype.removeTodo = function (todoItem) {
        var index = this.todos.indexOf(todoItem);
        if (index != -1) {
            this.todos.splice(index, 1);
        }
        this.http.delete("/api/TodoItems/" + todoItem.ID).subscribe(function (response) { }, function (error) { return alert("Error: " + JSON.stringify(error)); });
    };
    TodoService.prototype.updateTodoValue = function (todoItem, value) {
        todoItem.value = value;
        this.syncTodoItem(todoItem);
    };
    TodoService.prototype.updateTodoDone = function (todoItem, done) {
        todoItem.done = done;
        this.syncTodoItem(todoItem);
    };
    TodoService.prototype.completeAll = function () {
        this.toggleItems(true);
    };
    TodoService.prototype.resetAll = function () {
        this.toggleItems(false);
    };
    TodoService.prototype.toggleItems = function (done) {
        this.todos.forEach(function (todo) { return todo.done = done; });
        this.syncToggleChecked(done);
    };
    TodoService.prototype.removeDone = function () {
        this.todos = this.todos.filter(function (todo) { return !todo.done; });
        this.http.delete("/api/TodoItems/RemoveDone").subscribe(function (response) { }, function (error) { return alert("Error: " + JSON.stringify(error)); });
    };
    TodoService.prototype.syncTodoItem = function (todoItem) {
        this.http.put("/api/TodoItems/" + todoItem.ID, JSON.stringify({
            ID: todoItem.ID,
            Value: todoItem.value,
            Done: todoItem.done
        }), this.getJsonRequestOptions()).subscribe(function (response) { }, function (error) { return alert("Error: " + JSON.stringify(error)); });
    };
    TodoService.prototype.syncToggleChecked = function (done) {
        this.http.put("/api/TodoItems/ToggleChecked/" + done, "").subscribe(function (response) { }, function (error) { return alert("Error: " + JSON.stringify(error)); });
    };
    TodoService.prototype.getJsonRequestOptions = function () {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        var opts = new http_1.RequestOptions();
        opts.headers = headers;
        return opts;
    };
    TodoService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], TodoService);
    return TodoService;
}());
exports.TodoService = TodoService;
//# sourceMappingURL=TodoService.js.map