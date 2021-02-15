const Problem = require('../models/Problem')
const { getCulturesWithSingleProblemById } = require('../models/PC')
const Culture = require('../models/Culture')
const Treatment = require('../models/Treatment')

exports.getAll = (req, res) => {
    Problem.getAll().then(data => {
        res.json(data)
    })
}

exports.getByCategoryId = (req, res) => {
    Problem.getByCategoryId(req.params.category_id).then(data => {
        res.json(data)
    })
}

exports.create = (req, res) => {
    Problem.create({
        name: req.body.name,
        category_id: req.body.category_id
    }).then(data => {
        res.json({"status": "created"})
    })
}

exports.update = (req, res) => {
    Problem.update({
        id: req.body.id,
        name: req.body.name,
        category_id: req.body.category_id
    }).then(data => {
        res.json({"status": "updated"})
    })
}

exports.delete = (req, res) => {
    const problem_id = Number(req.headers.id)
    getCulturesWithSingleProblemById(problem_id).then(cultures_id => {

            Promise.all(cultures_id.map(culture_id => Culture.delete(culture_id)))

            Treatment.getAll().then(treatments_data => {
                const treatments = treatments_data.map(treatment => (
                    {
                        ...treatment, 
                        problems: JSON.parse(treatment.problems),
                        cultures: JSON.parse(treatment.cultures)
                    }))

                let treatmentToUpdate = treatments.filter(({problems, cultures}) => {
                    return problems.includes(problem_id)
                })

                const treatmentToDelete = treatmentToUpdate.filter(({problems}) => problems.length === 1)
                treatmentToUpdate = treatmentToUpdate.filter(({problems}) => problems.length !== 1)

                if (treatmentToUpdate.length) {
                    Promise.all(treatmentToUpdate.map(({id, medicine_id, cultures, problems}) => {
                        const newProblems = problems.slice()

                        newProblems.splice(newProblems.indexOf(problem_id), 1)

                        return Treatment.update({
                            id: id,
                            medicine_id: medicine_id,
                            cultures: JSON.stringify(cultures),
                            problems: JSON.stringify(newProblems)
                        })
                    }))
                }

                if (treatmentToDelete.length) {
                    Promise.all(treatmentToDelete.map(({id}) => Treatment.delete(id)))
                }
            })

        Problem.delete(problem_id).then(data => {
            res.send('ok')
        })
    })

}