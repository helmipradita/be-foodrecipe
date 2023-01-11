const express = require(`express`);
const router = express.Router();
const { commentControllers } = require(`../controllers/comment`);
const upload = require('../middleware/upload');
const { protect } = require('../middleware/auth');
let multer = require('multer');
let uploaded = multer();

router.post('/:recipe_id', uploaded.array(), protect, commentControllers.add);
router.get('/', protect, commentControllers.get);
router.get('/:recipe_id', commentControllers.getByRecipeId);
router.put('/:id', uploaded.array(), protect, commentControllers.edit);
router.delete('/:id', protect, commentControllers.delete);

module.exports = router;
