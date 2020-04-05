const fs = require('fs');
const chalk = require('chalk');

const getNotes = function () {
  console.log('Your notes...');
};

const addNote = function (title, body) {
  const notes = loadNotes();
  if(notes.filter(note => note.title === title).length > 0) {
    console.error(chalk.red('That title is already in use! Try a different title or delete the old one.'));
    return [];
  } else {

    notes.push({
      title: title,
      body: body 
    });
  
    saveNotes(notes);
    console.log(chalk.green('New note created!'));
  };
};

const removeNote = function (title) {
  const notes = loadNotes();
  
  if(notes.filter(note => note.title === title).length === 0) {
    console.error(chalk.red("That note title doesn't currently exist."));
    return [];
  } else {
    saveNotes(notes.filter(note => note.title !== title));
    console.log(chalk.green(`Removed the note titled ${title}`));
  };
};

const saveNotes = function (notes) {
  const newJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', newJSON);
};

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
  
    return JSON.parse(dataJSON);
  } catch (e) {
    console.error(chalk.red("File is nonexistent, empty, or doesn't contain JSON"));
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote
};