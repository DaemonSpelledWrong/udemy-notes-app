const chalk = require('chalk');
const yargs = require('yargs');
const { getNotes, addNote, removeNote } = require('./notes.js');


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
    addNote(argv.title, argv.body);
  }
});

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Removes a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function (argv) {
    removeNote(argv.title);
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