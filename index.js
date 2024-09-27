
const express = require('express')
const app = express()
const users = [{
  name: "Ujjwal",
  kidneys: [{
    healthy:false
  },{
    healthy:true}]
}]

app.get("/", function (req, res) {
  //write logic to
  const johnkidneys = users[0].kidneys;
  console.log(johnkidneys);
  const numofk = johnkidneys.length;
  let numofhk = 0 ;
  for(let i=0;i<numofk;i++){ 
    numofhk = numofhk + johnkidneys[i].healthy;  
  }
  res.json({
    numofhk
  })
})

app.use(express.json());

app.post("/", function (req, res) {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push ({ healthy: isHealthy })
  res.json({ 
    msg:"done"
  })
  })

app.listen(3000);