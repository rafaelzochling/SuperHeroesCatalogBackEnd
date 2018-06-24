const express = require('express');
const router = express.Router();
const tokenMiddleware = require('../middlewares/token-middleware');
const roleAuthMiddleware = require('../middlewares/role-auth-middleware');
const createController = require('./controllers/create-controller');
const listController = require('./controllers/list-controller');
const findController = require('./controllers/find-controller');
const updateController = require('./controllers/update-controller');
const deleteController = require('./controllers/delete-controller');

router.post('/create', tokenMiddleware, roleAuthMiddleware(['admin']), createController);
router.get('/retrieve/list', tokenMiddleware, roleAuthMiddleware(['admin', 'standard']), listController);
router.get('/retrieve/item/:powername', tokenMiddleware, roleAuthMiddleware(['admin']), findController);
router.post('/update', tokenMiddleware, roleAuthMiddleware(['admin']), updateController);
router.delete('/delete/:powername', tokenMiddleware, roleAuthMiddleware(['admin']), deleteController);

module.exports = app => app.use('/powers', router);