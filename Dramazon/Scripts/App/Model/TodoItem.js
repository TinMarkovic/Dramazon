"use strict";
var TodoItem = (function () {
    function TodoItem(message, done, ID) {
        if (done === void 0) { done = false; }
        if (ID === void 0) { ID = -1; }
        this.value = message;
        this.done = done;
        this.ID = ID;
    }
    TodoItem.prototype.getStatusText = function () {
        return this.done ? "done" : "not-done";
    };
    return TodoItem;
}());
exports.TodoItem = TodoItem;
//# sourceMappingURL=TodoItem.js.map