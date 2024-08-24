import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase('database.csv')
      .then((students) => {
        const sortedStudents = Object.keys(students).sort().reduce((acc, key) => {
          acc[key] = students[key];
          return acc;
        }, {});
        let result = 'This is the list of our students';
        for (const [field, student] of Object.entries(sortedStudents)) {
          result += `\nNumber of students in ${field}: ${student.length}. List: ${student.join(', ')}`;
        }

        console.log(result);
        response.status(200).send(result);
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    if (!['CS', 'SWE'].includes(request.params.major)) {
      response.status(500).send('Major parameter must be CS or SWE');
    } else {
      readDatabase('database.csv')
        .then((students) => {
          const studentsByMajor = students[request.params.major].sort();
          response.status(200).send(`List: ${studentsByMajor.join(', ')}`);
        });
    }
  }
}

export default StudentsController;
