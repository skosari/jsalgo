//fibonacci sequence goes like [1,1,2,3,5,8,13,21,34,55,...]
//fib position 4 should = 3

function fibonacci(position) {
  if (position < 3) return 1
  else return fibonacci(position -1) + fibonacci(position -2)
}

console.log(fibonacci(6))

//fib(6)
//fib(5) +          `fib(4)
//fib(4) +          fib(3) + fib(3) + fib(2)
//fib(3) + fib(2) + fib(3) + fib(3) + fib(2) = 8
