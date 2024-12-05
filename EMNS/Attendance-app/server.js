const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'your_password',
    database: 'attendance_db'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to database');
});

// API to fetch students by course ID
app.get('/students/:course_id', (req, res) => {
    const courseId = req.params.course_id;
    const sql = 'SELECT student_id, student_name FROM students WHERE course_id = ?';
    db.query(sql, [courseId], (err, results) => {
        if (err) {
            res.status(500).send('Error fetching students');
        } else {
            res.json(results);
        }
    });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
