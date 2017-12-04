function testNoteListReturnAnArray(){
  var noteList = new NoteList();
  assert.isTrue(noteList.list() instanceof Array);

}
testNoteListReturnAnArray();
