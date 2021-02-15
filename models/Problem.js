const knex = require('../knex')

module.exports.getAll = () =>
    knex('problem')
        .select('*')

module.exports.getByCategoryId = category_id =>
    knex('problem')
        .where({
            category_id: category_id
        })
        .select('id', 'name')

module.exports.create = problem =>
    knex('problem')
        .insert({
            name: problem.name,
            category_id: problem.category_id
        })

module.exports.update = problem =>
    knex('problem')
        .where({
            id: problem.id
        })
        .update({
            name: problem.name,
            category_id: problem.category_id
        })

module.exports.delete = id =>
    knex('problem')
        .where({
            id: id
        }).delete()
        