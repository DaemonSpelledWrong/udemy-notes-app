const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes.js');


// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note content',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function (argv) {
    console.log(`Title: ${argv.title}`);
    console.log(`Content: ${argv.body}`);
  }
});

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Removes a note',
  handler: function () {
    console.log('Removing a note!')
  }
});

// Create read command
yargs.command({
  command: 'read',
  describe: 'Reads a note',
  handler: function () {
     console.log('This is a note!')
  }
});

// Create list command
yargs.command({
  command: 'list',
  describe: 'lists out all notes',
  handler: function () {
    console.log('Here are all the notes:')
  }
});

// add, remove, read, list

yargs.parse();