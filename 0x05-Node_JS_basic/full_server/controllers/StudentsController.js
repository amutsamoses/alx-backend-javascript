import readDatabase from '../utils';

class StudentsController {
    static getAllStudents(req, res) {
        const filePath = process.argv[2];
        readDatabase(filePath)
            .then((studentGroups) => {
                let output = 'This is the list of our students\n';
                Object.keys(studentGroups).sort().forEach((field) => {
                    const students = studentGroups[field];
                    output += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
                });
                res.status(200).send(output.trim());
            })
            .catch(() => {
                res.status(500).send('Cannot load the database');
            });
    }

    static getAllStudentsByMajor(req, res) {
        const filePath = process.argv[2];
        const major = req.params.major;
        if (major !== 'CS' && major !== 'SWE') {
            res.status(500).send('Major parameter must be CS or SWE');
        } else {
            readDatabase(filePath)
                .then((studentGroups) => {
                    const students = studentGroups[major] || [];
                    res.status(200).send(`List: ${students.join(', ')}`);
                })
                .catch(() => {
                    res.status(500).send('Cannot load the database');
                });
        }
    }
}

export default StudentsController;
