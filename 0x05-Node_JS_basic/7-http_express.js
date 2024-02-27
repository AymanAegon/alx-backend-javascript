const express = require('express');
const fs = require('fs');

const app = express();
const port = 1245;
const dbFile = process.argv.length > 2 ? process.argv[2] : '';

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

      let msg = `Number of students: ${studentsNumber}\n`;
      for (const field in fields) {
        if (Object.hasOwnProperty.call(fields, field)) {
          msg += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
        }
      }
      resolve(msg.slice(0, -1));
    });
  });
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  let responseText = 'This is the list of our students';
  countStudents(dbFile)
    .then((msg) => {
      responseText += msg;
      res.send(responseText);
    })
    .catch((error) => {
      responseText += error instanceof Error ? error.message : error.toString();
      res.send(responseText);
    });
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});

module.exports = app;
