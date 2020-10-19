//Take in an array and break down each array element into its own array by splitting each new array by 2 until each element is in its own array.
//Now merge the arrays containing 1 element into an array with 2 elements and sort them then merge those into a bigger array until you are back to one array
//           [11,7,4,1,15,12,3]
//     [11,7,4,1]           [15,12,3]
//   [11,7]     [4,1]      [15,12]  [3]
//  [11] [7]   [4] [1]    [15] [12] [3]
//   [7,11]     [1,4]      [12,15]  [3]
//      [1,4,7,11]           [3,12,15]
//           [1,3,4,7,11,12,15] 

//take in a single, unsorted array as a parameter and split the array into two halves
function mergeSort(array) {
  //If our array is split into a single element array we return the array
  if (array.length < 2) return array;
  //split array into two halves
  var midIndex = Math.round(array.length / 2);
  var firstHalf = array.slice(0, midIndex);
  var secondHalf = array.slice(midIndex);
  


}


//takes in two sorted arrays as parameters merges them and returns on sorted array
function merge (array1, array2) {

}


console.log(mergeSort(array));

