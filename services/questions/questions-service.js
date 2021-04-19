// const questions = require('./questions.json')
const questionsDao = require('../../daos/questions-dao')
const questionsModel = require('../../models/questions/questions-model')

const createQuestion = () => {}
const createQuestionForQuiz = () => {}

const findAllQuestions = () => questionsDao.findAllQuestions()
const findQuestionsForQuiz = (qzid) => questionsDao.findQuestionsForQuiz(qzid)

const findQuestionById = (quid) => questionsDao.findQuestionById(quid)
const updateQuestion = () => {}
const deleteQuestion = () => {}

module.exports = {
    createQuestion,
    createQuestionForQuiz,
    findAllQuestions,
    findQuestionsForQuiz,
    findQuestionById,
    updateQuestion,
    deleteQuestion
}