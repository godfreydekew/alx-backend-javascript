const fs = require('fs');

async function countStudents(path) {
  try {
    // Read the CSV file's content as a string
    const csvData = await fs.promises.readFile(path, 'utf-8');

    // Split the CSV data into an array of lines
    const lines = csvData.split('\n').filter((line) => line.trim() !== '');
    const names = [];
    // Skip the header line (assuming the first line is a header)
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

    let result = `Number of students: ${names.length}\n`;

    for (const [field, student] of Object.entries(students)) {
      result += `Number of students in ${field}: ${student.length}. List: ${student.join(', ')}\n`;
    }

    console.log(result.trim());
    return result.trim();
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
