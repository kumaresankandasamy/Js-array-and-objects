function add(){
    var ul = document.getElementById("student-list");
    var student = document.getElementById("student");
    var li = document.createElement("li");
    li.setAttribute('id',student.value);
    li.appendChild(document.createTextNode(student.value));
    ul.appendChild(li);
}
function remove(){
    var ul = document.getElementById("student-list");
  var student = document.getElementById("student");
  var list = document.getElementById(student.value);
  ul.removeChild(list);
}