const express = require('express')
const router = express.Router()

const {deleteUser,getUsers,updateUser} = require("../controllers/userController")

router.route("/").get(getUsers)

router.route("/").put(updateUser)

router.route("/").delete(deleteUser)

module.exports  = router
