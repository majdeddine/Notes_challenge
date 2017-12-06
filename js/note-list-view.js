(function(exports){
  function NoteListView(noteList){
    this._list = noteList.list();
    this._miniTextList = [];
  }

  NoteListView.prototype.minifyText = function(){
    var arr = []
    this._list.forEach(function(text){arr.push(text.slice(0, 20))});
    this._miniTextList = arr;
  }
  NoteListView.prototype.toHtml = function(){
    var openingTag = "<ul><li><div>";
    var closingTag = "</div></li></ul>";
    var inBetweenTag = "</div></li><li><div>";
    if (this._list.length === 0){return openingTag+closingTag;}
    else{
    return  openingTag+this._miniTextList.join(inBetweenTag)+closingTag;
    }
  }
  exports.NoteListView = NoteListView;
})(this)
