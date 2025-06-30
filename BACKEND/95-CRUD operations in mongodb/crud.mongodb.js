use("CrudDb")
// create
// db.createCollection("courses")
// db.courses.insertOne(
//     {
//         name:"Aditya",
//         assignments:12,
//         projects:45
//     }
// )
// db.courses.insertMany([
//     { "name": "Aditya", "assignments": 12, "projects": 45 },
//   { "name": "Sneha", "assignments": 15, "projects": 30 },
//   { "name": "Ravi", "assignments": 9, "projects": 25 },
//   { "name": "Meera", "assignments": 18, "projects": 40 },
//   { "name": "Karan", "assignments": 14, "projects": 35 },
//   { "name": "Divya", "assignments": 11, "projects": 28 },
//   { "name": "Arjun", "assignments": 10, "projects": 32 },
//   { "name": "Priya", "assignments": 13, "projects": 27 },
//   { "name": "Manav", "assignments": 16, "projects": 38 },
//   { "name": "Anita", "assignments": 8, "projects": 22 }
// ])
// // read
// let b=db.courses.findOne({projects:40})
// console.log(b)

// UPDATE


// db.courses.updateMany({projects:45},{$set:{projects:0}})

// DELETE


db.courses.deleteOne({projects:0})
db.courses.deleteMany({projects:0})