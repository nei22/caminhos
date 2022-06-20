const express = require('express')
const app = express()
const port = 3000


const router = require('./router/script.js')
app.use(router)

app.listen(port, () => {
    console.log(`listening in http://localhost:${port}` );
})