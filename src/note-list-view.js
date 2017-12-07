(function(exports){
  function NoteListView(noteList = new NoteList()){
    this._list = noteList.list();
    this._miniTextList = [];
  }

  NoteListView.prototype.minifyText = function(){
    var arr = []
    this._list.forEach(function(note){arr.push(note.text().slice(0, 20))});
    this._miniTextList = arr;
  }

  NoteListView.prototype.addUrl = function(){
  var arr = [];
  var openingTag= "<a href=\"#note/1\">"
  var closingTag = "</a>"
  this._miniTextList.forEach(function(text){arr.push(openingTag+text+closingTag)})
  this._miniTextList = arr
  }

  NoteListView.prototype.toHtml = function(){
    var openingTag = "<ul><li><div>";
    var closingTag = "</div></li></ul>";
    var inBetweenTag = "</div></li><li><div>";
    return  openingTag+this._miniTextList.join(inBetweenTag)+closingTag;
  }
  exports.NoteListView = NoteListView;
})(this)
