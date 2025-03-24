// find the target elemnet from the array 

function linearSearch(arr , target){

    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] === target){
            return i
        }
    }
    return -1
}

console.log(linearSearch([10,20,30,40],40))