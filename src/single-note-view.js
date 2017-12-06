(function(exports){

  function SingleNoteView(note){
    this._note = note;
    this._noteContent = note.text();
  }
  SingleNoteView.prototype.noteContent = function(){
    return this._noteContent;
  }

  SingleNoteView.prototype.toHtmlDiv = function(){
    var openingTag = '<div>';
    var closingTag = '</div>';
    return openingTag + this._noteContent + closingTag;
  }

  exports.SingleNoteView = SingleNoteView;
})(this)
