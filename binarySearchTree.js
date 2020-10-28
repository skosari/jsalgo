//A binary search tree is a node that contains a number where the next number being larger or smaller occupies the left or right branch from the first node. then next node being greater then or less than will occupy the other branch or if that branch is already occupied then it will move to the sub branch and go left or right there depending on its value. Each node on the tree is its own BST (Binary Search Tree) with up to two child nodes, and each of those nodes are their own BST. Like a linked list these individual BST have pointers to a lesser and greater value.
//            10
//      7           12
//   4    9     11     500
//            10     134
//Depth First Traversal - we move down the tree first before we move accross
//Breadth First Traversal we move accross the tree before we move down

//Constructor
function bsNode(value) {
  this.value = value;
  this.low = null;
  this.high = null;
}

//insert a new node in our BST and assign it a value and place it in the correct location low or high. If the node already exists we recursively can go to the next node
bsNode.prototype.insert = function(value) {
  if (value <= this.value) {
    if (!this.low) this.low = new bsNode(value);
    else this.low.insert(value);
  } else if (value > this.value) {
    if (!this.high) this.high = new bsNode(value);
    else this.high.insert(value);
  }
}

let bst = new bsNode(50);
bst.insert(40);
bst.insert(60);
bst.insert(35);
bst.insert(500);
bst.insert(59);
bst.insert(3);
bst.insert(55);
bst.insert(60);
bst.insert(32);
bst.insert(32);
bst.insert(900);
//console.log(bst.high.high)


bsNode.prototype.contains = function(value) {
  if(value === this.value) return true;
  else if (value < this.value) {
    if(!this.low) return false;
    else return this.low.contains(value);
  }
  else if (value > this.value) {
    if (!this.high) return false;
    else return this.high.contains(value);
  } 
  return false;
}

//console.log(bst.contains(33))


/////////DEPTH FIRST TRAVERSAL///////////
function log(value) {
  console.log(value);
}

//Depth First Traversal (In Order - from least to greatest) - follow the first branch all the way to the bottom before checking the second branch 
//in-order traversal only
bsNode.prototype.dFT = function(iteratorFunction) {
  if(this.low) this.low.dFT(iteratorFunction);
  iteratorFunction(this.value);
  if(this.high) this.high.dFT(iteratorFunction);
}
//bst.dFT(log);

//Depth First traversal (Run in Different Orders - 
//in_order - In_order goes from low to high
//post_order - process the left children then right children - usefull to safely delete nodes from a search tree 
//pre_order  - pre_order goes from lowest/left branch to highest/right branch, this is usefull if you want to make a copy of a tree
bsNode.prototype.dFTSelect = function(iteratorFunction, order) {
  if (order === 'pre-order') iteratorFunction(this.value); 
  if(this.low) this.low.dFTSelect(iteratorFunction, order);
  if (order === 'in-order') iteratorFunction(this.value);
  if(this.high) this.high.dFTSelect(iteratorFunction, order);
  if (order === 'post-order') iteratorFunction(this.value);
} //Notice the order the recursion takes place
//bst.dFTSelect(log, 'pre-order')
//bst.dFTSelect(log, 'in-order')
//bst.dFTSelect(log, 'post-order')


//////Breadth First Traveral/////////////
//Moving down our tree level by level
//Usefull for
//1. Define a hierarchy or level of command like the heirarchy of a company
//2. 
bsNode.prototype.bFT = function(iteratorFunction) {
  var queue = [this];//queue is first in first out - putting this inside the array to start with is like defining the root node in there if you log it you will see your node in an array format which we can shift and pull
  console.log(this);//Will show the first node + pointers to the next nodes
  while (queue.length) { //while queue is not empty - shows a 1 if there is a node there
    var treeNode = queue.shift();//take the first node out of our queue and store it in the treeNode variable
    iteratorFunction(treeNode);//In this example we log out the treeNodes value
    if (treeNode.low) queue.push(treeNode.low);
    if (treeNode.high) queue.push(treeNode.high)
    console.log(queue)//Notice how our modified array contains all the nodes from that level
  }
}
function logbFT(node) {
  console.log(node.value)
}
//bst.bFT(logbFT);

//This is a great use for recursion - when moving from a node left to right or low to high its super efficient to just recursively call the left or right function to travers our nodes till we get the value we need
//Big O Notatin: O(log n)
bsNode.prototype.getMinVal = function() {
  if (this.low) return this.low.getMinVal();
  else return this.value;
}

bsNode.prototype.getMaxVal = function() {
  if (this.high) return this.high.getMaxVal();
  else return this.value;
}

console.log(bst.getMinVal());
console.log(bst.getMaxVal());