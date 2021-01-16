const User = require('../models/user')
const { v4 } = require('uuid');
const Database = require('./database')
const dynamo = new Database()

exports.findUserByEmail = async (email) => {
    const params = {
        TableName: 'User',
        Key: { email: email }
    }
    const user = await dynamo.getItem(params)
    return user.Item
}

exports.saveUser = async (user) => {
    const newUser = User(user, v4())
    await dynamo.putItem(newUser)

    return newUser.Item
}
