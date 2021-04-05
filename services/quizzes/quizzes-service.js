const quizzes = require('./quizzes.json')

// TODO: Node.js assignment
const findAllQuizzes = () => {
    return quizzes
}
const findQuizById = (quizId) => {
    return quizzes.find((quiz) => {
        return quiz._id === quizId
    })
}

// console.log(findAllQuizzes())
// console.log(findQuizById('123'))
// TODO: mongo.db assignment
const createQuiz = () => {}
const updateQuiz = () => {}
const deleteQuiz = () => {}

module.exports = {
    createQuiz,
    findAllQuizzes,
    findQuizById,
    updateQuiz,
    deleteQuiz
}