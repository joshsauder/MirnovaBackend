const express = require('express')
const router = express.Router()

const {fetchImage} = require('./controller/course')

router.get('/course/images', fetchImage)

module.exports = router