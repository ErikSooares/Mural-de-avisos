const express = require('express')
const path = require('path')
const apiRouter = require('./routes/api')

const app = express()
const port = 3000;

app.use('/api', apiRouter)
app.use('/', express.static(path.join(__dirname, 'public')))

app.listen(port, () => {
    console.log(`Server runnig on port: ${port}`)
})

