(function (exports){

  function NoteController(){
    this._element = '';
  }

  NoteController.prototype.getElementOf = function(id){
    this._element = document.getElementById(id);
  }
  NoteController.prototype.changeContent = function(content){
    this._element.innerHTML = content;
  }
  exports.NoteController = NoteController;
})(this)
