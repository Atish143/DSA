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

    removeValue(value){
        if(this.isEmpty){
            return null
        }
        if(this.head.value === value){
            this.head = this.head.next
            this.size--
            return value
        } else {
            let prev = this.head
            while(prev.next && prev.next.value !== value){
                prev = prev.next
            }
            if(prev.next){
                removedNode = prev.next
                prev.next = removedNode.next
                this.size--
                return value
            }
            return null
        }
    }

    search(value){
        if(this.isEmpty()){
            return -1
        }
        let i = 0 ;
        let curr = this.head ;
        while(curr){
            if(curr.value === value){
                return i
            } 
            curr = curr.next
            i++

        }
        return -1
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

list.insert(10,0);
list.insert(20,0);
list.insert(30,0);
list.insert(40,0);
list.insert(50,0);

console.log('searched ele', list.search(20));


list.print();