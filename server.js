
const express = require('express')
const router = require('./src/routes/routes')
var bodyParser = require('body-parser')
const cors = require('cors');

const app = express()
const port = 3000
 app.use(cors())
app.use(bodyParser.json())
app.use(router)
app.listen(port, () => {
    console.log(`LOGIN AD API RUNING ON PORT: ${port}`)
  })