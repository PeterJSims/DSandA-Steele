class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
		this.prev = null;
	}
}

class DoublyLinkedList {
	constructor() {
		this.length = 0;
		this.head = null;
		this.tail = null;
	}
	push(value) {
		let newNode = new Node(value);
		if (!this.head) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			this.tail.next = newNode;
			newNode.prev = this.tail;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}
	pop() {
		if (!this.head) return undefined;

		let removed = this.tail;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.tail = removed.prev;
			this.tail.next = null;
			removed.prev = null;
		}
		this.length--;
		return removed;
	}
	shift() {
		if (this.length === 0) return undefined;
		let removed = this.head;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.head = removed.next;
			this.head.prev = null;
			removed.next = null;
		}
		this.length--;
		return removed;
	}
}

let list = new DoublyLinkedList();

list.push('one');
list.push('two');

list.shift();
console.log(list);
