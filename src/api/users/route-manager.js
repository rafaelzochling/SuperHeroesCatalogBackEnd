const express = require('express');
const router = express.Router();

// Route: Create
router.post('/create', async (req, res) => {
    await res.status(200).send('/create');
});

// Route: Retrieve List
router.get('/retrieve/list', async (req, res) => {
    await res.status(200).send('/list');
});

// Route: Retrieve Item
router.get('/retrieve/item/:username', async (req, res) => {
    await res.status(200).send('/item');
});

// Route: Update
router.post('/update', async (req, res) => {
    await res.status(200).send('/update');
});

// Route: Delete
router.delete('/delete/:username', async (req, res) => {
    await res.status(200).send('/delete');
});

// Route: Authenticate
router.post('/authenticate', async (req, res) => {
    await res.status(200).send('/authenticate');
});

module.exports = app => app.use('/user', router);