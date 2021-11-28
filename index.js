const path = require("path");
const express = require("express");
const app = express();
const port = 8000;
//buitin middleware

const staticPath= path.join(__dirname,"../public");

// to set the view engine

app.set("view engine","hbs");


app.use(express.static(staticPath))


//template engine route
app.get("/", (req,res)=>{
    res.render('index');
})
app.get("/", (req,res)=>{
    res.send('hello for the other side');
})

app.listen(port, ()=> {
    console.log(`listening to the port ${port}`)
})
