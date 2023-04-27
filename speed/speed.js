var button = document.querySelector("#clicker")
var counter = document.querySelector("#counter")
var buttonCount = localStorage.getItem("token") || 0;

if (buttonCount){
    counter.textContent = buttonCount

} else {
    counter.textContent = "0"
}

console.log(button)
button.addEventListener("click", function(e){
    getNumber = counter.innerHTML
    getNumber++
    counter.textContent = getNumber;
    localStorage.setItem("token", getNumber)
    console.log(getNumber)
})