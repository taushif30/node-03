const { bollywoodController, hollywoodController, technologyController, sportsController, foodController } = require("../controller/Controller");
const auth = require('../middleware/auth')
const categoryRouter = require ("express").Router();

categoryRouter.get('/bollywood',auth,bollywoodController)
categoryRouter.get('/hollywood',hollywoodController)
categoryRouter.get('/technology',technologyController)
categoryRouter.get('/sports',sportsController)
categoryRouter.get('/food',foodController)


module.exports = categoryRouter