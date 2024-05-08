class queue {
    constructor(item){
        this.all = []
        this.item = item

    }
    isFull(){
        console.log(this.all.length === this.item);
    }
    enqueue(item){
        if(this.isFull()){
            this.all.push(item)
        }

    }
}

let q1 = new queue()
q1.enqueue("Ayomide")
q1.enqueue("Femi")
q1.enqueue("Olamide")
q1.enqueue("Tope")
console.log(q1);