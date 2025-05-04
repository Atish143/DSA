class hashTable {
    constructor(size){
        this.size = size;
        this.table = new Array(size)
    }
    hashKey(key) {
        let hash = 0
        for(let i = 0; i < key.length; i++){
            hash += key.charCodeAt(i) * i;
        }
        return hash % this.size;
    }

    insert(key, value) {
        const index = this.hashKey(key);
        if(!this.table[index]){
            this.table[index] = []
        }
        this.table[index].push([key, value])
    }
    get(key) {
        const index = this.hashKey(key);
        if(this.table[index]){
            for(let i = 0; i < this.table[index].length; i++){
                if(this.table[index][i][0] === key){
                    return this.table[index][i][1]
                }
            }
        }
        return undefined
    }
    remove(key) {
        const index = this.hashKey(key);
        if(this.table[index]){
            for(let i = 0; i < this.table[index].length; i++){
                if(this.table[index][i][0] === key){
                    const value = this.table[index][i][1]
                    this.table[index].splice(i, 1)
                    return value
                }
            }
        }
        return undefined
    }
    display() {
        for(let i = 0; i < this.size; i++){
            if(this.table[i]){
                console.log(`${i}: ${this.table[i]}`)
            }
        }
    }
    clear() {
        this.table = new Array(this.size)
    }
    isEmpty() {
        for(let i = 0; i < this.size; i++){
            if(this.table[i]){
                return false
            }
        }
        return true
    }
}


const table = new hashTable(10)

table.insert('name', 'John')
table.insert('age', 30)
table.insert('city', 'New York')


table.display()
console.log(table.get('name')) // John