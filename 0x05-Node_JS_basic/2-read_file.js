const fs = require('fs');

/**
 * Reads a CSV file containing student data, processes the data,
 * and prints the total number of students and their details by field.
 *
 * @param {string} dbPath - The path to the CSV file.
 * The file should have columns such as first name and field of study.
 *
 * @throws Will throw an error if the file cannot be read or is unavailable.
 */
function countStudents(dbPath) {
  try {
    // Read the CSV file synchronously and store its content in a variable.
    let students = fs.readFileSync(dbPath, 'utf-8');
    // Split the file content by line into an array.
    students = students.split('\n');

    // Remove the first line (header) and the last empty line, if any.
    students = students.slice(1, students.length - 1);

    // Create a Map to store the number of students and their names by field.
    const courses = new Map();

    // Loop through each student's data
    students.forEach((student) => {
      // Split the line into individual pieces of information.
      const studentData = student.split(',');
      // Extract the student's first name and the field of study.
      const firstName = studentData[0];
      const field = studentData[3];

      // Check if the field already exists in the Map.
      if (courses.has(field)) {
        // If the field exists, add the student to the list and update the count.
        courses.get(field).students.push(firstName);
        courses.get(field).count += 1;
      } else {
        // If the field does not exist, create a new entry in the Map.
        courses.set(field, { students: [firstName], count: 1 });
      }
    });

    // Display the total number of students.
    console.log(`Number of students: ${students.length}`);

    // Loop through each field in the Map and display the number of students
    // and their names.
    courses.forEach((courseData, course) => {
      console.log(`Number of students in ${course}: ${courseData.count}. List: ${courseData.students.join(', ')}`);
    });
  } catch (error) {
    // If there's an error (e.g., file doesn't exist), throw an error message.
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
