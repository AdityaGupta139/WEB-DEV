  "use server"
  import fs from "fs/promises";
 export  const submitAction=async(e) =>{
    
    console.log(e.get("name"),e.get("Add"));
    let a= await fs.writeFile("data.txt", `Name: ${e.get("name")}, Address: ${e.get("Add")}`); 
    console.log(a);
  }