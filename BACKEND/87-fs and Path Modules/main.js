const fs=require("fs")
console.log(fs)
console.log("starting")
// fs.writeFileSync("aditya.txt","aditya is a good boy")
fs.writeFile("aditya.txt","aditya is a good boy",()=>{
    console.log("done")
    fs.readFile("aditya2.txt",(error,data)=>{
        console.log(error,data.toString())
    })
})
fs.appendFile("aditya.txt","adityaOG",(e,d)=>{
    console.log(d)
})


console.log("ending")