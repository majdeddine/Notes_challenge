var doubleViewNote ={toHtml: "<ul><li><div>Favourite drink: seltzer</div></li></ul>" };

function returnHtmlElement (){
  var noteController = new NoteController();
  noteController.getElementOf('app');
  assert.isTrue(noteController._element.innerHTML === 'hello')
}

returnHtmlElement();

function changeHtmlElement(){
  var noteController = new NoteController();
  noteController.getElementOf('app');
  noteController.changeContent('ola');
  assert.isTrue(noteController._element.innerHTML === 'ola')
}
changeHtmlElement();

function changeHtmlElementToList(){
  var noteController = new NoteController();
  noteController.getElementOf('app');
  noteController.changeContent(doubleViewNote.toHtml);
  assert.isTrue(noteController._element.innerHTML === "<ul><li><div>Favourite drink: seltzer</div></li></ul>")
}
changeHtmlElementToList();
