const {findUserByEmail, saveUser} = require('../../dao/user')

export const userResolver = {
    Query: {
        User: async (root, {email}) => {
            const user = await findUserByEmail(email)
            return user
        }
    },

    Mutation: {
        createUser: async (root, {user}) => {
            const newUser = await saveUser(user)
            return newUser
        }
    }
}