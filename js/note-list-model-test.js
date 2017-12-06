function DoubleNote(text) {
}
var noteList = new NoteList(DoubleNote);

function testNoteListReturnAnArray(){
  assert.isTrue(noteList.list() instanceof Array);

}
testNoteListReturnAnArray();

function testAddAndStoreANote(){
  noteList.add("Favourite drink: seltzer")
  assert.isTrue(noteList.list()[0] instanceof DoubleNote)
}
testAddAndStoreANote();
