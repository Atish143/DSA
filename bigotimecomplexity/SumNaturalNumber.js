function SumOfNutralNumbers(n){
    let sum = 0;                          //1
    for(let i = 0; i<=n ; i++){
        sum += i                          //n
    }
    return sum                            //1
}


//time complexity is n+2 like whatever the input will be given that much time and space it will take 
//most of the case if we have for loop then we can considere it as liner O(n) - linear 

// if there no loops (or it can be achived directly without disturbing other is called 
// as O(1) constant) used in the logic then time-complexity is O(1) = constant 
// if there 1 loop in function time-complexity is O(n) = linear 
// if there 2 loop in function time-complexity is O(n2) = Quadratic 
// if there 3 loop in function time-complexity is O(n3) = Cubic 
// if it increase more then this we can it as O(logn) Logarithmic



console.log(SumOfNutralNumbers(2))