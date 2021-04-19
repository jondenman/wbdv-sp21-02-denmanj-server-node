const questionsService = require('../services/questions/questions-service')

module.exports = (app) => {

    const findAllQuestions = (req, res) => {
        // const questions = questionsService.findAllQuestions();
        // res.send(questions)
        questionsService.findAllQuestions()
            .then((questions) => {
                res.send(questions)
            })
    }

    const findQuestionsForQuiz = (req, res) => {
        const qzid = req.params.qzid;
        // const questions = questionsService.findQuestionsForQuiz(qzid);
        // res.send(questions)
        questionsService.findQuestionsForQuiz(qzid)
            .then((questions) => {
                res.send(questions)
            })
    }

    const findQuestionById = (req, res) => {
        const qid = req.params.qid;
        questionsService.findQuestionById(qid)
            .then((question) => {
                res.send(question)
            })
    }

    app.get('/api/quizzes/:qzid/questions', findQuestionsForQuiz);
    app.get('/api/questions', findAllQuestions);
    app.get('/api/questions/:qid', findQuestionById);

}