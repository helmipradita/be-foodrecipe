const express = require('express');
const router = express.Router();
const usersControllers = require('../routes/users');
const recipesRouter = require('../routes/recipes');
const likeRouter = require('../routes/like');
const saveRouter = require('../routes/save');
const commentRouter = require('../routes/comment');

router.use('/users', usersControllers);
router.use('/recipes', recipesRouter);
router.use('/like', likeRouter);
router.use('/save', saveRouter);
router.use('/comment', commentRouter);

module.exports = router;
