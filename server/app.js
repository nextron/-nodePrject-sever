// const express = require("express");
// const app = express();
//const dbStatus = require('./dbOperations');
import express from 'express';
import { mongoConnect } from './dbOperations.mjs';
import userRouter from './routes/userRoutes.mjs';
import projectRouter from './routes/projectRoutes.mjs';
import taskRouter from './routes/taskRoutes.mjs';
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/user/', userRouter);
app.use('/admin/project', projectRouter);
app.use('/admin/task', taskRouter);

//Get method
// app.get('/', (req, res) => {
//     res.send(connectionStatus() + saveMember());
// })

const start = async() => {
    await mongoConnect();
}
start();
const port = 8080;
app.listen(port);
console.log("Server is listening to: " + port);