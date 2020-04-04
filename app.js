const chalk = require('chalk');
const getNotes = require('./notes.js');

getNotes();

console.log(chalk.red('Error!'));
