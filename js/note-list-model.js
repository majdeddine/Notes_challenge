(function(exports){

  function NoteList(){
    this._list = [];
  }
  NoteList.prototype.list = function(){
    return this._list;
  }

  NoteList.prototype.add = function(text){
    this._list.push(new Note(text));
  }

  exports.NoteList = NoteList;
})(this)
