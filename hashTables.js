// Lookup:    O (1)
// Insertion: O (1)
// Linked List and Binary Search Tree cannot achieve this runtime
// {key:a value:b}
//A hash table is a table of pre determined length where the cells/buckets holds a piece of data which contain a key and a value. If each bucket contains more then one key bvalue pair we can simply add them to the bucket at the end of a linked list chain to avoid a "collision"
// [, , , ,{}, , ,{},,,]an hash table with collisions as LL
//         {}     {}this is the first node in the chain 
//                {}2nd node LL together to handle the collision


//LL Constructior function to handle collisions
var HashNode = function(key, value, next) {
  this.key = key;
  this.value = value;
  this.next = next || null;
}

function HashTable(size) {
  this.buckets = Array(size);//where data of hash table will be stored
  this.numBuckets = this.buckets.length;//Keep track of how many buckets we have
}

HashTable.prototype.has = function(key) {
  
};






let myHT = new HashTable(30);
//console.log(myHT);

//charCodeAt(index_you_want)//will give unicode value for a string
console.log('hello world'.charCodeAt(4));