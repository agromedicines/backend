const Culture = require('../models/Culture')
const Treatment = require('../models/Treatment')

exports.getAll = (req, res) => {
    Culture.getAll().then(data => {
        res.json(data)
    })
}

exports.create = (req, res) => {
    Culture.create({
        name: req.body.name
    }).then(data => {
        res.json(data)
    })
}

exports.update = (req, res) => {
    Culture.update({
        id: req.body.id,
        name: req.body.name
    }).then(data => {
        res.json({"status": "updated"})
    })
}

exports.delete = (req, res) => {
    const culture_id = Number(req.headers.id)

    Treatment.getAll().then(treatments_data => {
        const treatments = treatments_data.map(treatment => (
            {
                ...treatment, 
                problems: JSON.parse(treatment.problems),
                cultures: JSON.parse(treatment.cultures)
            }))
        
        let treatmentsToUpdate = treatments.filter(({cultures}) => cultures.includes(culture_id))

        const treatmentsToDelete = treatmentsToUpdate.filter(({cultures}) => cultures.length === 1)
        treatmentsToUpdate = treatmentsToUpdate.filter(({cultures}) => cultures.length !== 1)

        if (treatmentsToDelete.length) {
            Promise.all(treatmentsToDelete.map(({id}) => Treatment.delete(id)))
        }

        if (treatmentsToUpdate.length) {
            Promise.all(treatmentsToUpdate.map(({id, medicine_id, problems, cultures}) => {
                const newCultures= cultures.slice()
                newCultures.splice(newCultures.indexOf(culture_id), 1)

                return Treatment.update({
                    id: id,
                    medicine_id: medicine_id,
                    problems: JSON.stringify(problems),
                    cultures: JSON.stringify(newCultures)
                })
            }))
        }

        Culture.delete(req.headers.id).then(data => {
            res.send('ok')
        })
    })
}