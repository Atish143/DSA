class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    append(value){
        const node  = new Node(value);
        if(this.isEmpty()){
            this.head = node 
        } else {
         let prev = this.head
         while(prev.next){
            prev = prev.next
         }
         prev.next = node
        }
        this.size++
    }

    prepend(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    insert(value , index){
        if(index < 0 || index > this.state){
            return
        }
        if(index === 0){
            this.prepend(value)
        } else {
            const node = new Node(value)
            let prev = this.head
            for(let i = o ; i < index - 1 ; i++){
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }
    }

    removeAtIndex(index){
        if(index < 0 || index >= this.size){
            return null
        }
        let removedNode 
        if(index === 0){
            removedNode = this.head
            this.head = this.head.next
        } else {
            let prev = this.head
            for(let  i = 0 ; i < index - 1 ; i++){
                prev = prev.next
            }
            removedNode = prev.next
            prev.next = removedNode.next
        }
        this.size--
        return removedNode.value
    }

    print() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}

const list = new LinkedList();
console.log('list is empty:', list.isEmpty());
console.log('list size:', list.getSize());

list.prepend(10);
list.prepend(20);

console.log('After adding elements:');
list.insert(90,0)

list.append(40)
list.append(50)

console.log('removeAtIndex', list.removeAtIndex(3))


list.print();