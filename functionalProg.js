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
  let obj = {};
  arr.forEach(x => { //HASH TABLE - A hash function basically maps strings/key_values to numbers
    if (!obj[x]) obj[x] = 0; //If this object does not exist then add it to our object
    obj[x]++; //now increment that object that was created or already existed since the line above would not run if it existed
  });

  let maxFrequency = 0;
  let modes = [];
  for (let x in obj) {
    if (obj[x] > maxFrequency) {
      modes = [x];
      maxFrequency = obj[x];
    }
    else if (obj[x] === maxFrequency) {
      modes.push(x);
    }
  }
  if (modes.length === Object.keys(obj).length) //In case every object existst at the same frequency as every other object [1,1,2,2,3,3] meaning there is no mode
  modes = [];
  return modes;
}


function meanMedianMode(arr) {
  let obj = {
    mean: getMean(arr),
    median: getMedian(arr),
    mode: getMode(arr)
  };
  console.log(obj)
}

meanMedianMode([1,2,2,3,4,1,5,99,44,56,7,8,87,197,684,6654,2433,9854])
meanMedianMode([1,1,2,2,3,3])