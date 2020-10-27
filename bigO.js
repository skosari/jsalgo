//Constant runtime - runtime stays the same
//Big O Notation: O(1)
function log(array) {
  console.log(array[0])
  console.log(array[1])
}
log([1,2,3,4])
log([1,2,3,4,5,6,7,8,9,10])


//Linear runtime - as the input size increases so does our runtime
//Big O Notation: O(n)
function logAll(array) {
  for (let i=0; i < array.length; i++) {
    console.log(array[i])
  }
}
logAll([1,2,3,4,5])
logAll([1,2,3,4,5,6,7,8])
logAll([1,2,3,4,5,6,7,8,9,10,11,12])

//Exponential runtime - as input size increases the runtime rises exponentially
//Big O Notation: O(n^2)
function addAndLog(array) {
  for (var i = 0; i < array.length; i++) {
    for (var j = o; j < array.length; j++) {
      console.log(array[i] + array[j])
    }
  }
}
addAndLog(['A', 'B', 'C'])
addAndLog(['A', 'B', 'C', 'D', 'E',])
addAndLog(['A', 'B', 'C', 'D', 'E', 'F', 'G'])

//Logarythmic runtime - as input size increases runtime decreases relative to its current size - very performant - dictionary search is the easiest example where you open the book in the middle when you search for a word and you flip toward the letter by halving again and you can halve your way to the letter instead of starting from the A section and working your way through. 4000 elements would take only 12 operations to find 
//Big O Notation: O(Log n)
function binarySearch(array, key) {
  let low = 0;
  let high = array.length -1;
  let mid;
  let element;
  
  while (low <= high) {
    mid = Math.floor((low + high) /2, 10);
    element = array[mid];
    if (element < key) {
      high = mid - 1; 
    } else {
      return mid;
    }
  }
  return -1
}
