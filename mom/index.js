var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");


function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    
    var btnDelete = document.createElement("button");
    btnDelete.classList.add("delete");
    btnDelete.textContent = "X";
    
    li.appendChild(btnDelete);
    ul.appendChild(li);
    input.value = "";
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

function deleteAfterClick(event) {
  if(event.target.classList.contains("delete")){
    event.target.closest("li").remove();
  }
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keydown", addListAfterKeypress);
ul.addEventListener("click", deleteAfterClick);