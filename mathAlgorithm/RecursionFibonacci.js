//Give a number "n", find the nth element of the Fibonacci sequence


function recursionFibonacci(n){
    if(n<2){
        return n
    }
    return recursionFibonacci(n-1) + recursionFibonacci(n-2)
}


console.log(recursionFibonacci(6))