import { EventEmitter } from "angular2/core";
import { TodoItem as TodoItemModel } from "./../Model/TodoItem";
export declare class TodoItem {
    todo: TodoItemModel;
    removed: EventEmitter<TodoItem>;
    valuechanged: EventEmitter<{
        todoItem: TodoItem;
        value: string;
    }>;
    donechanged: EventEmitter<{
        todoItem: TodoItem;
        done: boolean;
    }>;
    private isEdit;
    constructor();
    private onRemoveTodo();
    private onCheckboxChange(checkbox);
    private enterEditMode();
    private leaveEditMode(inputElement, save);
}
