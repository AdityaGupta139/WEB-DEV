console.log("aditya is hacker")
console.log("praful is hecker")
setTimeout(() => {
    console.log("i am inside settimeout")
}, 0);
setTimeout(() => {
    console.log("i am inside set timeout 2")
}, 0)
console.log("The End")

const fn =() => {
  console.log("nothing")
  fn()
}



const callback = (arg) => {
    console.log(arg, fn)
}

const loadscript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("aditya")
    document.head.append(sc)
}
loadscript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)