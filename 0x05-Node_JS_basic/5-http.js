const http = require('http');
const fs = require('fs');

const hostname = 'localhost';
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

const app = http.createServer((req, res) => {
  const path = req.url;
  let responseText = '';

  if (path === '/') {
    responseText = 'Hello Holberton School!';
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Length', responseText.length);
    res.end(responseText);
  } else if (path === '/students') {
    responseText = 'This is the list of our students\n';
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    countStudents(dbFile)
      .then((msg) => {
        responseText += msg;
        res.setHeader('Content-Length', responseText.length);
        res.end(responseText);
      })
      .catch((error) => {
        console.log(error);
        res.end(responseText.slice(0, -1));
      });
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
