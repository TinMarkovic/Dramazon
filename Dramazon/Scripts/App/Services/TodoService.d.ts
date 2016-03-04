import { TodoItem } from "./../Model/TodoItem";
import { Http } from 'angular2/http';
export declare class TodoService {
    todos: TodoItem[];
    private http;
    constructor(http: Http);
    private fetchTodos();
    addTodo(value: string): void;
    removeTodo(todoItem: TodoItem): void;
    updateTodoValue(todoItem: TodoItem, value: string): void;
    updateTodoDone(todoItem: TodoItem, done: boolean): void;
    completeAll(): void;
    resetAll(): void;
    private toggleItems(done);
    removeDone(): void;
    private syncTodoItem(todoItem);
    private syncToggleChecked(done);
    private getJsonRequestOptions();
}
