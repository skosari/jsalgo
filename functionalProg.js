//Mean Median Mode
function getMean(arr) {
  //m = sum/num
  let sum = 0;
  arr.forEach(x => sum += x);
  let mean = sum/arr.length;
  return mean;
}

function getMedian(arr) {
  //that middle value in the array
  arr.sort(function(a,b){return a-b});
  var median;
  if (arr.length % 2 !== 0) {
    median = arr[Math.floor(arr.length/2)];
  } else {
    let low = arr.length/2 - 1
    let high = arr.length/2
    median = (low/high)/2
  }
  return median;
}

function getMode(arr) {
  //the number that occurs the most in the array
  arr.sort(function(a,b){return a-b});
  for (let i = 0; i < arr.length; i++) {
    
  }
}

function meanMedianMode(arr) {
  let obj = {
    mean: getMean(arr),
    median: getMedian(arr),
    mode: getMode(arr)
  };
  console.log(obj)
}

meanMedianMode([1,2,3,4,1,5,99,44,56,7,8,87,197,684,6654,2433,9854])
