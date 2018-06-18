const express = require('express');
const router = express.Router();
const tokenMiddleware = require('./middlewares/token-middleware');
const createController = require('./controllers/create-controller');
const listController = require('./controllers/list-controller');
const findController = require('./controllers/find-controller');
const updateController = require('./controllers/update-controller');
const deleteController = require('./controllers/delete-controller');
const authenticateController = require('./controllers/authenticate-controller');

// Route: Create
router.post('/create', async (req, res) => {
    await createController(req, res);
});

// Route: Retrieve List
router.get('/retrieve/list', tokenMiddleware, async (req, res) => {
    await listController(req, res);
});

// Route: Retrieve Item
router.get('/retrieve/item/:username', tokenMiddleware, async (req, res) => {
    await findController(req, res);
});

// Route: Update
router.post('/update', tokenMiddleware, async (req, res) => {
    await updateController(req, res);
});

// Route: Delete
router.delete('/delete/:username', tokenMiddleware, async (req, res) => {
    await deleteController(req, res);
});

// Route: Authenticate
router.post('/authenticate', async (req, res) => {
    await authenticateController(req, res);
});

module.exports = app => app.use('/user', router);