const express = require('express');
const router = express.Router();
const tokenMiddleware = require('./middlewares/token-middleware');
const roleAuthMiddleware = require('./middlewares/role-auth-middleware');
const createController = require('./controllers/create-controller');
const listController = require('./controllers/list-controller');
const findController = require('./controllers/find-controller');
const updateController = require('./controllers/update-controller');
const deleteController = require('./controllers/delete-controller');
const authenticateController = require('./controllers/authenticate-controller');

router.post('/create', createController);
router.get('/retrieve/list', tokenMiddleware, roleAuthMiddleware(['admin']), listController);
router.get('/retrieve/item/:username', tokenMiddleware, roleAuthMiddleware(['admin']), findController);
router.post('/update', tokenMiddleware, roleAuthMiddleware(['admin']), updateController);
router.delete('/delete/:username', tokenMiddleware, roleAuthMiddleware(['admin']), deleteController);
router.post('/authenticate', authenticateController);

module.exports = app => app.use('/user', router);