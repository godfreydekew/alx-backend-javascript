const fs = require('fs');

function readDatabase(filepath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filepath, 'utf-8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        const lines = data.split('\n').filter((line) => line.trim() !== '');
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
        resolve(students);
      }
    });
  });
}

export default readDatabase;
