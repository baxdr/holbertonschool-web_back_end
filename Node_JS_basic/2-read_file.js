const fs = require('fs');

const countStudents = (path) => {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter((line) => line);
    
    if (lines.length === 0) {
      console.log('Number of students: 0');
      return;
    }

    const students = lines.slice(1);
    console.log(`Number of students: ${students.length}`);
    
    const fields = {};
    for (const student of students) {
      const studentData = student.split(',');
      const field = studentData[3];
      const firstname = studentData[0];

      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    }
    
    for (const field in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, field)) {
        const list = fields[field].join(', ');
        console.log(`Number of students in ${field}: ${fields[field].length}. List: ${list}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
