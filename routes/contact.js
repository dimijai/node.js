const path = require('path');
const express = require('express');
const rootDir = require('../util/path')
const router = express.Router();

// /contact/contact => GET
router.get('/contact', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'view', 'contact.html'));
});

// /contact/contact => POST
router.post('/contact', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;