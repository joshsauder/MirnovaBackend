module.exports = (user, id) => {
    return {
        TableName: 'User',
        Item: {
            ...user,
            ID: id,
            createdDate: new Date()
        }
    }
}