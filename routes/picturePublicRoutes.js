const express = require('express')
const router = express.Router()
const { getPicturePublic } = require('../controllers/pictureController')

router.route('/').get(getPicturePublic)

module.exports = router
