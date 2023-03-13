var header = document.createElement("h1");
var headers = document.createElement("h2")
var spans = document.createElement("span")

var made = document.createTextNode("Javascript made this!")
var myName = document.createTextNode("Steven Davis")
var javaScript = document.createTextNode(" wrote the JavaScript")

header.appendChild(made)
spans.appendChild(myName);
spans.classList.add("name");
headers.appendChild(spans);
headers.appendChild(javaScript);

document.body.prepend(headers);
document.body.prepend(header);

var messages = document.querySelectorAll(".message")
var replacementMessages = ["Hello","How are you doing today ?","I'm doing good", "Thank You","Your Welcome","Have a nice day" ]

for (i = 0; i < messages.length; i++){
    console.log(this.messages[i])
    this.messages[i].innerText = replacementMessages[i]; 
}

var clearButton = document.querySelector("#clear-button")
clearButton.addEventListener("click",function(e){

    for (i = 0; i < messages.length; i++){
        messages[i].remove();
    }
})