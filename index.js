var express = require('express')
var cors = require('cors')

var port = 80
var app = express()

app.use(cors())
app.use('/', function (req, res) {
    res.send('Hello world')
    res.status(200)
    res.end()
})

app.listen(port, function () {
    console.log('Server started on')
})
