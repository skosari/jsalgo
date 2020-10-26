// We are building out a linked list object that contains individual nodes tha contain the value of the node as well as which node is before and after
// a_node = {
//   value: null,
//   next: null,
//   previous: null
// }


//We start out with our empty linked list 
function LinkedList() {
  this.head = null;
  this.tail = null;
}


//This is our constructor function for our linked list. We use it to build out our LinkedList() nodes that contain the information needed to make it a linked list
function Node(value, next, previous) {
  this.value = value;
  this.next = next;
  this.previous = previous;
}


//We add a new node to the head of our linked list so we pass a value in our addToHead Method that as you can see is passed directly into our new Node function as the first value. The next value will be this.head and there is no previous value so it will be null
LinkedList.prototype.addToHead = function(value) {
  //We create a new Node using our Node constructor function
  let newNode = new Node(value, this.head, null);
  
  //If our LL has nodes already we add it before the first node
  if (this.head) this.head.previous = newNode;
  //If our LL has no nodes we set our tail pointer to our new node
  else this.tail = newNode;
  //In both situations we need to assign our new headNode as our newNode for our addToHead method
  this.head = newNode;
  
}

LinkedList.prototype.addToTail = function(value) {
  let newNode = new Node(value, null, this.tail);
  
  if (this.tail) this.tail.next = newNode;
  else this.head = newNode;//If no node exists we point our head node to our newNode
  this.tail = newNode;//and in either case we add our tail pointer to our new node
} 

var ll = new LinkedList();

ll.addToHead(100);
//RETURNS
//  console.log(ll)
//  LinkedList {
//   head: Node { value: 100, next: null, previous: null },
//   tail: Node { value: 100, next: null, previous: null }
// }

ll.addToHead(200);
//RETURNS
//console.log(ll)
// LinkedList {
//   head: Node {
//     value: 200,
//     next: Node { value: 100, next: null, previous: [Circular] },
//     previous: null
//   },
//   tail: Node {
//     value: 100,
//     next: null,
//     previous: Node { value: 200, next: [Circular], previous: null }
//   }
// }
//Notice the Circular value as our head references the tail and our tail references the head

ll.addToHead(300)
//RETURNS
//  console.log(ll)
//  LinkedList {
//   head: Node {
//     value: 300,
//     next: Node { value: 200, next: [Node], previous: [Circular] },
//     previous: null
//   },
//   tail: Node {
//     value: 100,
//     next: null,
//     previous: Node { value: 200, next: [Circular], previous: [Node] }
//   }
// }
ll.addToHead(400)
ll.addToTail(10)
//RETURNS
//console.log(ll)
// LinkedList {
//   head: Node {
//     value: 400,
//     next: Node { value: 300, next: [Node], previous: [Circular] },
//     previous: null
//   },
//   tail: Node {
//     value: 10,
//     next: null,
//     previous: Node { value: 100, next: [Circular], previous: [Node] }
//   }
// }

///////// console.log(ll.tail.previous.previous.previous)  //////
// Node {
//   value: 300,
//   next: Node {
//     value: 200,
//     next: Node { value: 100, next: [Node], previous: [Circular] },
//     previous: [Circular]
//   },
//   previous: Node { value: 400, next: [Circular], previous: null }
// }

var myll = new LinkedList();
myll.addToTail(1000)
//console.log(myll)
//RETURNS
// LinkedList {
//   head: Node { value: 1000, next: null, previous: null },
//   tail: Node { value: 1000, next: null, previous: null }
// }

LinkedList.prototype.removeHead = function() {
  if (!this.head) return null;//If this.head is emply we return null
  let val = this.head.value;
  this.head = this.head.next;//the new head node could be the next value or it could be null if we only had one node
  if (this.head) this.head.previous = null;
  else this.tail = null;
  return val;  
}

myll.removeHead();
//console.log(myll)
//LinkedList { head: null, tail: null }

LinkedList.prototype.removeTail = function() {
  if (!this.tail) return null;
  let val = this.tail.value;
  this.tail = this.tail.previous;
  if (this.tail) this.tail.next = null;
  else this.head = null;
  return val;
}

ll.removeTail();
console.log(ll);
//RETURNS
// tail: Node {
//   value: 100,
//   next: null,
//   previous: Node { value: 200, next: [Circular], previous: [Node] }
// }
//INSTEAD OF
// tail: Node {
//   value: 10,
//   next: null,
//   previous: Node { value: 100, next: [Circular], previous: [Node] }
// }
