module.exports = function(fileName) {
    const ls = require('./ls');
    //write a function
    fs.readFile(ls, (err) => {
        if (err) throw err;
        console.log(fileName);
    });
};
