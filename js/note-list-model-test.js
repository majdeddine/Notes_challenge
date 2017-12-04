function testNoteListReturnAnArray(){
  var noteList = new NoteList();
  assert.isTrue(noteList.list() instanceof Array);

}
testNoteListReturnAnArray();

function testAddAndStoreANote(){
  var noteList = new NoteList();
  noteList.add("Favourite drink: seltzer")
  assert.isTrue(noteList.list()[0].text() === "Favourite drink: seltzer")
}
testAddAndStoreANote();
