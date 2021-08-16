const Router=require('express')
const router = new Router()
const controller = require('./authController')
const {check} = require("express-validator")
const authMiddleware = require('./midlleware/authMiddlleware')
const roleMiddleware = require('./midlleware/roleMiddleware')

router.post('/registration',[
    check('username',"Name cannot be empty").notEmpty(),
    check('password',"password cannot be long 10 elements: min < 4 && max > 10").isLength({min:4 , max: 10})
], controller.registration)
router.post('/login', controller.login)
router.get('/users', roleMiddleware(["ADMIN"]),controller.getUsers)



module.exports = router