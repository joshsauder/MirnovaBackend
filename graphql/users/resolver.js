import User from '../../models/user'

export const userResolver = {
    Query: {
        users: async (root, {email}) => {
            const user = await User
            .findOne({email: email})

            return user
        }
    },

    Mutation: {
        createUser: async(root, {email, name, dob}) => {
            const user = new User({email, name, dob})
            await user.save()

            return user
        }
    }
}