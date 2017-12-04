(function(exports){
  function test(){
    var noteList = new NoteList();
    var note = new Note();
    noteList.add(note)
    assert.isTrue(noteList.list()[0] === note)

  }
  test();
})(this)
