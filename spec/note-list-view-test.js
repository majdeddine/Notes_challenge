
var doubleNote ={text: function(){ return ""}}
var doubleNoteList ={list: function(){var arr = [doubleNote]; return arr}}
var noteListView = new NoteListView(doubleNoteList);

function returnAStringOfHtml(){
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

function returnAListOfNoteWithUrl(){
  noteListView.minifyText();
  noteListView.addUrl();
  console.log(noteListView.toHtml())
  assert.isTrue(noteListView.toHtml() === "<ul><li><div><a href=\"#note/1\"></a></div></li></ul>");
}
returnAListOfNoteWithUrl();


function returnTwoDiffrentUrl(){
  var noteListView = new NoteListView(doubleNoteList);
  noteListView.minifyText();
  noteListView.addUrl();
  console.log(noteListView.toHtml())
  assert.isTrue(noteListView.toHtml() === "<ul><li><div><a href=\"#note/1\">Favourite food: pest</a></div></li><li><div><a href=\"#note/2\">Favourite drink: sel</a></div></li></ul>")
}
returnTwoDiffrentUrl();
