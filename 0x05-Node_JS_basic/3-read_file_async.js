const fs = require('fs');

/**
 * Reads a CSV file asynchronously, processes the student data,
 * and prints the total number of students and their details by field.
 *
 * @param {string} dbPath - The path to the CSV file.
 * The file should contain columns like first name and field of study.
 * @returns {Promise<void>} - A Promise that resolves when data is successfully processed,
 * or rejects if there is an error.
 */
function countStudents(dbPath) {
  return new Promise((resolve, reject) => {
    // Read the file asynchronously
    fs.readFile(dbPath, 'utf-8', (error, data) => {
      if (error) {
        // If an error occurs (e.g., file not found), reject the promise with an error message
        reject(Error('Cannot load the database'));
      } else {
        // Create a Map to store student names grouped by their field of study
        const courses = new Map();
        // Split the file content by line to get an array of students
        let students = data.split('\n');
        // Remove the first line (header) and the last empty line (if any)
        students = students.slice(1, students.length - 1);

        // Loop through each student's data
        students.forEach((student) => {
          // Split the student's line into individual pieces of information
          const studentData = student.split(',');
          // Extract the student's first name and field of study
          const firstName = studentData[0];
          const field = studentData[3];

          // If the field exists in the map, add the student's name to the list
          if (courses.has(field)) courses.get(field).push(firstName);
          else courses.set(field, [firstName]); // Otherwise, create a new list for this field
        });

        // Display the total number of students
        console.log(`Number of students: ${students.length}`);

        // Loop through each field in the map and display the number of students and their names
        courses.forEach((courseStudents, course) => {
          console.log(`Number of students in ${course}: ${courseStudents.length}. List: ${courseStudents.join(', ')}`);
        });

        // Resolve the promise when the process is complete
        resolve();
      }
    });
  });
}

module.exports = countStudents;
