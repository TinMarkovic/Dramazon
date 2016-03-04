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
var TodoInput = (function () {
    function TodoInput() {
        this.added = new core_1.EventEmitter();
    }
    TodoInput.prototype.onAddTodo = function (todoInput) {
        var value = todoInput.value.trim();
        if (value == "") {
            return;
        }
        this.added.next(value);
        todoInput.value = "";
    };
    TodoInput = __decorate([
        core_1.Component({
            selector: "todo-input",
            outputs: ["added"],
            template: "<div class=\"row\">\n        <div class=\"col-xs-12\">\n            <div class=\"todo-input-group input-group input-group-lg\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"What needs to be done?\" #todoInput (keyup.enter)=\"onAddTodo(todoInput)\">\n                <span class=\"input-group-btn\">\n                    <button class=\"btn btn-default glyphicon glyphicon-pencil\" type=\"button\" (click)=\"onAddTodo(todoInput)\"></button>\n                </span>\n            </div>\n        </div>\n    </div>"
        }), 
        __metadata('design:paramtypes', [])
    ], TodoInput);
    return TodoInput;
})();
exports.TodoInput = TodoInput;
//# sourceMappingURL=TodoInput.js.map