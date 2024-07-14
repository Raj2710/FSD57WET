// const express = require('express')//Common JS
import express from 'express'//ES6
import controller from './src/controller/index.js';
const PORT = process.env.PORT || 8000;
const app = express();

app.use(express.json())
app.use(controller)


app.listen(PORT,()=>console.log(`App is listening port ${PORT}`))