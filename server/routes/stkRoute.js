const express = require('express')
const { generateToken, sendMoney } = require('../controllers/stkController')
const router = express.Router()


router.route("/").get(generateToken)
router.route("/").post(sendMoney)


module.exports  = router
