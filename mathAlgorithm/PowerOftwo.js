//Given the number integer "n", determine if the number is a power of 2 or not 
//n = 8
//8/2 = 4
//4/2 = 2
//2/2 = 1
// 1 the remainder is 0 then give true else if remainder is 1 give false 
function isPowerOfTwo(n){
    if(n < 1){
        return false
    }
    while(n > 1){
        if(n%2 !== 0){
            return false
        } 
        n = n/2                 // reducing the size of n
    }
    return true
}


// if we reduce the size of n then it is O(logn)
console.log(isPowerOfTwo(1))