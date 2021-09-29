const express = require('express')
const app = express() 


let date = new Date();
let d = date.getDay();
let h= date.getHours();

const testMiddlaware=(req,res,next)=>{
    if(d!== 0 && d!==6 && h>=9 && h<=17)
    next()
    else
   res.sendFile(__dirname+'/public/notfound.html')
}
app.use(testMiddlaware)
app.use(express.static('public'))  
/* app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/public/index.html')
}) */

app.listen(5000,() => console.log('server is listening'))

