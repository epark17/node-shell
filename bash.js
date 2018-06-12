process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();
    const pwd = require('./pwd');
    const cat = require('./cat');

    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ');
    process.stdout.write(pwd);
    process.stdout.write(cat('fs filename'));
});
