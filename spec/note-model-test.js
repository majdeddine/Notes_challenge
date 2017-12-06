var note = new Note('My favourite language is JavaScript')

function testNoteTextReturnPassedArgument(){
  assert.isTrue(note.text() === 'My favourite language is JavaScript')
}
testNoteTextReturnPassedArgument();

function testNoteInstanceHaveId(){
  assert.isTrue(note.id()=== 0)
}
testNoteInstanceHaveId()

function testNoteInstanceHaveUniqueId(){
  var note1 = new Note();
  assert.isTrue(note1.id()=== 1)
}
testNoteInstanceHaveUniqueId();
