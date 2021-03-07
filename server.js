require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_STRING, {useNewUrlParser : true, useUnifiedTopology : true});
const db = mongoose.connection;
db.on('erro', (err)=>{
    console.log(err);
})
db.once('open', ()=>{
    console.log('database connected');
});

app.use(express.json());

const subscribersRouter = require('./routes/subscribers');
app.use('/subscribers', subscribersRouter);

app.listen(3000, ()=>{
    console.log('Server running!');
})