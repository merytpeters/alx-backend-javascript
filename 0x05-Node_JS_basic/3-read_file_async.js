const fs = require('fs').promises;

async function countStudents(fileName) {
  if (!fileName) {
    throw new Error('Cannot load the database');
  }
  try {
    const data = await fs.readFile(fileName, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    if (lines.length < 2) {
      return 'No data available in the file';
    }

    const header = lines[0].split(',');
    const rows = lines.slice(1);

    const fieldIndex = header.indexOf('field');
    const firstnameIndex = header.indexOf('firstname');
    if (fieldIndex === -1 || firstnameIndex === -1) {
      return 'The file is missing required fields';
    }

    const students = rows.map((line) => {
      const values = line.split(',');
      return {
        firstname: values[firstnameIndex].trim(),
        field: values[fieldIndex].trim(),
      };
    });

    const totalStudents = students.length;
    let result = `Number of students: ${totalStudents}`.trim();

    const fieldCounts = students.reduce((acc, student) => {
      const { field } = student;
      if (!acc[field]) acc[field] = [];
      acc[field].push(student.firstname);
      return acc;
    }, {});

    for (const [field, names] of Object.entries(fieldCounts)) {
      result += `\nNumber of students in ${field}: ${names.length}. List: ${names.join(', ')}`;
    }
    console.log(result);
    return result;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
