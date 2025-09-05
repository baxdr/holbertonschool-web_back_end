import { readDatabase } from '../utils.js';

class StudentsController {
    static getAllStudents(req, res) {
        const dbPath = process.argv[2];

        readDatabase(dbPath)
            .then((fields) => {
                let output = 'This is the list of our students\n';

                const sortedFields = Object.keys(fields).sort((a, b) =>
                    a.toLowerCase().localeCompare(b.toLowerCase())
                );

                for (const field of sortedFields) {
                    const list = fields[field].join(', ');
                    output += `Number of students in ${field}: ${fields[field].length}. List: ${list}\n`;
                }

                res.status(200).send(output.trim());
            })
            .catch((err) => {
                res.status(500).send(err.message);
            });
    }

    static getAllStudentsByMajor(req, res) {
        const { major } = req.params;
        const dbPath = process.argv[2];

        if (major !== 'CS' && major !== 'SWE') {
            return res.status(500).send('Major parameter must be CS or SWE');
        }

        readDatabase(dbPath)
            .then((fields) => {
                const list = fields[major] || [];
                res.status(200).send(`List: ${list.join(', ')}`);
            })
            .catch((err) => {
                res.status(500).send(err.message);
            });
    }
}

export default StudentsController;
