const express = require('express')
const router = express.Router()

const {createActivity,deleteActivity,getActivitys,updateActivity} = require("../controllers/activityController")

router.route("/").get(getActivitys)

router.route("/").post(createActivity)

router.route("/").put(updateActivity)

router.route("/").delete(deleteActivity)

module.exports  = router
