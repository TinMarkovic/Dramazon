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
var TodoItem = (function () {
    function TodoItem() {
        this.removed = new core_1.EventEmitter();
        this.valuechanged = new core_1.EventEmitter();
        this.donechanged = new core_1.EventEmitter();
        this.isEdit = false;
    }
    TodoItem.prototype.onRemoveTodo = function () {
        this.removed.next(this.todo);
    };
    TodoItem.prototype.onCheckboxChange = function (checkbox) {
        this.donechanged.next({
            todoItem: this.todo,
            done: checkbox.checked
        });
    };
    TodoItem.prototype.enterEditMode = function () {
        this.isEdit = true;
    };
    TodoItem.prototype.leaveEditMode = function (inputElement, save) {
        this.isEdit = false;
        if (save) {
            this.valuechanged.next({
                todoItem: this.todo,
                value: inputElement.value.trim()
            });
        }
    };
    TodoItem = __decorate([
        core_1.Component({
            selector: "todo-item",
            inputs: ["todo"],
            outputs: ["removed", "valuechanged", "donechanged"],
            directives: [common_1.NgClass, common_1.NgIf],
            template: "\n    <div>\n        <input class=\"todo-checkbox\" #todoCheckbox type=\"checkbox\" [checked]=\"todo.done\" (change)=\"onCheckboxChange(todoCheckbox)\"/>\n        <input #todoInput *ngIf=\"isEdit\" type=\"text\" [value]=\"todo.value\" (keyup.enter)=\"leaveEditMode(todoInput, true)\" (keyup.esc)=\"leaveEditMode(todoInput, false)\" (blur)=\"leaveEditMode(todoInput, false)\" autofocus/>\n        <span *ngIf=\"!isEdit\" [ngClass]=\"todo.getStatusText()\" (dblclick)=\"enterEditMode()\">{{todo.value}}</span>\n        <span class=\"glyphicon glyphicon-remove remove-todo\" (click)=\"onRemoveTodo()\"></span>\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], TodoItem);
    return TodoItem;
}());
exports.TodoItem = TodoItem;
//# sourceMappingURL=TodoItem.js.map