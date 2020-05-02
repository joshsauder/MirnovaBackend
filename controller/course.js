const express = require('express')
const router = express.Router()
import {fetchCourseImage} from '../dao/course'

router.get('/question/image', async (req, res) => {
    let image = req.image

    fetchCourseImage(image)
    .then(data => {
        res.send(data.Body)
    }).catch(err => {
        res.status(404).send('File not found')
    })
})