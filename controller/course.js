import {fetchCourseImage} from '../dao/course'

exports.fetchImage = (req, res) => {
    let image = req.query.image
    console.log(image)
    fetchCourseImage(image)
    .then(data => {
        res.send(data.Body)
    }).catch(err => {
        res.status(404).send('File not found')
    })
}