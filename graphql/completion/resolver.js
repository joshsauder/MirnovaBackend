const {saveCompletion, getCompletion, getCompletions} = require('../../dao/completion')

export const completionResolver = {
    Query: {
        Completion: async (root, {course, user}) => {
            let rec = await getCompletion(course, user)
            return rec;
        },
        Completions: async (root, {user}) => {
            let rec = await getCompletions(user)
            return rec
        }
    },

    Mutation: {
        updateCompletion: async (root, {completion}) => {
            let rec = await saveCompletion(completion)
            return rec;
        }
    }
}