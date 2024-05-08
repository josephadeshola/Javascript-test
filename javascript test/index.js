class Stack{
    constructor(){
        this.stack = []
        this.size = this.stack.length
    }
    push(item){
        this.stack.push(item)
    }
    pop(){
        this.stack.pop() 
    }
    peekLast(){
        console.log(this.stack[this.stack.length -1]);
    }
    peekFirst(){
        console.log(this.stack[this.size]);
    }
    isEmpty(){
        if(this.stack.length < 1){
            console.log("empty object");
        }
    }
    print(){
     console.log(this.stack);
    }
}

let q1 = new Stack()
q1.push(1)
q1.push(2)
q1.push(3)
q1.push(4)
q1.pop()
q1.peekLast()
q1.peekFirst()
q1.isEmpty()
q1.print()
console.log(q1);