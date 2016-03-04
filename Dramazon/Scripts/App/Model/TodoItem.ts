export class TodoItem {
    public ID: number;
    public value: string;
    public done: boolean;

    constructor(message: string, done: boolean = false, ID:number = -1){
        this.value = message;
        this.done = done;
        this.ID = ID;
    }

    public getStatusText() : string {
        return this.done ? "done" : "not-done";
    }
}
