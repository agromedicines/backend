const router = require('express').Router()
const CultureController = require('../controllers/CultureController')

router.get('/', CultureController.getAll)
router.post('/', CultureController.create)
router.put('/', CultureController.update)
router.delete('/', CultureController.delete)

module.exports = router