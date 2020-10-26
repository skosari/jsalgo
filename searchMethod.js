function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}

LinkedList.prototype.addToHead = function(value) {
  let newNode = new Node(value, this.head, null)
  if (this.head) this.head.prev = newNode;
  else this.tail = newNode;
  this.head = newNode;
}

LinkedList.prototype.addToTail = function(value) {
  let newNode = new Node(value, null, this.tail)
  if (this.tail) this.tail.next = newNode;
  else this.head = newNode;
  this.tail = newNode;
}

LinkedList.prototype.deleteHead = function() {
  if (!this.head) return null; //If no head
  let curVal = this.head.value; //save current head
  this.head = this.head.next; //current head = next head
  if (this.head) this.head.prev = null; //if there was a head and another node set the first head to null/delete it
  else this.tail = null; //if there wasnt multiple nodes also set the tail pointer to null
  return curVal;
}

LinkedList.prototype.deleteTail = function() {
  if (!this.tail) return null;
  let curVal = this.tail.value;
  this.tail = this.tail.prev;
  if (this.tail) this.tail.next = null;
  else this.head = null;
  return curVal;
}

// let test1 = new LinkedList();
// test1.addToHead(2)
// test1.addToHead(1)
// test1.addToTail(4)
// test1.addToTail(5)
// console.log(test1)

// let test2 = new LinkedList();
// test2.addToTail(1);
// console.log(test2);
// test2.deleteHead();
// console.log(test2);