const readDatabase = require('../utils');

const dbFile = process.argv.length > 2 ? process.argv[2] : '';

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(dbFile)
      .then((fields) => {
        let responseText = 'This is the list of our students\n';
        response.statusCode = 200;
        for (const field in fields) {
          if (Object.hasOwnProperty.call(fields, field)) {
            responseText += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
          }
        }
        response.send(responseText.slice(0, -1));
      })
      .catch((error) => {
        const responseText = error instanceof Error ? error.message : error.toString();
        response.statusCode = 500;
        response.send(responseText);
      });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;

    if (major !== 'CS' && major !== 'SWE') {
      response.statusCode = 500;
      response.send('Major parameter must be CS or SWE');
    }
    readDatabase(dbFile)
      .then((fields) => {
        response.statusCode = 200;
        response.send(`List: ${fields[major].join(', ')}`);
      })
      .catch((error) => {
        const responseText = error instanceof Error ? error.message : error.toString();
        response.statusCode = 500;
        response.send(responseText);
      });
  }
}

module.exports = StudentsController;
