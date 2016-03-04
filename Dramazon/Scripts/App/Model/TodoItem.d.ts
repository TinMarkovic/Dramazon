export declare class TodoItem {
    ID: number;
    value: string;
    done: boolean;
    constructor(message: string, done?: boolean, ID?: number);
    getStatusText(): string;
}
