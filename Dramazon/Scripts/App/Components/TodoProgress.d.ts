import { TodoItem } from "./../Model/TodoItem";
export declare class TodoProgress {
    todos: TodoItem[];
    private getSolvedTodosCount();
    private getSolvedTodosPercentage();
    private getRemainingTodosCount();
    private isComplete();
}
