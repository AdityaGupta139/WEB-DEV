import mongoose from "mongoose";
import express from "express";
import {Todo} from "../96-Installing Mongoose/models/Todo.js";
let conn=await mongoose.connect("mongodb://localhost:27017/")

// const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    const todo=new Todo({title:"hey todo",desc:"description of this todo",isDone:false})
    todo.save()
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})