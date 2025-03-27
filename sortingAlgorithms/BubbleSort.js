function bubblueSort(array){
    let swapped 
    do {
        swapped = false
        for(let i = 0 ; i < array.length -1 ; i++){
            if(array[i] > array[i + 1]){
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp
                swapped = true
            }
         
        }
    } while(swapped)
    
}

const unArraySorted = [-2,4,-45,8,238,4956,-234,3]
bubblueSort(unArraySorted)
console.log(unArraySorted) //outPut [ -234, -45, -2, 3, 4, 8, 238, 4956]