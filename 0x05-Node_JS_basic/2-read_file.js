const fs = require('fs');

function countStudents(path) {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      throw new Error('Cannot load the database');
    }

    const lines = data.split('\n');
    lines.shift();

    process.stdout.write(`Number of students: ${lines.length}\n`);
    const fields = {};
    lines.forEach((line) => {
      const celles = line.split(',');
      if (fields[celles[3]]) {
        fields[celles[3]].push(celles[0]);
      } else {
        fields[celles[3]] = [celles[0]];
      }
    });
    for (const field in fields) {
      if (Object.hasOwnProperty.call(fields, field)) {
        process.stdout.write(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`);
      }
    }
  });
}

module.exports = countStudents;
