const Course = require('../models/course')
const AWS = require('aws-sdk')
const s3 = new AWS.S3({apiVersion: '2012-08-10'})
const Database = require('./database')
const dynamo = new Database()

exports.findCourseByName = async (name) => {
    let params = {
        TableName: 'Course',
        Key: { name: name }
    };

    const course = await dynamo.getItem(params)
    return course.Item
}

exports.findAllCourses = async () => {
    let params = {
        TableName: 'Course',
    };

    const courses = await dynamo.scan(params)

    const ret = courses.Items.map(item => {
        return {
            ...item,
            questionCount: item.questions.length
        }
    })

    return ret
}

exports.postCourse = async (course) => {
    const item = Course(course)
    await dynamo.putItem(item)

    return item.Item
}

exports.findCourseImages = async (course) => {
    var params = {
        Bucket: 'mirnova-course-images',
        Prefix: course
    }
    let data = await s3.listObjectsV2(params).promise()

    return data
}