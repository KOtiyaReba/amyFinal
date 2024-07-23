// const express = require('express');
// const router = express.Router();
// const usersController = require('../end routes/users-controller');

// router.post('/signup', usersController.signup);
// router.post('/login', usersController.login);
// router.get('/:id', usersController.getUserById);
// router.put('/:id', usersController.updateUser);

// module.exports = router;
const express = require('express');
const router = express.Router();
const usersController = require('../end routes/users-controller');

router.post('/signup', usersController.signup);
router.post('/login', usersController.login);
router.get('/:id', usersController.getUserById);
router.put('/:id', usersController.updateUser);

module.exports = router;

