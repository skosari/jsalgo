//Returns every pair of numbers from our num array that adds up to the sum

//O(n) constant time complexity
//built using a hash table
function twoSumFast(numArr, sum) {
  let hashTable = [];
  let pairs = [];
  
  for (let i=0; i < numArr.length; i++) {
    let currNum = numArr[i];
    let counterpart = sum - currNum;
    if (hashTable.indexOf(counterpart) !== -1) {
      //console.log(hashTable.indexOf(counterpart));
      pairs.push([currNum, counterpart]);
    }
    hashTable.push(currNum)
  }
  console.log(pairs);
}

twoSumFast([1,2,3,4,5,5],5)