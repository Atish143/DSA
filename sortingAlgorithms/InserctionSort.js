function inserctionSort(array){
    for(let i = 1 ; i < array.length -1 ; i++){
        let numberToinsert = array[i];
        let j = i -1;
        while(j >= 0 && array[j] > numberToinsert){
            array[j+1] = array[j]
            j = j -1
        }
        array[j+1] = numberToinsert
    }
}

const a = [999,45,-54,549,-7,75,]
inserctionSort(a)
console.log(a)