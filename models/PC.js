const knex = require('../knex')

module.exports.getAll = () =>
    knex('pc')
        .select('*')

module.exports.getProblemsByCultureId = culture_id =>
    knex('pc')
        .where({'culture_id': culture_id}).distinct('problem_id')

module.exports.getCulturesByProblemId = problem_id =>
    knex('pc')
        .where({'problem_id': problem_id}).distinct('culture_id')

module.exports.getCulturesWithSingleProblemById = problem_id =>
    knex.raw(`
    SELECT culture_id
    FROM pc as pc1
    WHERE EXISTS (
        SELECT *
        FROM pc as pc2
        WHERE pc1.culture_id = pc2.culture_id and pc2.problem_id = ${problem_id}
    )
    GROUP BY culture_id
    HAVING COUNT(problem_id) = 1;
    `).then(data => JSON.parse(JSON.stringify(data[0])).map(item => item.culture_id))

module.exports.create = pc =>
    knex('pc')
        .insert({
            problem_id: pc.problem_id,
            culture_id: pc.culture_id
        })

module.exports.delete = pc => 
    knex('pc')
        .where({
            problem_id: pc.problem_id,
            culture_id: pc.culture_id
        }).delete()
