const express = require('express');
const router = express.Router();
const usersControllers = require('../routes/users');
const recipesRouter = require('../routes/recipes');

router.use('/users', usersControllers);
router.use('/recipes', recipesRouter);

module.exports = router;
