const express = require('express');
const router = express.Router();

let bookList = [];


router.get('/', (req, res) => {
    res.send(bookList);
});


router.post('/', (req, res) => {
    bookList.push(req.body);
    res.sendStatus(200);
});

module.exports = router;
