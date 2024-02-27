const fs = require('fs');

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const lines = data.split('\n');
      lines.shift();

      const fields = {};
      lines.forEach((line) => {
        if (line !== '') {
          const celles = line.split(',');
          if (fields[celles[3]]) {
            fields[celles[3]].push(celles[0]);
          } else {
            fields[celles[3]] = [celles[0]];
          }
        }
      });
      resolve(fields);
    });
  });
}

module.exports = readDatabase;
