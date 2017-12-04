(function(exports){
  function NoteListView(noteList){
    this._list = noteList.list();
  }

  NoteListView.prototype.toHtml = function(){
    var openingTag = "<ul><li><div>";
    var closingTag = "</div></li></ul>";
    var inBetweenTag = "</div></li><li><div>";
    if (this._list.length === 0){return openingTag+closingTag;}
    else{
    return  openingTag+this._list.join(inBetweenTag)+closingTag;
    }
  }
  exports.NoteListView = NoteListView;
})(this)
