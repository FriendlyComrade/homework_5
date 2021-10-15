    

    class Node {
        constructor(elem, next = null) {
            this.elem = elem;
            this.next = next;
        }
    }
    
    

    class Stack {
    
        constructor (maxLength = 10) {
    
            if (Number.isSafeInteger(maxLength) && maxLength > 0) {
                this.maxLength = maxLength;
                this.length = 0;
                this.top = null;
            
        
            } else {
                throw new Error('Ошибка!');
            }
        }
    
        push (elem) {
    
            if (this.maxLength > this.length) {
        
                this.length++;
        
                const node = new Node(elem);
                
                node.next = this.top;
                this.top = node;
            
            } else {
                throw new Error('Ошибка!');
            }
        }
    
    
        pop() {
    
            if (this.top !== null) {
        
                this.length--;
        
                let deleted = JSON.parse(JSON.stringify(this.top));
                this.top = this.top.next;
        
                return deleted.elem;
        
            } else {
                throw new Error('Ошибка!');
            }
        }
    
        peek () {
    
            if (this.top !== null) {
                return this.top.elem;
            }
            return null;   
        }
    
    
        isEmpty () {
            return (this.top !== null) ? false : true;
        }
    
    
        toArray () {
    
            const arr = [];
        
            while (this.top) {
                arr.unshift(this.top.elem);
                this.top = this.top.next;
            }
        
            return arr;
        }
    
        static fromIterable (iterable) {
            const newStack = new Stack(iterable.length);

            try {
                for (const element of iterable) {
                newStack.push(element);
                }
            } catch (e) {
                throw new Error('Ошибка!');
            }
        
            return newStack;
        }
    }
    






class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    
    append (elem) {

        const node = new Node(elem);
    
        if (this.tail) {
            this.tail.next = node;
        }
    
        if (!this.head) {
            this.head = node;
        }
    
        this.tail = node;
    }
    
    
    prepend (elem) {
    
        const node = new Node(elem, this.head);
    
            this.head = node;
    
        if (!this.tail) {
    
            this.tail = node;
        }
    }
    
    
    find (elem) {
    
        if (!this.head ) {
    
            return null;
        }
    
        while (this.head) {
    
            if (this.head.elem === elem) {
                return this.head.elem;
            }
                this.head = this.head.next;
    
    
    
            if (this.head === null && this.tail.elem !== elem) {
    
                return null;
            }
        }
    
        
    }
    
    toArray() {
            const arr = [];
    
        while (this.head) {
            arr.push(this.head);
            this.head = this.head.next;
        }
    
            return arr;
    }
    
    
    static fromIterable (iterable) {
    
        const newLinkedList = new LinkedList();

        try {
            for (const element of iterable) {
                newLinkedList.prepend(element);
            }
        } catch (e) {
            throw new Error('Ошибка!');
        }
    
            return newLinkedList;
    }
    
}