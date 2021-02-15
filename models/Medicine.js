const knex = require('../knex')

module.exports.getAll = () =>
    knex('medicine')
        .select('*')

module.exports.getById = id =>
    knex('medicine')
        .where({
            id: id
        }).select('*')

module.exports.getByCategoryId = category_id =>
    knex('medicine')
        .where({
            category_id: category_id
        }).select('*')

module.exports.create = medicine =>
    knex('medicine')
        .insert({
            name: medicine.name,
            category_id: medicine.category_id
        })

module.exports.update = medicine =>
    knex('medicine')
        .where({
            id: medicine.id
        }).update({
            name: medicine.name,
            category_id: medicine.category_id
        })

module.exports.delete = id =>
    knex('medicine')
        .where({
            id: id
        }).delete()