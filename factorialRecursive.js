//Written in n^2

function factorial(num) {
  if (num <= 2) { //we could set it to 1 but that would be one more step
    return num;
  }
  else {
    return num * factorial(num - 1);
  }
}

console.log(factorial(4));