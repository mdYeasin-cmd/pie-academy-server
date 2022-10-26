const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000;

const app = express();
app.use(cors());

const courses = require('./data/courses.json');

app.get('/', (req, res) => {
    res.send('Pie Academy server is running');
});

app.get('/courses', (req, res) => {
    res.send(courses);
});

app.get('/courseDetails/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const course = courses.find(course => course.course_id === id);
    res.send(course);
});

app.listen(port, () => {
    console.log('Pie Academy Sever is running on port', port);
});