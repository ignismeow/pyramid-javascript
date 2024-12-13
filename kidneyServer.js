const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
 

const users = [{
    name: "Saad",
    kidneys: [{
        healthy: false
    }]
}];

app.get('/', function(req, res){
    const userKidney = users[0].kidneys;
    const numberOfkidneys = userKidney.length;
    let numberOfkidneysHealthy = 0;
    for(let i=0; i< userKidney.length; i++){
        if(userKidney[i].healthy){
            numberOfkidneysHealthy = numberOfkidneysHealthy + 1
        }
    }
    const numberOfkidneysUnhealthy = numberOfkidneys - numberOfkidneysHealthy
    res.json({
        numberOfkidneys,
        numberOfkidneysHealthy,
        numberOfkidneysUnhealthy
    })
})

app.post("/", function(req, res){
     const isHealthy = req.body.isHealthy;
     users[0].kidneys.push({
        healthy: isHealthy
     })
     res.json({
        msg: "Done"
     })
})

app.put("/", function(req, res){
    for(let i=0; i < users[0].kidneys.length; i++){
        users[0].kidneys.healthy = true;
    }
    res.json({})
})

app.delete("/", function(req, res){
    if(isThereAtleastOneUnhealthyKidney()){
        const newKidneys = [];
        for(let i=0; i < users[0].kidneys.length; i++){
            if(users[0].kidneys[i].healthy){
                newKidneys.push({
                    healthy: true
                })
            }
        }
        users[0].kidneys = newKidneys;
        res.json({msg: "Done"})
    } else {
        res.statusCode(411).json({
          msg: "You have no bad kidneys"  
        })
    }
})

function isThereAtleastOneUnhealthyKidney(){
    let atleastOneUnhealthyKidney = false;
    for(let i=0; i < users[0].kidneys.length; i++){
        if(!users[0].kidneys[i].healthy){
            atleastOneUnhealthyKidney = true;
        }
    }

    return atleastOneUnhealthyKidney
}


app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`)
})  
