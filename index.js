const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
let mysql = require('mysql');
let app = express();

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456789"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("DB Connected!");
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })

}

let PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log('server is runing on port => ' + PORT)
})
