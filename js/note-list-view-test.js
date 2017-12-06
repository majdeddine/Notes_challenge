function takesANoteListModel(){
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView._list === noteList.list());
}
takesANoteListModel();

function returnAStringOfHtml(){
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);
  noteListView.minifyText();
  assert.isTrue(noteListView.toHtml() === "<ul><li><div></div></li></ul>")
}
returnAStringOfHtml();

function returnAListThatHasOneNote(){
  var noteList = new NoteList();
  noteList.add("Favourite drink: seltzer")
  var noteListView = new NoteListView(noteList);
  noteListView.minifyText();
  assert.isTrue(noteListView.toHtml() === "<ul><li><div>Favourite drink: sel</div></li></ul>")
}
returnAListThatHasOneNote();


function returnAListThatHasSeveralNotes(){
  var noteList = new NoteList();
  noteList.add("Favourite food: pesto")
  noteList.add("Favourite drink: seltzer")
  var noteListView = new NoteListView(noteList);
  noteListView.minifyText();
  assert.isTrue(noteListView.toHtml() === "<ul><li><div>Favourite food: pest</div></li><li><div>Favourite drink: sel</div></li></ul>")
}
returnAListThatHasSeveralNotes();
