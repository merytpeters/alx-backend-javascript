const fs = require('fs').promises;

async function readDatabase(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
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

    const fieldCounts = rows.reduce((acc, row) => {
      const values = row.split(',');
      const firstname = values[firstnameIndex].trim();
      const field = values[fieldIndex].trim();

      if (!acc[field]) {
        acc[field] = [];
      }

      acc[field].push(firstname);
      return acc;
    }, {});

    return fieldCounts;
  } catch (error) {
    return Promise.reject(new Error(`Cannot load the database: ${error.message}`));
  }
}

module.exports = { readDatabase };
