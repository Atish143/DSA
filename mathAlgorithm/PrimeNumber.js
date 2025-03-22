// Give a natural number 'n', determine wether it is a prime number or not 


function isPrime(n){
    if(n<2){
        return false;
    }
    for(let i = 2 ; i < n ; i++){
        if(n%i === 0){
            return false ;
        }
    } 
    return true ;
}



// O(n) - linear time complexity 

console.log(isPrime(5))



