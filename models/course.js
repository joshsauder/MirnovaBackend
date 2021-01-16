module.exports = (course) => {
    return {
        TableName: 'Course',
        Item: {
            ...course, 
            dateAdded: new Date()
        }
    }
}