//Given a sorted array of 'n' elements and a target element 't' , find the index of the "t" in array 
//else return -1 if target element not found 
// but do it in Recursive manner


function recursiveBinarySearch(array , target){
    return search(array , target , 0 , array.length - 1)
}

function search(array , target , leftIndex , rightIndex){
    if(leftIndex > rightIndex){
        return - 1
    }

    let middleIndex = Math.floor((leftIndex + rightIndex)/2)

    if(target === array[middleIndex]){
        return middleIndex
    }

    if(target < array[middleIndex]){
        return search(array , target , leftIndex , middleIndex - 1)
    } else {
        return search(array , target , middleIndex - 1, rightIndex)
    }
}

console.log(recursiveBinarySearch([-2,20,30,40,50,60,80],50))