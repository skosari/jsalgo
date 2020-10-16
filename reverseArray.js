function reverseArrayInPlace(arr) {
  //reverse arr without reverse method
  //manipulate array passed in do not use another array
  for(let i = 0; i < arr.length / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    console.log(arr.length-1-i);
    arr[arr.length - 1 - i] = temp;
  }
  console.log(arr);
}

reverseArrayInPlace([1,2,3,4,5,'word', 'another-word',8, 9])