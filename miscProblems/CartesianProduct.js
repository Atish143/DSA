function cartesianProduct(arr1 , arr2){
    let result = []
    for(let i = 0 ; i < arr1.length ; i++){
        for(let j = 0 ; j < arr2.length ; j++){
            result.push([arr1[i],arr2[j]])
        }
    }
    
    return result
}
const arr1 = [2,1,4]
const arr2 = [7,8]
console.log(cartesianProduct(arr1, arr2))