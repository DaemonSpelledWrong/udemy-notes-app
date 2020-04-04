const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes.js');


// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  handler: function () {
    console.log(chalk.green.bold('Adding a new note!'))
  }
});

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Removes a note',
  handler: function () {
    console.log(chalk.red.bold('Removing a note!'))
  }
});

// Create read command
yargs.command({
  command: 'read',
  describe: 'Reads a note',
  handler: function () {
     console.log(chalk.blue.bold('This is a note!'))
  }
});

// Create list command
yargs.command({
  command: 'list',
  describe: 'lists out all notes',
  handler: function () {
    console.log(chalk.yellow.bold('Here are all the notes:'))
  }
});

// add, remove, read, list

console.log(yargs.argv);