const http = require('http');
const fs = require('fs');

const DB_FILE = process.argv[2];

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }
    const lines = data.trim().split('\n');
    const studentLines = lines.slice(1);
    const validStudents = studentLines.filter((line) => line.trim() !== '');

    let responseText = `Number of students: ${validStudents.length}`;
    const fields = {};
    for (const student of validStudents) {
      const [firstname, , , field] = student.split(',');
      if (field) {
        if (!fields[field]) fields[field] = [];
        fields[field].push(firstname);
      }
    }
    for (const field in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, field)) {
        responseText += `\nNumber of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`;
      }
    }
    resolve(responseText);
  });
});

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(DB_FILE)
      .then((data) => res.end(data))
      .catch((err) => res.end(err.message));
  } else {
    res.end();
  }
});

app.listen(1245);

module.exports = app;