const express = require('express');
const cors = require('cors');
const app = express();
const testRoutes = require("./routes/testr");

app.use(cors())
app.use(express.json())

app.get('/', (req, res)=>{
    res.send('Hello World')
})

app.use("/api", testRoutes);

module.exports = app;
