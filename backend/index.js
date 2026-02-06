// const http = require('http');
const express = require('express');
const mongoose = require('mongoose');
const users = require('./MOCK_DATA.json')




const app = express(); 

mongoose.connect('mongodb://127.0.0.1:27017/blablu')
.then(()=>{
    console.log('Connected to MongoDB');
})
.catch((error)=>{
    console.error('Error connecting to MongoDB:', error);
});
const schema = new mongoose.Schema({
    id: Number,
    first_name: String,
    last_name: String,
    email: String,
    gender  : String,
})


const User = mongoose.model('User', schema);

app.get('/api/users',(req,res)=>{
    res.json(users);
})

app.get('/users',(req,res)=>{
    res.json(users);
})


app.get('/api/users/:id', (req,res)=>{
    const id = Number(req.params.id);
    const user = users.find(user => user.id === id)
})



 


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});