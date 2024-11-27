const { readDatabase } = require('../utils');

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const database = process.argv[2];
      const fieldCounts = await readDatabase(database);

      let result = 'This is the list of our students';

      const fields = Object.keys(fieldCounts).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));

      fields.forEach((field) => {
        const names = fieldCounts[field].join(', ');
        result += `\nNumber of students in ${field}: ${fieldCounts[field].length}. List: ${names}`;
      });
      res.status(200).send(result);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const database = process.argv[2];
      const fieldCounts = await readDatabase(database);

      if (!fieldCounts[major]) {
        return res.status(500).send('Cannot load the database');
      }

      const names = fieldCounts[major].join(', ');

      return res.status(200).send(`List: ${names}`);
    } catch (error) {
      return res.status(500).send('Cannot load the database');
    }
  }
}

module.exports = StudentsController;
