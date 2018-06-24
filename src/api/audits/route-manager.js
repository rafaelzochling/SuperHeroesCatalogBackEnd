const express = require('express');
const router = express.Router();
const tokenMiddleware = require('../middlewares/token-middleware');
const roleAuthMiddleware = require('../middlewares/role-auth-middleware');
const listController = require('./controllers/list-controller');

router.get('/retrieve/list/:offset/:limit', tokenMiddleware, roleAuthMiddleware(['admin', 'standard']), listController);

module.exports = app => app.use('/audits', router);