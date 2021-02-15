const knex = require('../knex')

module.exports.getAll = () =>
    knex('treatment')
        .join('medicine','medicine.id','=','treatment.medicine_id')
        .join('category','category.id','=','medicine.category_id')
        .select(
            'treatment.id',
            'treatment.medicine_id',
            'medicine.name as medicine_name',
            'category.id as category_id',
            'category.name as category_name',
            'treatment.problems',
            'treatment.cultures'
        )

module.exports.create = treatment => 
    knex('treatment')
        .insert({
            medicine_id: treatment.medicine_id,
            cultures: treatment.cultures,
            problems: treatment.problems
        })
    
module.exports.update = treatment =>
    knex('treatment')
        .where({
            id: treatment.id
        }).update({
            medicine_id: treatment.medicine_id,
            cultures: treatment.cultures,
            problems: treatment.problems
        })
    
module.exports.delete = id =>
    knex('treatment')
        .where({
            id: id
        }).delete()

