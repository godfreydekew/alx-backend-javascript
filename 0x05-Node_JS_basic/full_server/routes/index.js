import express from 'express';
import StudentsController from '../controllers/StudentsController';
import AppController from '../controllers/AppController';

const app = express();

app.get('/', (req, res) => {
  AppController.getHomepage(req, res);
});

app.get('/students', (req, res) => {
  StudentsController.getAllStudents(req, res);
});

app.get('/students/:major', (req, res) => {
  StudentsController.getAllStudentsByMajor(req, res);
});

export default app;
