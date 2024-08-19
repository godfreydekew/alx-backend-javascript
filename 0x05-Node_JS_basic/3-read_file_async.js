const fs = require('fs');
async function processCSV(path) {
    try {
      // Read the CSV file's content as a string
      const csvData = await fs.promises.readFile(path, 'utf-8');
  
      // Split the CSV data into an array of lines
      const lines = csvData.split('\n');
      const names = [];
      // Skip the header line (assuming the first line is a header)
      for (let i = 1; i < lines.length; i++) {
        const line = lines[i];
        const [firstName, lastName, age, field] = line.split(',');

        names.push({
            "firstName" : firstName,
            "lastName" : lastName,
            "age" : age,
            "field" : field,
        })
      }  
      let fields = [];

      for (let i = 0; i < names.length; i++) {
        const name = names[i];
        if (!fields.includes(name.field)) {
          fields.push(name.field);
        }
      }
      
      let students = {};
      for (let i = 0; i < fields.length; i++) {
        const field = fields[i];
        students[field] = []; 
      
        for (let j = 0; j < names.length; j++) {
          if (names[j].field === field) {
            students[field].push(names[j].firstName); 
          }
        }
      }
      
      console.log(`Number of students: ${names.length}`);
      
      for (const [field, student] of Object.entries(students)) {
        console.log(`Number of students in ${field}: ${student.length}. List: ${student.join(', ')}`);
      }
    } catch (error) {
        throw new Error("Cannot load the database");
    }
  }
  
module.exports = processCSV;