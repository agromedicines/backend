const router = require('express').Router()
const ProblemController = require('../controllers/ProblemController')

router.get('/', ProblemController.getAll)
router.get('/:category_id', ProblemController.getByCategoryId)
router.post('/', ProblemController.create)
router.put('/', ProblemController.update)
router.delete('/', ProblemController.delete)

module.exports = router