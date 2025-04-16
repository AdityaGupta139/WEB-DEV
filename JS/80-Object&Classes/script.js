// let obj={
//     a:1,
//     b:"Aditya"
// }
// console.log(obj)

// let animal={
// eats:true
// };
// let rabbit={
//     jumps:true
// };
// rabbit.__proto__=animal;


class Animal{
    constructor(name)
    {
        this.name=name
        console.log("object is created")
    }
    eats(){
        console.log("khaa rha hu")
    }
    jumps(){
        console.log("kud raha hu")
    }
}
class Lion extends Animal{
    constructor(name)
    {
        super(name)
        console.log("object is created and he is a lion")
    }
}
let a=new Animal("bunny");
console.log(a)

let l=new Lion("Shera")
console.log(l)