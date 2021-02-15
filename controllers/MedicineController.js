const Medicine = require('../models/Medicine')

exports.getAll = (req, res) => {
    Medicine.getAll().then(data => {
        res.json(data)
    })
}

exports.getByCategoryId = (req, res) => {
    Medicine.getByCategoryId(req.params.category_id).then(data => {
        res.json(data)
    })
}

exports.create = (req, res) => {
    Medicine.create({
        name: req.body.name,
        category_id: req.body.category_id,
    }).then(data => {
        res.json({"status": "created"})
    })
}

exports.update = (req, res) => {
    Medicine.update({
        id: req.body.id,
        name: req.body.name,
        category_id: req.body.category_id,
    }).then(data => {
        res.json({"status": "updated"})
    })
}

exports.delete = (req, res) => {
    Medicine.delete(req.headers.id).then(data => {
        res.json({"status": "deleted"})
    })
}