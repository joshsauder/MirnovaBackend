const express = require('express')
const router = express.Router()

const {fetchImage} = require('./controller/course')

router.get('/course/image', fetchImage)

module.exports = router