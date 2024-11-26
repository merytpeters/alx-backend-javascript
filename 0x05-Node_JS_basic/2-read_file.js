const fs = require('fs');

function countStudents(fileName) {
  if (!fileName) {
    throw new Error('Cannot load the database');
  }
  try {
    if (!fs.existsSync(fileName)) {
      throw new Error('Cannot load the database');
    }

    const data = fs.readFileSync(fileName, 'utf8').trim();
    const lines = data.split('\n');

    if (lines.length < 2) {
      console.log('No data available in the file');
      return;
    }

    const header = lines[0].split(',');
    const rows = lines.slice(1);

    const fieldIndex = header.indexOf('field');
    const firstnameIndex = header.indexOf('firstname');
    if (fieldIndex === -1 || firstnameIndex === -1) {
      console.log('The file is missing required fields');
      return;
    }

    const students = rows.map((line) => {
      const values = line.split(',');
      return {
        firstname: values[firstnameIndex].trim(),
        field: values[fieldIndex].trim(),
      };
    });

    const totalStudents = students.length;
    console.log(`Number of students: ${totalStudents}`);

    const fieldCounts = students.reduce((acc, student) => {
      const { field } = student;
      if (!acc[field]) acc[field] = [];
      acc[field].push(student.firstname);
      return acc;
    }, {});

    for (const [field, names] of Object.entries(fieldCounts)) {
      console.log(
        `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`,
      );
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
