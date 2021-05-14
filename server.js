const express = require('express');
const mysql = require('mysql');

const app = express();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'arthur',
    password: 'stinky',
    database: 'workout'
});

db.connect();

app.get('/exercises', (req, res) => {
    const sql = 'SELECT * FROM exercises';

    db.query(sql, (err, result) => {
       if (err) throw err;
       res.send(result);
    });
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
