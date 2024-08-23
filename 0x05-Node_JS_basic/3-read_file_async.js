const fs = require('fs');

/**
 * Reads a CSV file asynchronously, processes student data,
 * and logs the total number of students and the number in each field.
 *
 * @param {string} dbPath - The path to the CSV file containing student data.
 * @returns {Promise} - when the data is processed, or rejects if there's an error.
 */
function countStudents(dbPath) {
  return new Promise((resolve, reject) => {
    fs.readFile(dbPath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const students = data.split('\n').filter((line) => line.trim() !== '');
      const studentData = students.slice(1); // Skip header row
      const courses = new Map();

      // Process student data
      studentData.forEach((student) => {
        const studentDetails = student.split(',');
        const firstName = studentDetails[0];
        const field = studentDetails[3];

        if (courses.has(field)) {
          courses.get(field).students.push(firstName);
          courses.get(field).count += 1;
        } else {
          courses.set(field, { students: [firstName], count: 1 });
        }
      });

      // Log the total number of students
      console.log(`Number of students: ${studentData.length}`);

      // Log the number of students in each field and their names
      courses.forEach((courseData, course) => {
        console.log(`Number of students in ${course}: ${courseData.count}. List: ${courseData.students.join(', ')}`);
      });

      resolve();
    });
  });
}

module.exports = countStudents;
