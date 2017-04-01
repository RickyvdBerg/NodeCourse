const fs = require('fs');

var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }

};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  };

  var duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0)
  {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
  else {
    console.log("note with the same title already exists!");
  }
}

var getAll = () => {
  return fetchNotes();
}

var readNote = (title) => {
  var notes = fetchNotes();
  var selectedNote = notes.filter((note) => note.title === title);
  console.log(selectedNote);
  return selectedNote[0];
}

var removeNote = (title) => {
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => note.title !== title);
  var removedNote = notes.filter((note) => note.title === title);
  saveNotes(filteredNotes);

  return removedNote[0];
}

var logNote = (note) => {
  debugger;
  console.log(`title: ${note.title}`);
  console.log(`body: ${note.body}`);
  console.log('=====================================');
}

var noteNotFound = (note) => {
  console.log('=====================================');
  console.log(' ??  Note not found  ?? ');
  console.log('=====================================');
}



module.exports = {
  addNote, //addNote: addnote
  getAll,
  readNote,
  removeNote,
  logNote,
  noteNotFound
}
