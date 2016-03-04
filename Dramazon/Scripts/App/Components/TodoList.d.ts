import { EventEmitter } from "angular2/core";
import { TodoItem as TodoItemModel } from "./../Model/TodoItem";
export declare class TodoList {
    todos: TodoItemModel[];
    private searchKey;
    private displayOptions;
    remove: EventEmitter<TodoItemModel>;
    todoitemvaluechanged: EventEmitter<{
        todoItem: TodoItemModel;
        value: string;
    }>;
    todoitemdonechanged: EventEmitter<{
        todoItem: TodoItemModel;
        done: boolean;
    }>;
    constructor();
    private onTodoRemoved(todo);
    private onTodoItemDoneChanged(event);
    private onTodoItemValueChanged(event);
    private updateSearchKey(input);
    private onSelectChange(select);
}
