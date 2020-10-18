//compare each pair of numbers from start to finish then order thast individual pair - in then the largest number will go to the end as it "bubbles its way up"
// # of passes array.length - 1

function bubbleSort (array) {
  console.log("the array length is " + array.length)
  for (var i = array.length; i > 0; i--) { //this will run the array.length-1 passes 
    for (var j=0; j < i; j++) { //loop through the array up to i and i is less each pass
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j+1];
        array[j+1] = temp;
      }
    }
    console.log(array + " sort # " + i)
  }
  return array;
}

console.log(bubbleSort([5,3,8,2,1,4]));