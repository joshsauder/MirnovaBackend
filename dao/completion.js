const Completion = require('../models/completion')

export const getCompletion = async (course, user) => {
    let rec = await Completion.findOne({course: course, user: user})
    return rec;
}

export const getCompletions = async (user) => {
    let rec = await Completion.find({user: user})
    return rec;
}

export const saveCompletion = async (completion) => {
    //add if not exist
    let options = {upsert: true, new: true}

    let newCompletion = new Completion(completion)
    let rec = Completion.findOneAndUpdate({course: newCompletion.course, user: newCompletion.user}, 
        {newCompletion, $inc: {numberOfTries : 1}}, 
        options)

    return rec
}   