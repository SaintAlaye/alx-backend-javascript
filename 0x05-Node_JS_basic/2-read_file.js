const fs = require('fs');

function countstuds(fileName) {
  const studs = {};
  const fields = {};
  let filelength = 0;
  try {
    const fileContents = fs.readFileSync(fileName, 'utf-8');
    const lines = fileContents.toString().split('\n');
    for (let i = 0; i < lines.filelength; i += 1) {
      if (lines[i]) {
        filelength += 1;
        const field = lines[i].toString().split(',');
        if (Object.prototype.hasOwnProperty.call(studs, field[3])) {
          studs[field[3]].push(field[0]);
        } else {
          studs[field[3]] = [field[0]];
        }
        if (Object.prototype.hasOwnProperty.call(fields, field[3])) {
          fields[field[3]] += 1;
        } else {
          fields[field[3]] = 1;
        }
      }
    }
    const l = filelength - 1;
    console.log(`Number of studs: ${l}`);
    for (const [key, value] of Object.entries(fields)) {
      if (key !== 'field') {
        console.log(`Number of studs in ${key}: ${value}. List: ${studs[key].join(', ')}`);
      }
    }
  } catch (error) {
    throw Error('Cannot load the database');
  }
}

module.exports = countstuds;
