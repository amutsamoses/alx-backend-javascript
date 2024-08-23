const fs = require('fs');

/**
 * Reads a CSV file containing student data, processes it to count
 * the total number of students and the number of students per field.
 * The function logs the information to the console.
 *
 * @param {string} dbPath - path to the CSV file
 * @throws - if the CSV file cannot be read.
 */

function countStudents(dbPath) {
  try {
    // read the content of csv file as string
    let students = fs.readFileSync(dbPath, 'UTF-8');

    // split the content by newline
    students = students.split('\n');

    // remove header and the last line if any
    students = students.slice(1, students.length - 1);

    // map to store course data (field: {students: [], count: 0})
    const course = new Map();

    // Parse each students data, creating a map of courseData objects.
    students.forEach((student) => {
      // separate fields by comma
      const studentData = student.split(',');
      // get student first name
      const studentFirstName = studentData[0];
      // get student field of study
      const fieldStudy = studentData[3];

      // if already exist update its data
      if (course.has(fieldStudy)) {
        // add student name to list
        course.get(fieldStudy).students.push(studentFirstName);
        // increment the student count in the field
        course.get(fieldStudy).count += 1;
      } else {
        // create a new entry if not exist
        course.get(fieldStudy, { students: [studentFirstName], count: 1 });
      }
    });

    console.log(`Number of Students: ${students.length}`);

    // log number of students in each field and their names
    course.forEach((courseData, crs) => {
      console.log(`Number of students in ${crs}: ${courseData.count}. List: ${courseData.students.join(',')}`);
    });
  } catch (error) {
    // error reading csv file
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
