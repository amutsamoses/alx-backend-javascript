import fs from 'fs';

function readDatabase(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf-8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                const lines = data.trim().split('\n').filter(line => line.trim() !== '');
                if (lines.length === 0) {
                    reject(new Error('Cannot load the database'));
                } else {
                    const header = lines.shift().split(',');
                    const studentGroups = {};

                    lines.forEach(line => {
                        const studentData = line.split(',');
                        const field = studentData[studentData.length - 1];
                        if (!studentGroups[field]) {
                            studentGroups[field] = [];
                        }
                        studentGroups[field].push(studentData[0]);
                    });

                    resolve(studentGroups);
                }
            }
        });
    });
}

export default readDatabase;
