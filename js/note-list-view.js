(function(exports){
  function NoteListView(noteList){
    this._list = noteList.list();
  }

  NoteListView.prototype.toHtml = function(){
    if (this._list.length === 0){return "<ul><li><div></div></li></ul>"}
    else if (this._list.length === 1){
    return "<ul><li><div>"+this._list[0]+"</div></li></ul>"}
    else{
    return  "<ul><li><div>"+this._list.join("</div></li><li><div>")+"</div></li></ul>"
    }
  }
  exports.NoteListView = NoteListView;
})(this)
