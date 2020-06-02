const Course = require('../models/course')
const AWS = require('aws-sdk')

AWS.config.update({region: 'us-east-1'});
const s3 = new AWS.S3({apiVersion: '2006-03-01'});

exports.findCourseByName = async (name) => {
    const course = await Course.findOne({name: name})
    return course
}

exports.findAllCourses = async () => {
    const courses = await Course.find({})
    return courses
}

exports.postCourse = async (course) => {
    const newCourse = new Course(course)
    await newCourse.save()

    return newCourse
}

exports.updateCourse = async (course) => {
    let updatedCourse = await Course.findOneAndUpdate({name: course.name}, course)
    return updatedCourse
}

exports.findCourseImages = async (course) => {
    var params = {
        Bucket: 'mirnova-course-images',
        Prefix: course
    }
    let data = await s3.listObjectsV2(params).promise()

    return data
}

exports.fetchCourseImage = (image) => {
    var params = {
        Bucket: 'mirnova-course-images',
        Key: image
    }

    return s3.getObject(params).promise()
}