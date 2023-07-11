

const { Router } = require('express');

const { drinkController } = require('../controllers/Drink.controller');


const router = Router()


router.get('/drink',drinkController.getDrink)
router.post('/drink',drinkController.createDrink)
router.get('/drink/instock', drinkController.getDrinkInstock)
router.get('/drink/:id', drinkController.getDrinkId)
router.delete('/drink/:id', drinkController.deleteDrink)
router.patch('/drink/:id',drinkController.patchDrinkId)

module.exports = router