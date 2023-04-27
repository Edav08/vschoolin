var updateButton = document.querySelector("#update-button")
var submitButton = document.querySelector("#submit-button")
var pestButtons = document.querySelectorAll(".pestButton")
var form = document.querySelector("#summary")
var doc = document.body;
coinSound = new Audio("coin.wav")
//baddies object.
//could have impreoved structure here by adding
//the baddie as a nested object
//ie. baddies = [{ goomba = {value:5,}}]
var baddies = [{
    name:"Goomba",
    id:"goomba",
    value:5,
    getKills: function (){
        return document.querySelector("#goomba").value       
    },
},{
    name:"Bob-omb",
    id:"bobomb",
    value:7,
    getKills: function (){
        return document.querySelector("#bobomb").value       
    },
},{
    name:"Cheep Cheep",
    id:"cheepCheep",
    value:11,
    getKills: function (){
        return document.querySelector("#cheepCheep").value       
    },
}]

//store pest buttons in event listeners
// for (i = 0; i < pestButtons.length; i++){
//     pestButtons[i].addEventListener("click",function(e){
//         //increment kill count by one on click
//         id = e.target.name;
//         valueDisp = parseInt(document.querySelector("#"+id).value)
//         // console.log(valueDisp)
//         document.querySelector("#"+id).value = valueDisp + 1
//         coinSound.play();
//     })
// }

pestButtons.map(button => {
    return button.addEventListener("click", e => {
        id = e.target.name;
        valueDisp = parseInt(document.querySelector("#"+id).value)
        document.querySelector("#"+id).value = valueDisp + 1
        coinSound.play();
    })
})

function getTotalCoins(inputArray){
    let newSum = 0;
    for(i=0; i< inputArray.length; i++){
        let killVal = baddies[i].value;
        let totalKills = parseInt(baddies[i].getKills());
        newSum += killVal * totalKills;
    }
    return newSum
}

function findKillValue(id, baddies){
    //this function iterates though the baddies object to locate id,
    //then returns value of that baddie.
    let value = 0;
    for (i = 0; i < baddies.length; i++){
        if (baddies[i].id === id){
            //add found id value
            value += baddies[i].value;

        }
    }
    
    return value
}

function updateTotal(newValue){
    //get current 'total' placeholder & replace
    var total = document.querySelector("#total-display");
    total.innerHTML = ("Total: " + newValue);

}

function submitBill(){
    //hide elements 3-7 on form
    let cNodes = [3,5,7]

    for (i = 0; i < cNodes.length; i++){
        form.childNodes[cNodes[i]].style.visibility = "hidden";
        form.childNodes[cNodes[i]].style.height = "15px";
        form.style.padding = "20px";
        textBox = cNodes[i] - 1;
        form.childNodes[textBox].textContent = (baddies[i].name + ": " + baddies[i].value + " coins x " + baddies[i].getKills() + " kills = " + baddies[i].value * baddies[i].getKills())
    }
    
    form.children.totalBox.children.update.style.display = "none"
    form.children.totalBox.children.submit.style.display = "none"
    //replace with invoice data
    title = document.querySelector("#summary-title")
    title.innerText = "Invoice:"



}


///////// Event Listeners

//fix zeroing out bug.  
//Form would reset anytime entered was pressed when filling in a number


form.addEventListener("submit",function(e){

    e.preventDefault();

    return false;
})

//update total button and enter will be the same
updateButton.addEventListener("click", function(e){
    e.preventDefault();
    //on click, need to read all the values in, and update total 
    updateTotal(getTotalCoins(baddies));
    }
)
//enter key listener
doc.addEventListener("keyup", function(e){
    e.preventDefault();
    if(e.keyCode === 13){
        updateTotal(getTotalCoins(baddies));
    } 
}
)

submitButton.addEventListener("click",function(e){
    updateTotal(getTotalCoins(baddies));
    submitBill();

})