const div = document.querySelector("#myDiv")


div.style.backgroundColor = "grey";
div.style.width = "200px";
div.style.height = "200px";

div.addEventListener("mouseover", e => {
    console.log("You double clicked!");
    div.style.backgroundColor = "orange";
})

div.addEventListener("dblclick", e => {
    console.log("You double clicked!");
    div.style.backgroundColor = "green";
})
div.addEventListener("mousedown", e => {
    console.log("You are holding the mouse down!");
    div.style.backgroundColor = "red";
})

div.addEventListener("mouseup", e => {
    console.log("You let go of the mouse!");
    div.style.backgroundColor = "yellow";
})
div.addEventListener("mouseout", e => {
    console.log("You are within the square!");
    div.style.backgroundColor = "blue";
})