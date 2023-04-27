rs = require("readline-sync")



class Player {
    constructor({}) {
        this.name = "";
        this.totalCoins = 0;
        this.status = 1;
        this.statusOptions = ["Dead", "Small", "Big", "Powered Up"];
        this.hasStar = false;
        this.gameActive = true;

    }
    setName() {
        let options = ["Mario", "Luigi"]
        let name = 2 //larger than array size
        while (name > 1)  {
            // name = rs.keyInSelect(options, "Choose your charachter")
            name = 1
        }
        this.name = options[name]
    }
    gotHit() {
        if(!this.hasStar){
            this.status = this.status - 1
            if (this.status === 0){
                this.gameActive = !this.gameActive
            }
        } else {
            console.log (this.name + " is invincible!")
        }
    }
    gotPowerUp() {
        if (this.status <= 2){
            this.status = this.status + 1
            if (this.status === 3){
                //if status bumps up to Powered up, change temporarily hasStar to true, then change back
                console.log(this.name + " has Powered up!!")
                this.hasStar = !this.hasStar
                setTimeout(() => {
                    console.log(this.name + " has lost his Star Buddy!!")
                    this.hasStar = !this.hasStar
                    this.status--
                }, 10000)
            }
        }
    }
    addCoin() {
        this.totalCoins++
        console.log(this.name + " has found a Coin!")
    }
    print() {
        console.log(`Name: ${this.name}\nStatus: ${this.statusOptions[this.status]}\nTotal Coins: ${this.totalCoins}\n`)
    }
}

function getRange (){

    var roll = Math.floor(Math.random() * 3)
    switch (roll){
        case 0:
            player.gotHit()
            break
        case 1:
            player.gotPowerUp()
            break
        case 2:
            player.addCoin()
            break
        default:
            console.log("Problem with random number " + roll)
    }
    player.print()
    if (!player.gameActive){
        clearInterval(gameRunning)
    }
}

const player = new Player({});
player.setName()
const gameRunning = setInterval(getRange, 1000)