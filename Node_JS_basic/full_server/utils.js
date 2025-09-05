import fs from 'fs';

const readDatabase = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }
    const lines = data.trim().split('\n').slice(1).filter((line) => line);
    const fields = {};
    for (const line of lines) {
      const [firstname, , , field] = line.split(',');
      if (field) {
        if (!fields[field]) fields[field] = [];
        fields[field].push(firstname);
      }
    }
    resolve(fields);
  });
});

export default readDatabase;
