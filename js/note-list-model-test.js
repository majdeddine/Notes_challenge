(function(){
  function test(){
    var noteList = new NoteList();
    assert.isTrue(noteList.list() === [])
  }
  test();
})(this)
