const router = require('express').Router()

router.get('/', (req, res) => {
    res.send('Server is working very well :)')
})

module.exports.root = router

module.exports.category = require('./CategoryRoute')
module.exports.problem = require('./ProblemRoute')
module.exports.culture = require('./CultureRoute')
module.exports.pc = require('./PCRoute')
module.exports.medicine = require('./MedicineRoute')
module.exports.treatment = require('./TreatmentRoute')