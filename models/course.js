export default Course = (course) => {
    return {
        TableName: 'Course',
        Item: {
            ...course, 
            dateAdded: new Date()
        }
    }
}