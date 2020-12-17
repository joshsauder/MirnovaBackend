const Completion = require('../models/completion')

exports.getCompletion = async (course, user) => {
    let rec = await Completion.findOne({course: course, user: user})
    return rec;
}

exports.getCompletions = async (user) => {
    let rec = await Completion.find({user: user})
    return rec;
}

exports.saveCompletion = async (completion) => {
    let newCompletion = new Completion(completion)
    let oldCompletion = await Completion.findOne({course: newCompletion.course, user: newCompletion.user})

    if(oldCompletion == null){
        newCompletion = generateCompletion(newCompletion)
    } else{
        newCompletion = processCompletion(oldCompletion, newCompletion)
    } 

    await Completion.findOneAndUpdate({user: newCompletion.user, course: newCompletion.course}, newCompletion, {upsert: true})
    return newCompletion
}

const generateCompletion = (completion) => {
    completion.average = completion.points
    completion.numberOfTries += 1 

    return completion
}

const processCompletion = (oldCompletion, newCompletion) => {
    newCompletion._id = oldCompletion._id

    newCompletion.average = ((oldCompletion.average * oldCompletion.numberOfTries) + newCompletion.points) / (oldCompletion.numberOfTries + 1)
    newCompletion.numberOfTries = oldCompletion.numberOfTries + 1 

    newCompletion.points = oldCompletion.points > newCompletion.points ? oldCompletion.points : newCompletion.points
    newCompletion.questionsMissed = oldCompletion.questionsMissed < newCompletion.questionsMissed ? oldCompletion.questionsMissed : newCompletion.questionsMissed
    newCompletion.completed = newCompletion.completed || oldCompletion.completed

    return newCompletion
}