console.log("tghis os about loops")
let a=1;
for(let i=0;i<100;i++){
    console.log(a+i);
}

let obj={
    name: "Aditya",
    role:  "HeavyCoder",
    company: "HeavyCoders AI"

}
for(const key in obj){
    const element=obj[key]
console.log(key, element)
}
for (const c of "aditya") {
    console.log(c)
    
}
let i =5;
while(i<10){
    console.log(i)
    i++;
}
do {
    console.log(i)
    i++;
} while (i<5);