const express = require('express')
const path = require('path')

const app = express()
const port = 3000

// TODO For best results use a reverse proxy cache to improve performance
app.use('/static', express.static(path.join(__dirname, 'html')))
app.use('/static', express.static(path.join(__dirname, '../build')))
app.get('/', (req, res) =>  res.sendFile(path.join(__dirname, 'html/main.html')))
app.listen(port, () => console.log(`App listening on port ${port}`))
