function quickSort(array){
    if(array.length < 2){
        return array
    }
    let povit = array[array.length - 1]
    let left = []
    let right = []

    for(let i = 0 ; i < array.length - 1 ; i++){
        if(array[i] < povit){
            left.push(array[i])
        } else {
            right.push(array[i])
        }
    }
    return [...quickSort(left), povit , ...quickSort(right)]
}
const q = [999,45,-54,549,-7,75,]
console.log(quickSort(q))