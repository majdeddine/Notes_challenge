var doubleNoteList ={list:function(){return []}}

function returnAStringOfHtml(){
  var noteListView = new NoteListView(doubleNoteList);
  noteListView.minifyText();
  assert.isTrue(noteListView.toHtml() === "<ul><li><div></div></li></ul>")
}
returnAStringOfHtml();

var doubleNote ={text: function(){ return "Favourite drink: seltzer"}}
var doubleNoteList ={list: function(){var arr = [doubleNote]; return arr}}

function returnAListThatHasOneNote(){
  var noteListView = new NoteListView(doubleNoteList);
  noteListView.minifyText();
  assert.isTrue(noteListView.toHtml() === "<ul><li><div>Favourite drink: sel</div></li></ul>")
}
returnAListThatHasOneNote();


var doubleNote ={text: function(){ return "Favourite food: pesto"}}
var doubleNoteTwo ={text: function(){ return "Favourite drink: seltzer"}}
var doubleNoteList ={list: function(){var arr = [doubleNote, doubleNoteTwo]; return arr}}

function returnAListThatHasSeveralNotes(){
  var noteListView = new NoteListView(doubleNoteList);
  noteListView.minifyText();
  assert.isTrue(noteListView.toHtml() === "<ul><li><div>Favourite food: pest</div></li><li><div>Favourite drink: sel</div></li></ul>")
}
returnAListThatHasSeveralNotes();
