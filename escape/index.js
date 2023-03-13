var rs = require("readline-sync") 



var keyFound = false;
var winCondition = false;
var endGame = false


while (!endGame){

    
    var options = ["Put hand in hole", "Search for key", "Open door"];
    var index = rs.keyInSelect(options, "What do you choose?");

    switch (index) {
        case 0:
            endGame = true;
            break;
        case 1:
            if (!keyFound){
                keyFound = true;
                console.log("You found a rusty key!\n")
            } else {
                console.log("There's only some dirty clothes, a locked door, and a hole in the floor\n")
            }
            break;
        case 2:
            if (!keyFound){
                console.log("Door is locked...\n")
            } else {
                console.log("You have unlocked the door!\n")
                winCondition = true;
                endGame = true;
            }
            break;
        default:
            console.log("You can't escape that way!")
    }
}

winCondition ? console.log("You win!") : console.log("You have died...")