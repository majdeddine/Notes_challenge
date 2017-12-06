(function(exports){
  var i = -1;
  function Note(text=''){
    var id = (function(){i++; return i})()
    this._text = text;
    this._id = id ;

  }
  Note.prototype.text = function(){
    return this._text;
  }

  Note.prototype.id = function(){
    return this._id;
  }
  exports.Note = Note;
})(this)
