const Course = require('../models/course')
const { dynamo, s3 } = require('../index')

exports.findCourseByName = async (name) => {
    let params = {
        TableName: 'User',
        Key: { name: name }
    };

    const course = await dynamo.get(params).promise()
    return course.Item
}

exports.findAllCourses = async () => {
    const courses = await dynamo.scan(params).promise()
    return courses.Items
}

exports.postCourse = async (course) => {
    const item = Course(course)
    await dynamo.put(item).promise()

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