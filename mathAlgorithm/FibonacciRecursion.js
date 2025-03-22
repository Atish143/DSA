//Give a number "n", find the nth element of the Fibonacci sequence


function RecursionFibonacci(n){
    if(n<2){
        return n
    }
    return RecursionFibonacci(n-1) + RecursionFibonacci(n-2)
}


console.log(RecursionFibonacci(6))