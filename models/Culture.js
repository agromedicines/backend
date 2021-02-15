const knex = require('../knex')

module.exports.getAll = () =>
    knex('culture')
        .select('*')

module.exports.create = culture =>
    knex('culture')
        .insert({
            name: culture.name
        })

module.exports.update = culture =>
    knex('culture')
        .where({
            id: culture.id
        }).update({
            name: culture.name
        })

module.exports.delete = id =>
    knex('culture')
        .where({
            id: id
        }).delete()
