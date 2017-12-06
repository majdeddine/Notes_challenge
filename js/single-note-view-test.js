var doubleNote = {text: function(){return 'Favourite drink: seltzer'}}
var singleNoteView = new SingleNoteView(doubleNote);

function takeNoteModelAsParameter(){
  assert.isTrue(singleNoteView.noteContent() === 'Favourite drink: seltzer')
}
takeNoteModelAsParameter();

function turnANoteTextToHtmlDiv(){
  assert.isTrue(singleNoteView.toHtmlDiv() === "<div>Favourite drink: seltzer</div>")
}
turnANoteTextToHtmlDiv();
