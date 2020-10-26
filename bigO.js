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


