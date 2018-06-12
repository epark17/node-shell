module.exports = function() {
    const fs = require('fs');
    fs.readdirSync('./', 'utf8', (err, files) => {
        if (err) {
            throw err;
        } else {
            process.stdout.write(files.join('\n'));
            process.stdout.write('prompt > ');
        }
    });
};

