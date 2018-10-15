/* eslint-disable */
const express = require('express')
const app = express()
app.use(express.static(__dirname + '/dist'))
app.get('/', function(req, res) {
    res.sendFile('./dist/index.html')
})

app.listen(3000)
console.log("http://localhost:3000/")
console.log("http://127.0.0.1:3000/")