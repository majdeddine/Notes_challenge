(function(exports){

  function NoteList(){
    this._list = [];
  }
  NoteList.prototype.list = function(){
    return this._list;
  }

  exports.NoteList = NoteList;
})(this)
