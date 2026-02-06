const http = require('http');
const express = require('express');
const users = require('./MOCK_DATA.json')


const app = express(); 


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