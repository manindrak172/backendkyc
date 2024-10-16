const express=require('express')

//mongodb+srv://A123:A123@123@cluster0.hd7pf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
const app=express()


app.get('/',(req,res)=>{
    res.status(200).json('server Start')
})



app.listen(3000,()=>{
    console.log('server Start 3000')
})