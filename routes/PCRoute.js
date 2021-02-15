const router = require('express').Router()
const PCController = require('../controllers/PCController')

router.get('/', PCController.getAll)
router.get('/problem/:culture_id', PCController.getProblemsByCultureId)
router.get('/culture/:problem_id', PCController.getCulturesByProblemId)
router.get('/culture/single/:problem_id', PCController.getCulturesWithSingleProblemById)
router.post('/', PCController.create)
router.delete('/', PCController.delete)

module.exports = router