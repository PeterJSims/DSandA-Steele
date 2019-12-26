class Node {
	constructor(value) {
		this.val = value;
		this.next = null;
	}
}

class SinglyLinkedList {
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
			this.tail = newNode;
		}
		this.length++;
		return this;
	}
	pop() {
		if (!this.head) return undefined;
		let current = this.head;
		let newTail = current;
		while (current.next) {
			newTail = current;
			current = current.next;
		}
		this.tail = newTail;
		this.tail.next = null;
		this.length--;
		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}
		return current;
	}
	shift() {
		if (!this.head) return undefined;
		let current = this.head;
		this.head = current.next;
		this.length--;
		if (this.length === 0) {
			this.tail = null;
		}
		return current;
	}
	unshift(value) {
		let newNode = new Node(value);
		if (!this.head) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length++;
		return this;
	}
	get(index) {
		if (index < 0 || index > this.length) return null;
		let counter = 0;
		let current = this.head;
		while (counter !== index) {
			current = current.next;
			counter++;
		}
		return current;
	}
	set(value, index) {
		let foundNode = this.get(index);
		if (foundNode) {
			foundNode.value = value;
			return true;
		}
		return false;
	}
	insert(value, index) {
		if (index < 0 || index > this.length) return false;
		if (index === this.length) return !!this.push(value);
		if (index === 0) return !!this.unshift(value);

		let newNode = new Node(value);
		let prev = this.get(index - 1);
		let temp = prev.next;
		prev.next = newNode;
		newNode.next = temp;
		this.length++;
		return true;
	}
	remove(index) {
		if (index < 0 || index > this.length) return null;
		if (index === this.length - 1) return this.pop();
		if (index === 0) return this.shift();

		let prevNode = this.get(index - 1);
		let removedNode = prevNode.next;
		prevNode.next = removedNode.next;

		this.length--;
		return removedNode;
	}
	reverse() {
		let node = this.head;
		this.head = this.tail;
		this.tail = node;
		let next;
		let prev = null;
		for (let i = 0; i < this.length; i++) {
			next = node.next;
			node.next = prev;
			prev = node;
			node = next;
		}
		return this;
	}
	printList() {
		let arr = [];
		let current = this.head;
		while (current) {
			arr.push(current.val);
			current = current.next;
		}
		console.log(arr);
	}
}

let list = new SinglyLinkedList();
list.push('one');
list.push('two');
list.push('three');

console.log(list);
list.remove(1);

console.log(list);
