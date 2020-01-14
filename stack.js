// Stack is LIFO (Last In First Out)

class Stack extends Array {
    constructor(...elems) {
        super(...elems)
    }
}

const s = new Stack(1,2,3);
console.log(s);