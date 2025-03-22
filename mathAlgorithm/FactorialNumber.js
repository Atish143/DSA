//Give an integer "n", find the factorial of that integer

//factorial(3) = 3*2*1 = 6

function factorial(n){
    let fac = 1 ;
    for(let i = 1 ; i <= n ; i++){
         fac =  fac * i
    }
    return  fac
}
// O(n) - linear time complexity solution
console.log(factorial(3))

