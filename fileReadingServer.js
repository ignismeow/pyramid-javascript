const express = require('express')
const fs = require('fs')
const app = express()
const port = 3001


app.get("/files/:fileName", function(req, res){
    const name = req.params.fileName
    fs.readFile(name, "utf-8", function(err, data){
        res.json({data})
    })
})

app.get("/files", function(req, res){
    const files = fs.readdirSync(__dirname)
    res.send(files)
})


app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`)
})
