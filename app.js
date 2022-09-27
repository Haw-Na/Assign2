const express = require('express');

const app = express();

app.get('/',function(req,res){
    res.send('<h1 style=color:red;>This is My Home Page</h1>')
})

app.get('/about', (req,res)=>{
    res.send('<h1 style=color:blue;>Welcome From Our Community</h1>')
})

app.get('/contact',(req,res)=>{
    res.send("<h1>Let's start the Party</h1>")
})

app.listen(8000);