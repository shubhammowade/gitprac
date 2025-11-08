const express = require('express')
const app = express()

app.get('/', (req, res) =>
{
    res.send("welcome to express app")
})

app.get('/v1' ,(req,res)=>
{
    res.send(" this is v1")
})
app.get('/v2' ,(req,res)=>
{
    res.send(" this is v2")
})


app.listen(4000, '0.0.0.0', ()=> {
  console.log( `server started on port 4000`)
})