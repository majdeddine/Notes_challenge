(function(exports){

  function NoteList(note = Note){
    this._note = note;
    this._list = [];
  }
  NoteList.prototype.list = function(){
    return this._list;
  }

  NoteList.prototype.add = function(text){
    this._list.push(new this._note(text).text());
  }

  exports.NoteList = NoteList;
})(this)
