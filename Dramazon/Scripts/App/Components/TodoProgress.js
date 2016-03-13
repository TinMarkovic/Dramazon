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
var common_1 = require("angular2/common");
var TodoProgress = (function () {
    function TodoProgress() {
    }
    TodoProgress.prototype.getSolvedTodosCount = function () {
        return this.todos.filter(function (item) { return item.done; }).length;
    };
    TodoProgress.prototype.getSolvedTodosPercentage = function () {
        return this.todos.length != 0 ? this.getSolvedTodosCount() / this.todos.length
            : 0;
    };
    TodoProgress.prototype.getRemainingTodosCount = function () {
        return this.todos.filter(function (item) { return !item.done; }).length;
    };
    TodoProgress.prototype.isComplete = function () {
        return this.todos.length != 0
            && this.getSolvedTodosCount() == this.todos.length;
    };
    TodoProgress = __decorate([
        core_1.Component({
            selector: "todo-progress",
            inputs: ['todos'],
            directives: [common_1.NgClass, common_1.NgStyle, common_1.NgIf],
            template: "<div>\n        <div class=\"progress\">\n            <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{width: getSolvedTodosPercentage() | percent}\" [ngClass]=\"{complete: isComplete()}\">\n                {{getSolvedTodosPercentage() | percent:'1.0-2'}}\n            </div>\n        </div>\n\n        <div class=\"status-container\">\n            <label>Status:</label>\n            \n            <span *ngIf=\"getSolvedTodosCount() == 0\">We haven't even started!</span>\n            <span *ngIf=\"getSolvedTodosCount() == todos.length && todos.length != 0\">Done!</span>\n            <span *ngIf=\"getSolvedTodosCount() > 0 && getSolvedTodosCount() < todos.length\">In progress</span>\n            <span>({{getRemainingTodosCount()}} remaining)</span>\n        </div>\n    </div>"
        }), 
        __metadata('design:paramtypes', [])
    ], TodoProgress);
    return TodoProgress;
}());
exports.TodoProgress = TodoProgress;
//# sourceMappingURL=TodoProgress.js.map