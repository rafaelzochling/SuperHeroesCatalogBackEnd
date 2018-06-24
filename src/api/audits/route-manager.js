const express = require('express');
const router = express.Router();
const tokenMiddleware = require('../middlewares/token-middleware');
const roleAuthMiddleware = require('../middlewares/role-auth-middleware');
const listController = require('./controllers/list-controller');

router.get('/retrieve/list', tokenMiddleware, roleAuthMiddleware(['admin']), listController);

module.exports = app => app.use('/audits', router);