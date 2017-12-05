function changeApp(content){
  var element = document.getElementById('app')
  element.innerHTML = content;

}
var noteList = new NoteList();
noteList.add("Favourite drink: seltzer")
var view = new NoteListView(noteList);
view.toHtml()
changeApp(view.toHtml());
