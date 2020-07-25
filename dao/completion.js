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
    let newCompletion = new Completion(completion)
    let oldCompletion = await Completion.findOne({course: newCompletion.course, user: newCompletion.user})

    if(oldCompletion != null){
        const recToSave = processCompletion(oldCompletion, newCompletion)
        Completion.update({user: recToSave.user, course: recToSave.course}, recToSave)
    }else {
        oldCompletion.save()
    }
    return rec
}

const processCompletion = (oldCompletion, newCompletion) => {
    newCompletion.average = ((oldCompletion.average * oldCompletion.numberOfTries) + newCompletion.points) / (oldCompletion.numberOfTries + 1)
    newCompletion.numberOfTries += 1 

    newCompletion.points = oldCompletion.points > newCompletion.points ? oldCompletion.points : newCompletion.points
    newCompletion.questionsMissed = oldCompletion.questionsMissed < newCompletion.questionsMissed ? oldCompletion.questionsMissed : newCompletion.questionsMissed

    return newCompletion
}