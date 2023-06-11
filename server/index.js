const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Hello World!");
});
app.post('/', cors(), (req,res)=>{
    console.log(req.body);
    res.status(200).send('ok');
})

const PORT = process.env.PORT || 4000;

app.listen(PORT,()=>{console.log("server started and listening on port " + PORT)});