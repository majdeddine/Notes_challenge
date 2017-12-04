(function(exports){
  function test(){
    var note = new Note('My favourite language is JavaScript')
    assert.isTrue(note.text === 'My favourite language is JavaScript' )
  }
  test();
})(this)
