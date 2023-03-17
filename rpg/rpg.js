const readlineSync = require('readline-sync');

const name = readlineSync.question("ole tarnish one ?  What is your name?\n");

console.log("The fallen leaves tell a story The great Elden Ring was shattered In our home, across the fog, the Lands Between.Now, Queen Marika the Eternal is nowhere to be found,and in the Night of the Black Knives, Godwyn the Golden was the first to perish.Soon, Marika's offspring, demigods all, claimed the shards of the Elden Ring.The mad taint of their newfound strength triggered the Shattering.A war from which no lord arose.A war leading to abandonment by the Greater Will.Arise now, ye Tarnished.Ye dead, who yet live.The call of long-lost grace speaks to us all.Hoarah Loux, chieftan of the badlands.The ever-brilliant Goldmask.Fia, the Deathbed Companion.The loathsome Dung Eater.And Sir Gideon Ofnir, the All-knowing.And one other. Whom grace would again bless.A Tarnished of no renown.Cross the fog, to the Lands Between.To stand before the Elden Ring.and become the Elden Lord.")

begin = readlineSync.keyIn("Press \'w\' to continue\n",{limit: "w"})

const badGuys = ['Lonewolf', 'Demihuman', 'Troll'];
const weapons = ['Claymore', 'Greatsword', 'Club'];
const armor = ['Royal Remains armor', 'Twinned Armor', 'Blade Wolf Armor'];
const gift = ['Talisman Pouch', 'StoneWord Key', 'Larval Tear'];
var prize = [];
let userHealth = 150;
let winCount = 0

let pickUp = weapons[Math.floor(Math.random()*weapons.length)];
let pickUps = armor[Math.floor(Math.random()*armor.length)];
let pickUpss = gift[Math.floor(Math.random()*gift.length)];
function game(){
    const attackPower = Math.floor(Math.random() * (8 - 1) + 2);
    const badGuy = badGuys[Math.floor(Math.random() * badGuys.length)];
    let badGuysHealth = 30;
    const badGuysPower = Math.floor(Math.random() * (8 - 3) + 2);

    response = "";
    response = readlineSync.keyIn("Press \'w\' to continue on your journey...\nPress \'i\' for status\n",{limit: "wi"})
    if (response === "i"){
    console.log(name + ': \n' + userHealth + '\nWeapons: ' + pickUp +'\nArmor: '+ pickUps + '\nPrize: ' + prize)
    return response}
      readlineSync.keyIn("Press \'w\' Walking...");
    
        var key = Math.random();
        if (key <= .4) {
            console.log('Walking... no sign of danger here.');
        } else if (key >= .4) {
            console.log(badGuy + ' has arrived.');

            while(badGuysHealth > 0 && userHealth > 0) {
                
                const user = readlineSync.question('What would you like to do? Enter "r" to run. Enter "a" to attack.' );

                switch (user) {
                    case 'r': 
                      const run = Math.random();
                        if(run < .5) {
							console.log('You ran away successfully!');    
                        } else {
                            return false
							break;
						
                        }
                    case 'a':

                        badGuysHealth -= attackPower;
                        console.log('You attacked ' + badGuy + ' with ' + attackPower + ' attack power.');

                        userHealth -= badGuysPower;
                        console.log('Enemy just attacked you with ' + badGuysPower + ' attack power.');
                        
                        if (badGuysHealth <= 0) {
                            winCount ++
                            console.log('You killed ' + badGuy + '.\n' + badGuy + ' left: ' + pickUpss);
                            let loot = Math.random();
                            if (loot <= .3) {
                                prize.push(pickUpss);
                            }
                        } else if (userHealth <= 0) {
                            console.log(badGuy + "You Died");
                        }
                }   
            }
        }
    
}

while(userHealth > 0) {
    if(winCount === 3) {
        console.log("You Win")
        process.exit()
    }
    userRestore = function(){
        userActive = true;
        userHealth = 150;
        badGuysHealth = 30;
        userDeactive = (badGuysHealth < 0) * 3
    };
    userRestore();
    game();
}
