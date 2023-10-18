const { bollywood, hollywood, technology, food, sports } = require("../routing/dummyData")

const bollywoodController =(req,res)=>{
   return res.send(bollywood)
}

const hollywoodController =(req,res)=>{
   return res.send(hollywood)
}
const technologyController =(req,res)=>{
   return res.send(technology)
}
const sportsController =(req,res)=>{
   return res.send(sports)
}
const foodController =(req,res)=>{
   return res.send(food)
}

module.exports = {bollywoodController,hollywoodController,technologyController,sportsController,foodController}