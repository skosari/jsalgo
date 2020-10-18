//Sieve Of Eratosthenes
//return all prime numbers up to our number in our array

function sOE(num) {
  let primeNums = [];
  for (let i=0; i <= num; i++) {
    primeNums[i] = true;
  }
  primeNums[0]=false;
  primeNums[1]=false;
  for (var i=2; i < Math.sqrt(num); i++) {
    for (let j=2; i*j <= num; j++) {
      primeNums[j*i] = false;
    }
  }
  let primes = [];
  for (let i=0; i < primeNums.length; i++) {
    if (primeNums[i]) primes.push(i);
  }
  console.log(primes)
}

sOE(20);
//[2,3,5,7,11,13,17,19]
//Prime numbers are numbers with only two factors – themselves and 1. This means they cannot be divided by any other numbers without leaving a remainder.