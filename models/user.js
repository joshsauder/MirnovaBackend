export default User = (user) => {
    return {
        TableName: 'User',
        Item: {
            ...user, 
            createdDate: new Date()
        }
    }
}