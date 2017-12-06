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
