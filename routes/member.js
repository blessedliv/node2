const express = require('express');
const router = express.Router();

router.get('/join', (req, res, next)=>{
    res.send(`<h1>SIGN UP</h1>`);
});
router.get(['/', '/login'], (req, res, next)=>{
    res.send(`<h1>LOG IN</h1>`);
});

module.exports = router;