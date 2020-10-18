//fibonacci sequence goes like [1,1,2,3,5,8,13,21,34,55,...]
//fib position 4 should = 3
//Doing this recursively is extremely inneficient and will cost an arm and a leg in a serverless environment
//O(2^n)
function fibonacciExpo(position) {
  if (position < 3) return 1  //Base case
  else return fibonacci(position -1) + fibonacci(position -2)
}
//console.log(fibonacciExpo(6))
//fib(6)
//fib(5) +          fib(4)
//fib(4) +          fib(3) + fib(3) + fib(2)
//fib(3) + fib(2) + fib(3) + fib(3) + fib(2) = 8
//  2    +   1    +   2    +   2    +   1    = 8

//WAY faster
function fibonacci(position) {
  if (position < 3) {
    return 1;
  }
  var arr =[1,1];
  var sum = 1;
  for (i=0; i < position; i++) {
      sum = sum + arr[i] ;
      arr.push(sum);
  }
  return arr[position-1];
}
console.log(fibonacci(1000));

//MEMOIZATION ALSO SUPER FAST
//check to see if number is already in cache
//if number is in cache, use that number
//if number is not in cache, calculate it and put it in cacheso it can be used multiple times
//Linear time complexity
//O(n)

//the cache will be called recursively so no need to add it to our initial call ex fibMemo(20) is all we would run
function fibMemo(index, cache) {
  cache = cache || [] //if cache does not exist yet like in the first run then it will = [] otherwise it will = the number passed recursively
  if (cache[index]) return cache[index]; //BASE CASE if the cache at the index exists then return the cache at the index 
  else {
    if (index < 3) return 1;
    else cache[index] = fibMemo(index - 1, cache) + fibMemo(index - 2, cache);
    console.log(cache[index]);
  }
  return cache[index];
}

console.log(fibMemo(30));
//cache = []
//cache[4] does not exist
//cache[4] = fibMemo(3,[]) + fibMemo(2,[]) so cache[4] = cache[3] + cache[2]
//                               fibMemo(2,[]) so cache[2] = 1
//           cache[3] = fibMemo(2,[]) + fibMemo(1,[]) so cache[3] = 2
