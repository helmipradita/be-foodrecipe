const express = require(`express`);
const router = express.Router();
const { saveControllers } = require(`../controllers/save`);
const upload = require('../middleware/upload');
const { protect } = require('../middleware/auth');
let multer = require('multer');
let uploaded = multer();

router.post('/:id', uploaded.array(), protect, saveControllers.add);
router.get('/', protect, saveControllers.get);
router.delete('/:id', protect, saveControllers.delete);

module.exports = router;
