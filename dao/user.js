const User = require('../models/user')

exports.findUserByEmail = async (email) => {
    const user = await User.findOne({email: email})
    return user
}

exports.saveUser = async (user) => {
    const newUser = new User(user)
    await newUser.save()

    return newUser
}
