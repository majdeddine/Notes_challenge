(function(exports){

  function NoteList(){
    this._list = [];
  }
  NoteList.prototype.list = function(){
    return this._list;
  }
  NoteList.prototype.add = function(note){
    this._list.push(note)
  }
  exports.NoteList = NoteList;
})(this)
