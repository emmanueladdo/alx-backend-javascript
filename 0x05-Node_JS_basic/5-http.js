/**
 * Script create small HTT
 */

const http = require('http');
const fs = require('fs');

// Function to count students from a file
function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: 'utf-8' }, (err, data) => {
      if (err) {
        return reject(Error('Cannot load the database'));
      }

      // Split data into lines and exclude header
      const lines = data.split('\n').slice(1, -1);

      // Extract header
      const header = data.split('\n')[0].split(',');

      // Find indexes for 'firstname' and 'field'
      const firstNameIndex = header.findIndex((ele) => ele === 'firstname');
      const fieldIndex = header.findIndex((ele) => ele === 'field');

      // Initialize dictionaries to count fields and store student lists
      const fieldCounts = {};
      const studentsByField = {};

      lines.forEach((line) => {
        const fields = line.split(',');
        const fieldName = fields[fieldIndex];

        // Count students for each field
        if (!fieldCounts[fieldName]) {
          fieldCounts[fieldName] = 0;
        }
        fieldCounts[fieldName] += 1;

        // Store student names for each field
        if (!studentsByField[fieldName]) {
          studentsByField[fieldName] = '';
        }
        studentsByField[fieldName] += studentsByField[fieldName]
          ? `, ${fields[firstNameIndex]}`
          : fields[firstNameIndex];
      });

      // Prepare data for resolve
      const result = {
        numberStudents: `Number of students: ${lines.length}\n`,
        listStudents: [],
      };

      for (const key in fieldCounts) {
        if (Object.hasOwnProperty.call(fieldCounts, key)) {
          const count = fieldCounts[key];
          result.listStudents.push(`Number of students in ${key}: ${count}. List: ${studentsByField[key]}`);
        }
      }

      // Add a return statement here
      return resolve(result);
    });
  });
}

// App setup
const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  }

  if (req.url === '/students') {
    res.write('This is the list of our students\n');

    // Count students and send response
    countStudents(process.argv[2])
      .then((data) => {
        res.write(data.numberStudents);
        res.write(data.listStudents.join('\n'));
        res.end();
      })
      .catch((err) => {
        res.end(err.message);
      });
  }
});

app.listen(port, hostname);

module.exports = app;
