export default Completion = (completion) => {
    return {
        TableName: "Completion",
        Item: {
            ...completion,
            dateAttempted: new Date()
        }
    }
}

//completionSchema.index({"user": 1, "course": 1}, {"unique": true})
