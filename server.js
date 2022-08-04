const express=require("express")
const serveStatic=require("serve-static")
const path=require("path")

const app=express()

app.use("/", serveStatic(path.join(__dirname, "/dist")))

const server=app.listen(process.env.PORT||8080, ()=>{
    const port=server.address().port
    console.log(`aplikasi berjalan diport ${port}`)
})