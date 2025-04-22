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


list.append(40)
list.append(50)

list.print();