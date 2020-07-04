class Queue {
    constructor() {
        this.queue = [];
    }

    push(item) {
        this.queue[this.queue.length] = item;
        return this.queue.length;
    }

    shift() {
        const item = this.queue[0];
        const result = this.queue.map((item, index) => this.queue[index + 1]);
        result.length -= 1;
        return item;
    }

    peek() {
        return this.queue[0];
    }
}