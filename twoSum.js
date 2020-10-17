//Returns every pair of numbers from our num array that adds up to the sum

//O(n) constant time complexity
//built using a hash table
function twoSumFast(numArr, sum) {
  let hashTable = [];
  let pairs = [];
  
  for (let i=0; i < numArr.length; i++) {
    let currNum = numArr[i];
    let counterpart = sum - currNum;
    if (hashTable.indexOf(counterpart) !== -1) { //The indexOf() method returns the position of the first occurrence of a specified value, this method returns -1 if the value to search for never occurs 
      //console.log(hashTable.indexOf(counterpart));
      pairs.push([currNum, counterpart]);
    }
    hashTable.push(currNum)
  }
  console.log(pairs);
}

twoSumFast([1,2,3,4,5,5],5)


// Find the first occurrence of the letter "e" in a string, starting the search at position 5:
// var str = "Hello world, welcome to the universe.";

// var n = str.indexOf("e", 5);