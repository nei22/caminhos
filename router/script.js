const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.sendFile(`${__dirname}/public/index.html`)
})

router.get('/teste', (req, res) => {
    res.sendFile(`${__dirname}/public/teste.html`)
})

module.exports = router