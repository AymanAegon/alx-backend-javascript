const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const lines = data.split('\n');
      lines.shift();

      let studentsNumber = 0;
      const fields = {};
      lines.forEach((line) => {
        if (line !== '') {
        studentsNumber += 1;
        const celles = line.split(',');
        if (fields[celles[3]]) {
            fields[celles[3]].push(celles[0]);
        } else {
            fields[celles[3]] = [celles[0]];
        }
        }
      });
      console.log(`Number of students: ${studentsNumber}`);
      for (const field in fields) {
        if (Object.hasOwnProperty.call(fields, field)) {
        console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
        }
      }
      resolve();
    });
  });
  
}

module.exports = countStudents;
