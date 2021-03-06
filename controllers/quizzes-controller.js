module.exports = (app) => {
    const quizzesService = require('../services/quizzes/quizzes-service')
    const findAllQuizzes = (req, res) => {
        // const quizzes = quizzesService.findAllQuizzes()
        // res.send(quizzes)
        quizzesService.findAllQuizzes()
            .then((quizzes) => {
                res.send(quizzes)
            })
    }

    const findQuizById = (req, res) => {
        const qiz = req.params['quizId']
        // const quiz = quizzesService.findQuizById(qiz)
        // res.send(quiz)
        quizzesService.findQuizById(qiz)
            .then((quiz) => {
                res.send(quiz)
            })
    }

    app.get('/api/quizzes', findAllQuizzes)
    app.get('/api/quizzes/:quizId', findQuizById)
}