const Treatment = require('../models/Treatment')

exports.getAll = (req, res) => {
    Treatment.getAll().then(data => {
        res.json(data)
    })
}

exports.create = (req, res) => {
    Treatment.create({
        medicine_id: req.body.medicine_id,
        cultures: req.body.cultures,
        problems: req.body.problems
    }).then(data => {
        res.json({"status": "created"})
    })
}

exports.update = (req, res) => {
    Treatment.update({
        id: req.body.id,
        medicine_id: req.body.medicine_id,
        cultures: req.body.cultures,
        problems: req.body.problems
    }).then(data => {
        res.json({"status": "updated"})
    })
}

exports.delete = (req, res) => {
    Treatment.delete(req.headers.id).then(data => {
        res.json({"status": "deleted"})
    })
}