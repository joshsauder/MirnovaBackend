const {findUserByEmail, saveUser} = require('../../dao/user')

export const userResolver = {
    Query: {
        User: async (root, {email}) => {
            const user = findUserByEmail(email)
            return user
        }
    },

    Mutation: {
        createUser: async (root, {user}) => {
            const newUser = saveUser(user)
            return newUser
        }
    }
}