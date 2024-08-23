const fs = require('fs');

/**
 * Reads a CSV file containing student data, parses the data,
 * and prints it to stdout.
 * @param {string} dataPath - The path to the CSV file.
 */
const countStudents = (dataPath) => {
  try {
    // Read the file synchronously
    const data = fs.readFileSync(dataPath, 'utf-8');
    // Split the data into lines, remove empty lines
    const lines = data.trim().split('\n').filter((line) => line.trim() !== '');

    // If the file is empty or only contains the header, handle it
    if (lines.length <= 1) {
      console.log('Number of students: 0');
      return;
    }

    // Extract header and data lines
    const [header, ...studentLines] = lines;
    const fields = header.split(',');

    const studentGroups = {};
    studentLines.forEach((line) => {
      const studentData = line.split(',');

      // Extract the field from the last column of the student data
      const field = studentData[fields.length - 1];

      if (!studentGroups[field]) {
        studentGroups[field] = [];
      }

      // Add the student's first name to the appropriate group
      studentGroups[field].push(studentData[0]);
    });

    // Calculate the total number of students
    const totalStudents = studentLines.length;
    console.log(`Number of students: ${totalStudents}`);

    // Print the number of students in each field and the list of first names
    for (const [field, students] of Object.entries(studentGroups)) {
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    }
  } catch (error) {
    // Handle file reading errors
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
