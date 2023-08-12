export class Todo {
    static counter: number = 1; 
    sno?: number=Todo.counter;
    title: string = "";
    desc: string = "";
    active: boolean = false;

    constructor() {
        ++Todo.counter; // Increment the counter
        this.sno = Todo.counter; // Assign the current counter value to sno
    }
}