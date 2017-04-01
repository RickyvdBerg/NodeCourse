const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs
  .command('add', 'Add a new note', {
    title: {
      describe: 'Title of note',
      demand: true,
      alias: 't'
    },
    body: {
      describe: 'Body of note',
      demand: true,
      alias: 'b'
    }
  })
  .help()
  .argv;
var command = argv._[0];

switch (command) {
  case 'list':
    var allNotes = notes.getAll();
    console.log('=====================================');
    console.log(`printing ${allNotes.length} note(s).`)
    console.log('-------------------------------------');
    allNotes.forEach((note, index) => {
      console.log(`${index + 1} - ${note.title}`);
    });
    console.log('=====================================');
    break;
  case 'add':
    var note = notes.addNote(argv.title, argv.body);
    if (note) {
      console.log('=====================================');
      console.log('  ++         note added          ++  ');
      console.log('=====================================');
      notes.logNote(note);
    } else {

    }
    break;
  case 'remove':
      var noteRemoved = notes.removeNote(argv.title);
      if (noteRemoved) {
      console.log('=====================================');
      console.log('  --        note removed         --  ');
      console.log('=====================================');
      console.log(`title: ${noteRemoved.title}`);
      console.log('=====================================');
    } else {
      notes.noteNotFound(note);
    }
    break;
  case 'open':
    var note = notes.readNote(argv.title);
    if (note) {
      console.log('=====================================');
      console.log('  <<         Open Note           >>  ');
      console.log('=====================================');
      notes.logNote(note);
    } else {
      notes.noteNotFound(note);
    }
    break;
    case 'help':
    case 'commands':
      console.log('=====================================');
      console.log('Commands: add, open, list, remove');
      console.log('=====================================');
      break;
  default:
    console.log('No command given');
    break;

}
