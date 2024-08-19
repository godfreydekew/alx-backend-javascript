const fs = require('fs');

function countStudents(path) {
  try {
    // Read the file synchronously
    const csvData = fs.readFileSync(path, 'utf8');

    // Split the content by newlines and filter out empty lines
    const lines = csvData.split('\n').filter((line) => line.trim() !== '');

    if (lines.length <= 1) {
      throw new Error('No valid student records found in the database');
    }

    const names = [];
    for (let i = 1; i < lines.length; i += 1) {
      const line = lines[i];
      const [firstName, lastName, age, field] = line.split(',');

      // Ensure all fields are present
      if (firstName && lastName && age && field) {
        names.push({
          firstName,
          lastName,
          age,
          field,
        });
      }
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
