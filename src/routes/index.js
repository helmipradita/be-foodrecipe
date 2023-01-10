const express = require('express');
const router = express.Router();
const usersControllers = require('../routes/users');
const recipesRouter = require('../routes/recipes');
const likeRouter = require('../routes/like');

router.use('/users', usersControllers);
router.use('/recipes', recipesRouter);
router.use('/like', likeRouter);

module.exports = router;
