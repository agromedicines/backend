const router = require('express').Router()
const TreatmentController = require('../controllers/TreatmentController')

router.get('/', TreatmentController.getAll)
router.post('/', TreatmentController.create)
router.put('/', TreatmentController.update)
router.delete('/', TreatmentController.delete)

module.exports = router