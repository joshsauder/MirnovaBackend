const { dynamo } = require('../index')
const User = require('../models/user')

exports.findUserByEmail = async (email) => {
    const params = {
        TableName: 'User',
        Key: { email: email }
    }
    const user = await dynamo.get(params).promise()
    return user.Item
}

exports.saveUser = async (user) => {
    const newUser = new User(user)
    await dynamo.put(newUser)

    return newUser.Item
}
