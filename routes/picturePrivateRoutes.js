const express = require('express')
const router = express.Router()
const { getPicturePrivate } = require('../controllers/pictureController')
const verifyJWT = require('../middleware/verifyJWT')

router.use(verifyJWT)
router.route('/').post(getPicturePrivate)

module.exports = router
