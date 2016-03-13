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
var core_1 = require("angular2/core");
var common_1 = require('angular2/common');
var TodoItem_1 = require("./TodoItem");
var ContainsPipe_1 = require("./../Pipes/ContainsPipe");
var DisplayOptions_1 = require("./../Enums/DisplayOptions");
var TodoList = (function () {
    function TodoList() {
        this.searchKey = "";
        this.searchKey = "";
        this.displayOptions = DisplayOptions_1.DisplayOptions.All;
        this.remove = new core_1.EventEmitter();
        this.todoitemvaluechanged = new core_1.EventEmitter();
        this.todoitemdonechanged = new core_1.EventEmitter();
    }
    TodoList.prototype.onTodoRemoved = function (todo) {
        this.remove.next(todo);
    };
    TodoList.prototype.onTodoItemDoneChanged = function (event) {
        this.todoitemdonechanged.next(event);
    };
    TodoList.prototype.onTodoItemValueChanged = function (event) {
        this.todoitemvaluechanged.next(event);
    };
    TodoList.prototype.updateSearchKey = function (input) {
        this.searchKey = input.value;
        console.log(this.searchKey);
    };
    TodoList.prototype.onSelectChange = function (select) {
        switch (select.value) {
            case "all":
                this.displayOptions = DisplayOptions_1.DisplayOptions.All;
                break;
            case "done":
                this.displayOptions = DisplayOptions_1.DisplayOptions.Done;
                break;
            case "notDone":
                this.displayOptions = DisplayOptions_1.DisplayOptions.NotDone;
                break;
        }
    };
    TodoList = __decorate([
        core_1.Component({
            selector: "todo-list",
            inputs: ["todos"],
            outputs: ["remove", "todoitemvaluechanged", "todoitemdonechanged"],
            directives: [common_1.NgFor, TodoItem_1.TodoItem],
            pipes: [ContainsPipe_1.ContainsPipe],
            template: "<div>\n        <ul class=\"list-group\">\n            <li class=\"list-group-item\">\n                <input type=\"text\" class=\"form-control todo-search\" placeholder=\"Search\" [value]=\"searchKey\" #search (keyup)=\"updateSearchKey(search)\">\n                <span class=\"input-group-btn done-select\">\n                    <select class=\"form-control\" #select (change)=\"onSelectChange(select)\">\n                        <option selected value=\"all\">All</option>\n                        <option value=\"done\">Done</option>\n                        <option value=\"notDone\">Not done</option>\n                    </select>\n                </span>\n            </li>\n            <li class=\"list-group-item\" *ngFor=\"#todo of todos | contains:displayOptions:searchKey\">\n                <todo-item [todo]=\"todo\" (removed)=\"onTodoRemoved($event)\" (donechanged)=\"onTodoItemDoneChanged($event)\" (valuechanged)=\"onTodoItemValueChanged($event)\"></todo-item>\n            </li>\n        </ul>\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], TodoList);
    return TodoList;
}());
exports.TodoList = TodoList;
//# sourceMappingURL=TodoList.js.map