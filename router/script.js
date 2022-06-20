const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.sendFile(`${__dirname}/public/index.html`)
})

router.post('/teste', (req, res) => {
    res.sendFile(`${__dirname}/public/main.html`).then(()=>{
        res.redirect('/redir')
    })
})

router.get('/redir', (req, res) => {
    res.sendFile(`${__dirname}/public/main.html`)
})

module.exports = router