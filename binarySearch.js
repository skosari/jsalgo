//Search for a given KEY inside a list/ARRAY
//run in O(n)
function binarySearch(numArr, key) {

}
//binarySearch()



function binarySearchRecursive(numArr, key) {
  let middleIndex = Math.floor(numArr.length/2);
  let middleElement = numArr[middleIndex];

  if (middleElement === key) return true;//if the key is the middle element then it will stop here
  else if (middleElement < key && numArr.length > 1) {//if the key is less than the middle element and the array has more than 2 elements we will call our function again below
    return binarySearchRecursive(numArr.splice(middleIndex, numArr.length), key);//call binarySearch on our modified array spliced at the middleIndex number up to the end of the array 
  }
  else if (middleElement > key && numArr.length > 1) {//if the key is greater than the middle element
    return binarySearchRecursive(numArr.splice(0, middleIndex), key);
  }
  else return false;
}
console.log(binarySearchRecursive([5,7,12,16,36,39,42,56,71,4,9,1,3,3], 99));



//recursive example
//O(n^2)
// function func() {
//   if (/**Base case*/) {
//     return something;
//   }
//   else { //recursive case -  call the function again
//     func()
//   }
// }