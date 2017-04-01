// var obj = {
//   name: 'ricky'
// };
//
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// var personString = '{"name": "Ricky","age": 20}';
// parse = JSON.parse(personString);
// console.log(typeof parse);
// console.log(parse);

const fs = require('fs');

var originalNote = {
  title: "some title",
  body: "some body"
};

var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);
