class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.first = null;
        this.size = 0;
    }

    addFirst(data) {
        const node = new Node(data);

        if (this.first == null) return (this.first = node);

        node.next = this.first;

        this.first = node;
        this.size++;
    }

    toList() {
        const list = [];

        let current = this.first;

        while (current != null) {
            list.push(current.data);
            current = current.next;
        }
        return list;
    }
}

const numbers = new LinkedList();

numbers.addFirst(2);
numbers.addFirst(4);
numbers.addFirst(2);
numbers.addFirst(8);
numbers.addFirst(5);

console.log({ numbers: numbers.toList() });
