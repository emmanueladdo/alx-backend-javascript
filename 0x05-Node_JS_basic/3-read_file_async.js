/**
 * Script that Reads
 * a file asynchronously with Node JS
 */

const fs = require('fs');

const countStudents = (path) => {
  const promiseExecutor = (resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (!err) {
        const printOut = [];
        const lines = data.toString().split('\n');
        const studentsData = lines.filter((line) => line).map((line) => line.split(','));

        printOut.push(`Number of students: ${studentsData.length - 1}`);

        const fields = {};
        for (let i = 1; i < studentsData.length; i += 1) {
          const student = studentsData[i];
          const fieldName = student[3];

          if (!fields[fieldName]) {
            fields[fieldName] = [];
          }

          fields[fieldName].push(student[0]);
        }

        delete fields.field;

        for (const key of Object.keys(fields)) {
          printOut.push(`Number of students in ${key}: ${fields[key].length}. List: ${fields[key].join(', ')}`);
        }

        resolve(printOut);
      } else {
        reject(new Error('Cannot load the database'));
      }
    });
  };

  return new Promise(promiseExecutor);
};

module.exports = countStudents;
