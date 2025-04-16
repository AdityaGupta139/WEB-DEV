import fs from "fs/promises"
let a= await fs.readFile("aditya.txt")
console.log(a.toString())