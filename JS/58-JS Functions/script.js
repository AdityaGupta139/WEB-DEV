console.log("this is about functions in JS")

function nice(name){
    console.log("Hey "+name+" you are intelligent!")
    console.log("Hey "+name+" you are the besttt")
    console.log("Hey "+name+" you are nice person")
    console.log("Hey "+name+" you are most intelligent person")
}
nice("Aditya")
function sum(a,b,c=3){
    console.log(a+b+c);
    return a+b+c
}
sum(3,5)
result1=sum(2,4)
result2=sum(45,4)
result3=sum(78,4,1)
console.log("The sum of these numbers is:",result1)
console.log("The sum of these numbers is:",result2)
console.log("The sum of these numbers is:",result3)

const func1=(x)=>{
    console.log("i am an arrow function",x)
}
func1(34)
func1(66)
func1(386)