const express = require("express");
const categoryRouter = require("./routing/Routing");

const app = express();
const middleware1 = (req,res,next)=>{
    console.log("Middleware1 is running firt in all api");
    next();
}

app.use(middleware1)
app.use('/api/',categoryRouter)


app.get("/",(req,res)=>{
    res.send("This is Perfect server")
})

app.listen(4000,()=>{
    try{
        console.log("Server is running in 4000")
    }
    catch(err){
        console.log(`Problem occured while loading server ${err}`)
    }
})