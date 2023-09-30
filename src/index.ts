import { BunRoutes } from "./routes/BunRoutes"

const {Request : Req,Response : Res} = require('express')
const express = require('express')
const app = express()

app.use('/',express.static('dist'))
app.use(express.json())

app.get('/hello',(req : typeof Req,res : typeof Res)=>{
    res.send("Hello world")
})

app.use('/buns',BunRoutes)

app.listen(3000,() => console.log("listening"))