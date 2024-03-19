const express = require('express')
const router = express.Router()

const {getAccomodations,updateAccomodation,createAccomodation,deleteAccomodation} = require('../controllers/accomodationController')

router.route("/").get(getAccomodations)

router.route("/").post(createAccomodation)

router.route("/").put(updateAccomodation)

router.route("/").delete(deleteAccomodation)

module.exports  = router
