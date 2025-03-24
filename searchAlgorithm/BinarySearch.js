//Given a sorted array of 'n' elements and a target element 't' , find the index of the "t" in array 
//else return -1 if target element not found 



function binarySearch(array , target){

    let leftIndex = 0;
    let rightIndex = array.length - 1

    while(leftIndex <= rightIndex){
        let middleIndex = Math.floor((leftIndex + rightIndex)/2)
        console.log('middleIndex' , middleIndex)
        if(target === array[middleIndex]){
            return middleIndex
        } 
        if(target < array[middleIndex]){
            rightIndex = middleIndex - 1
        } else {
            leftIndex = middleIndex + 1
        }
    }

    return -1
}

console.log(inarySearch([-2,10,18,25,30 , 40] , 25))