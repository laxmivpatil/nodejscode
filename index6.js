const express =require('express')
const app=express();

app.get('',(req,res)=>{
     
    res.send(`
    <h1>Hello Home </h1><a href="/about">Go to about page</a>
    `)
})
 
app.get('/about',(req,res)=>{
    res.send(`
    <input type="text" placeholder="user name" value=${req.query.name}>
    <button>save</button>
    <a href="/">Go tohome page</a>
    `)
})
app.get('/help',(req,res)=>{
    n="anil"
    res.send({
        name:req.query.name,
        age:28
    })
})
app.listen(4200)