class Queue {
    constructor() {
        this.queue = [];
    }
    push(item) {
        this.queue.push(item);
    }
    shift() {
        return this.queue.shift();
    }
    peek() {
        if (this.queue.length) return this.queue[0];
        throw new Error("queue is empty");
    }
}

