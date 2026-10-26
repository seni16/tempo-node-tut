
const { readFile, writeFile } = require('fs');
console.log('start')

readFile('./subfolder/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }

    const first = result;

    readFile('./subfolder/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }

        const second = result;

        writeFile(
            './subfolder/result-async.txt',
            `here is the result: ${first}, ${second}\n`,
            (err) => {
                if (err) {
                    console.log(err);
                    return;
                }

                console.log('File written successfully!');
            }
        );
    });
});
console.log('starting next task')