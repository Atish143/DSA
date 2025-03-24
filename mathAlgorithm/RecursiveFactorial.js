//Recursive solution for factorial 
// 3! = 3*2*1
// 5! = 5*4*3*2*1

function recursionFactorial(n){
    if(n===0){
        return 1
    }
    return n * recursionFactorial(n-1)
}


console.log(recursionFactorial(5))