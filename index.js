const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
let mysql = require('mysql');
let app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

let PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log('server is runing on port => ' + PORT)
})
