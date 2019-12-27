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
	unshift(value) {
		let newNode = new Node(value);
		if (this.length === 0) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.head.prev = newNode;
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length++;
		return this;
	}
	get(index) {
		if (index < 0 || index >= this.length) return null;
		if (index <= this.length / 2) {
			let counter = 0;
			let current = this.head;
			if (counter !== index) {
				current = current.next;
				counter++;
			}
			return current;
		} else {
			let counter = this.length - 1;
			let current = this.tail;
			if (counter !== index) {
				current = current.prev;
				counter--;
			}
			return current;
		}
	}
	set(index, value) {
		let foundNode = this.get(index);
		if (foundNode) {
			foundNode.value = value;
			return true;
		}
		return false;
	}

	insert(index, value) {
		if (index < 0 || index > this.length) return false;
		if (index === this.length) return !!this.push(value);
		if (index === 0) return !!this.unshift(value);

		let newNode = new Node(value);
		let beforeNode = this.get(index - 1);
		let afterNode = beforeNode.next;
		beforeNode.next = newNode;
		newNode.prev = beforeNode;
		newNode.next = afterNode;
		afterNode.prev = newNode;

		this.length++;
		return true;
	}
	remove(index) {
		if (index < 0 || index >= this.length) return undefined;
		if (index === 0) return this.shift();
		if (index === this.length - 1) return this.pop();

		let removedNode = this.get(index);
		removedNode.prev.next = removedNode.next;
		removedNode.next.prev = removedNode.prev;
		removedNode.next = null;
		removedNode.prev = null;

		this.length--;
		return removedNode;
	}
}

let list = new DoublyLinkedList();

list.push('one');
list.push('two');

list.shift();
console.log(list);
