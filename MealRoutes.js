const { Router } = require('express');
const { getMeal, saveMeal, deleteMeal, editMeal } = require('./MealController');

const router = Router();

router.get('/', getMeal);
router.post('/saveMeal', saveMeal);
router.post('/deleteMeal', deleteMeal);
router.put('/editMeal', editMeal);


module.exports = router;
