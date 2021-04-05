module.exports = (app) => {

    const add = (request, response) => {
        const a = parseInt(request.params['paramA'])
        const b = parseInt(request.params.paramB)
        response.send(`${a + b}`)
    }

    const subtract = (request, response) => {
        const a = parseInt(request.query.x)
        const b = parseInt(request.query.y)
        const c = a - b
        response.send(`${c}`)
    }

    app.get('/subtract/', subtract)

    app.get('/add/:paramA/:paramB', add)

    app.get('/', function (req, res) {
        res.send('Hwllo world')
    })

}