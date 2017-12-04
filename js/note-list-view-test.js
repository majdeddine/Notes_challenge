function TakesANoteListModel(){
  var noteList = new NoteList()
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView._list === noteList.list());
}
TakesANoteListModel();
