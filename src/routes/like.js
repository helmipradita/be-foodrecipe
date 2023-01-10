const express = require(`express`);
const router = express.Router();
const { likeControllers } = require(`../controllers/like`);
const upload = require('../middleware/upload');
const { protect } = require('../middleware/auth');
let multer = require('multer');
let uploaded = multer();

router.post('/:id', uploaded.array(), protect, likeControllers.add);
router.get('/', protect, likeControllers.get);
router.delete('/:id', protect, likeControllers.delete);

module.exports = router;
