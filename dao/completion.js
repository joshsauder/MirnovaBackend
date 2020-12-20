const { dynamo } = require('../index')
const Completion = require('../models/completion')

exports.getCompletion = async (course, user) => {
    const params = {
        TableName: 'Completion',
        Key: { course: course, user: user}
    }

    const item = await dynamo.get(params).promise()
    return item.Item;
}

exports.getCompletions = async (user) => {
    var params = {
        TableName: 'Completion',
        FilterExpression: '#s = :user',
        ExpressionAttributeValues: { ':user': user },
        ExpressionAttributeNames: { '#s': 'user' },
    }

    let recs = await dynamo.scan(params).promise()
    return recs.Items;
}

exports.saveCompletion = async (completion) => {
    const params = {
        TableName: 'Completion',
        Key: { course: completion.course, user: completion.user}
    }
    

    let oldCompletion = (await dynamo.get(params).promise()).Item
    let newCompletion;
    if(oldCompletion == null){
        newCompletion = new Completion(generateCompletion(completion))
    } else{
        newCompletion = new Completion(processCompletion(completion, newCompletion.Item))
    } 

    await dynamo.put(newCompletion)
    return newCompletion.Item
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