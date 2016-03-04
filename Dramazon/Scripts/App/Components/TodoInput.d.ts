import { EventEmitter } from "angular2/core";
export declare class TodoInput {
    added: EventEmitter<String>;
    constructor();
    private onAddTodo(todoInput);
}
