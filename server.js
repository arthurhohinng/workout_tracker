const express = require('express');
const mysql = require('mysql');

const app = express();
app.use(express.urlencoded());
app.use(express.json());

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

app.post('/exercises/delete/:id', (req, res) => {
    const sql = `DELETE FROM exercises WHERE id = ${req.params.id}`;

    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

app.post('/exercises/add', (req, res) => {
    const sql = `INSERT INTO exercises (exercise, sets, reps) values ("${req.body.text}", ${req.body.set}, ${req.body.rep})`;

    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
