const quizzes = require('./quizzes.json')
const quizzesDao = require('../../daos/quizzes-dao')

const quizzesModel = require("../../models/quizzes/quizzes-model")
// TODO: Node.js assignment
const findAllQuizzes = () => quizzesDao.findAllQuizzes()
const findQuizById = (quizId) => quizzesDao.findQuizById(quizId)

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