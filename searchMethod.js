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
  if (!this.head) return null; 
  let curVal = this.head.value; 
  this.head = this.head.next; 
  if (this.head) this.head.prev = null; 
  else this.tail = null; 
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

//Reverse search from tail
LinkedList.prototype.search = function(searchValue) {
   let curValue = this.tail;
   while (curValue) {
    if (curValue.value === searchValue) return curValue.value;
    curValue = curValue.prev;
   }
   return null;
 }

