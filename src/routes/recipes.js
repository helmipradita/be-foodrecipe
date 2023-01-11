const express = require(`express`);
const router = express.Router();
const { recipesControllers } = require(`../controllers/recipes`);
const upload = require('../middleware/upload');
const { protect } = require('../middleware/auth');

router.get('/all', recipesControllers.getAllRecipes);

router.post('/', upload.single('photo'), protect, recipesControllers.add);
router.get('/', protect, recipesControllers.getMyRecipe);
router.get('/:id', recipesControllers.detailById);
router.put('/:id', upload.single('photo'), recipesControllers.edit);
router.delete('/:id', protect, recipesControllers.delete);

module.exports = router;
