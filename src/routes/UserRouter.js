const router = require('express').Router();
const UserCtrl = require('../../controllers/UserCtrl');

router.post('/login', UserCtrl.userLogin);

module.exports = router;