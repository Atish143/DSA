// Give a number n find the first n  elements of the fibonacci sequnce

function fibonacci(n) {
    let fib = [0,1]
    for(let i = 2 ; i < n ; i++){
        fib[i] = fib[i - 1]  + fib[i-2]
    
    }
    if(n === 0 || n === 1){
        return n
    } else if(n < 0){
        return "error"
    }
    return fib
 
}

// O(n) linear time complexity 

console.log(fibonacci(10))