const express = require('express');

const createUser = require('../controllers/user-control/newUser');
const loginUser = require('../controllers/user-control/login');
const logoutUser = require('../controllers/user-control/logout');
const getUser = require('../controllers/user-control/getAllUsers');
const getUserByID = require('../controllers/user-control/getUserById');


const router = express.Router();

router.post('/', createUser);
router.post('/login', loginUser);
router.patch('/logout/:uid', logoutUser);
router.get('/', getUser);
router.get('/:uid', getUserByID);

module.exports = router;