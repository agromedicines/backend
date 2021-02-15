const router = require('express').Router()
const MedicineController = require('../controllers/MedicineController')

router.get('/', MedicineController.getAll)
router.get('/category/:category_id', MedicineController.getByCategoryId)
router.post('/', MedicineController.create)
router.put('/', MedicineController.update)
router.delete('/', MedicineController.delete)

module.exports = router