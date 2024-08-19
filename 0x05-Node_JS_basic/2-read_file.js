const fs = require('node:fs');

function countStudents(path) {
  try {
    const csvData = fs.readFileSync(path, 'utf8');
    const lines = csvData.split('\n');
    const names = [];

    for (let i = 1; i < lines.length; i += 1) {
      const line = lines[i];
      const [firstName, lastName, age, field] = line.split(',');

      names.push({
        firstName,
        lastName,
        age,
        field,
      });
    }
    const fields = [];

    for (let i = 0; i < names.length; i += 1) {
      const name = names[i];
      if (!fields.includes(name.field)) {
        fields.push(name.field);
      }
    }

    const students = {};
    for (let i = 0; i < fields.length; i += 1) {
      const field = fields[i];
      students[field] = [];

      for (let j = 0; j < names.length; j += 1) {
        if (names[j].field === field) {
          students[field].push(names[j].firstName);
        }
      }
    }

    console.log(`Number of students: ${names.length}`);

    for (const [field, student] of Object.entries(students)) {
      console.log(`Number of students in ${field}: ${student.length}. List: ${student.join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
