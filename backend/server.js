require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();
const connection = require('./db');
const cors = require('cors');
const Routes = require('./route');

connection();

app.use(express.json());
app.use((req,res,next) => {
    console.log(req.path,req.method)
    next()
})
app.use(cors());

app.use('/api',Routes);

app.listen(process.env.PORT,() => {
    console.log("Connected and listening on Port ",process.env.PORT);
})