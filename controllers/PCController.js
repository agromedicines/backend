const PC = require('../models/PC')

const parse = data => JSON.parse(JSON.stringify(data))

exports.getAll = (req, res) => {
    PC.getAll().then(data => {
        res.json(data)
    })
}

exports.getProblemsByCultureId = (req, res) => {

    PC.getProblemsByCultureId(req.params.culture_id).then(data => {
        res.json(parse(data).map(item => item.problem_id))
    })
}

exports.getCulturesByProblemId = (req, res) => {
    PC.getCulturesByProblemId(req.params.problem_id).then(data => {
        res.json(parse(data).map(item => item.culture_id))
    })
}

exports.getCulturesWithSingleProblemById = (req ,res) => {
    PC.getCulturesWithSingleProblemById(req.params.problem_id).then(data => {
        res.json(parse(data[0]).map(item => item.culture_id))
    })
}

exports.create = (req, res) => {
    const {
        headers: {
            problem_id,
            culture_id
        }
    } = req

    PC.create({
        problem_id: problem_id,
        culture_id: culture_id
    }).then(data => {
        res.json({'status': 'created'})
    })
}

exports.delete = (req, res) => {
    const {
        headers: {
            problem_id,
            culture_id
        }
    } = req

    PC.delete({
        problem_id: problem_id,
        culture_id: culture_id
    }).then(data => {
        res.json({'status': 'deleted'})
    })
}