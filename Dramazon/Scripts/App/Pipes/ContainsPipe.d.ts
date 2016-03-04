import { TodoItem } from "./../Model/TodoItem";
export declare class ContainsPipe {
    transform(items: TodoItem[], [displayOption, keyword]: [any, any]): TodoItem[];
}
