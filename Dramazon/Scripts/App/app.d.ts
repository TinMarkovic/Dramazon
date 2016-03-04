import { TodoItem } from "./Model/TodoItem";
import { TodoService } from "./Services/TodoService";
export declare class Dramazon {
    private todoService;
    constructor(todoService: TodoService);
    onCheckboxChange(checkbox: HTMLInputElement, todoItem: TodoItem): void;
    private onTodoAdded(value);
    private onCompleteAll();
    private onUncheckAll();
    private onRemoveDone();
    private removeTodoItem(todoItem);
    private handleTodoItemValueChanged(event);
    private handleTodoItemDoneChanged(event);
}
