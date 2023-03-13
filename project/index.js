var rs = require("readline-sync")
var gearArray = require("./gear")
var weaponArray = require("./weapon")



function Player(name){
    this.name = name;
    this.hp = 25;
    this.maxhp = 25;
    this.level = 1;
    this.exp = 0;
    this.nextLevel = 25;
    this.equipped = {
        mainHand : {},
        offHand : {},
        head : {},
        chest : {},
        legs : {},
    };
    this.inventory = [];
    this.isAlive = true;
    this.foesKilled = [];
    this.attack = 10;
    this.armor = 0;
    this.prone = false

}

function Foes(type, modifier, hp, level, attack, armor, expGiven){
    this.type = type;
    this.modifier = modifier;
    this.hp = hp;
    this.level = level;
    this.attack = attack;
    this.armor = armor;
    this.expGiven = expGiven;
    this.isAlive = true;
    this.prone = false;

}



function Weapon(name, type, power,rarity){
    this.name = name;
    this.type = type;
    this.power = power;
    this.rarity = rarity;
}
function Armor(name, type, armor, slot, rarity){
    this.name = name;
    this.type = type;
    this.armor = armor;
    this.slot = slot;
    this.rarity = rarity;
}




function equipWeapon(weapon){
    player.equipped.mainHand = weapon
    player.attack += weapon.power
    console.log(player.name + " has equipped " + player.equipped.mainHand.name)
}

function removeWeapon(weapon){
    console.log(player.name + " has unequipped " + player.equipped.mainHand.name)
    player.attack -= weapon.power
    player.equipped.mainHand = ""
    player.inventory.push(weapon)
    
}
function equipGear(item){
    
    player.equipped[item.slot] = item
    player.armor += item.armor
    console.log(player.name + " has equipped " + player.equipped[item.slot].name)

}

function removeGear(item){

    console.log(player.name + " has unequipped " + item.name)
    player.equipped[item.slot] = {}
    player.armor -= item.armor
    player.inventory.push(item)
}
function getRandomNum (n){

    randomNumber = Math.floor(Math.random() * n)
    return parseInt(randomNumber)
}

function checkLevelUp(){
    
    if (player.exp >= player.nextLevel){
        player.level++
        player.maxhp += Math.round(player.hp * level / 7)
        player.hp = player.maxhp
        player.nextLevel *= 1.4
        console.clear ("***" + player.name + " has hit level " + player.level + "!***")
    }
    
}

function lootGenerator(enemy){
    loot = []
    itemRoll = getRandomNum(100)

    if (enemy.modifier === "elden ring"){
        itemRoll += 60
    } else if (enemy.modifier === "demigod"){
        itemRoll += 20
    }

    if (itemRoll < 50){
        console.log("the " + enemy.type + "  no loot")
    } else if (itemRoll >= 50 && itemRoll <= 92){
        if (itemRoll % 4 == 0){
        
            weapon = getWeapon()
            loot.push(weapon)
        } else {
    
            armor = getArmor()
            loot.push(armor)
        }
        return loot
        
    } else {
    

        for (i = 0; i < getRandomNum(4);i++){
            if (getRandomNum(13) % 4 == 0){
                
                weapon = getWeapon()
                loot.push(weapon)
            } else {
            
                armor = getArmor()
                loot.push(armor)
            }
        }
        return loot
    }
    
}

function getWeapon(){
    var uniqueRoll = getRandomNum(100)

    var weaponTemp = weaponArray[getRandomNum(weaponArray.length)]
    var goodNames = ["Sharp", "Great condition", "Shiny", "Quickest"]
    var badNames = ["need repair", "overcumbered", "fat roll", "broken"]

    if (uniqueRoll > 95){
        name = "Perfect " + weaponTemp.name
        power = Math.round(weaponTemp.power + weaponTemp.power * (1 + getRandomNum(100)/80))
    } else if (uniqueRoll > 80 && uniqueRoll <= 95){
        name = goodNames[getRandomNum(goodNames.length)] + " " + weaponTemp.name
        power = Math.round(weaponTemp.power + weaponTemp.power * (1 + getRandomNum(100)/200))
    } else if (uniqueRoll < 20){
        name = badNames[getRandomNum(badNames.length)] + " " + weaponTemp.name
        power = Math.round(weaponTemp.power - weaponTemplate.power * (1 + getRandomNum(100)/300))
        if (power < 1){
            power = 1;
        }
    } else {
        name = weaponTemp.name
        power = weaponTemp.power
    }
    var weapon = new Weapon(name, weaponTemp.type,power,weaponTemp.rarity)

    return weapon
}

function getArmor(){

    var uniqueRoll = getRandomNum(100)
    
    var armorTemp = gearArray[getRandomNum(gearArray.length)]
    var goodNames = ["Sturdy", "Shiny", "Fit", "Moveable"]
    var badNames = ["broken", "torn", "need repair", "most used"]
    
    if (uniqueRoll > 95){ 
        name = "Epic " + armorTemp.name
        armor = Math.round(armorTemp.armor + armorTemp.armor * (1 + getRandomNum(100)/80)) 
    } else if (uniqueRoll > 80 && uniqueRoll <= 95){
        name = goodNames[getRandomNum(goodNames.length)] + " " + armorTemp.name
        armor = Math.round(armorTemp.armor + armorTemp.armor * (1 + getRandomNum(100)/200))
    } else if (uniqueRoll < 20){
        name = badNames[getRandomNum(badNames.length)] + " " + armorTemp.name
        armor = Math.round(armorTemp.armor - armorTemp.armor * (1 + getRandomNum(100)/300))
        if (armor < 1){
            armor = 1
        }
    } else {
        name = armorTemp.name
        armor = armorTemp.armor
    }
    var gear = new Armor(name,armorTemp.type, armor, armorTemp.slot, armorTemp.rarity)

    return gear
}


enemies = ["giant bat", "giant land octopus", "lone wolf", "demihuman", "troll", "putrid corpse","giant lobster","skeleton","banish knight"]

function spawnEnemy(){
    modifier = getModifier(getRandomNum(100))
    type = enemies[getRandomNum(enemies.length)]
    level = generateLevel(modifier)

    hp = generateHP(level,modifier)
    expGiven = Math.round(3.5 * level);
    attack = Math.round(3 * level); 
    armor = 2 * level;
    var enemy = new Foes(type, modifier, hp, level, attack, armor, expGiven)
    reaction = false

    combatEvent(enemy,reaction)
}

function generateHP(level, mod){
    baseHp = 7 * level;
    if (mod === "tarnish"){
        hp = getRandomNum(100)/100 * baseHp
        if (hp < 2){
            hp = 2;
        }
    } else if (mod === "demigod"){
        hp = getRandomNum(100)/100 * level + baseHp 
    } else if (mod === "elden ring"){
        hp = getRandomNum(100)/100 * (level * 1.5) + baseHp
    } else {
        hp = getRandomNum(100)/100 * level / 4 + baseHp
    }

    return Math.round(hp)
}

function generateLevel(mod){
    level = 0;
    if(mod === "tarnish"){
        level = player.level - 2
    } else if (mod === "hollowed"){
        chance = getRandomNum(100)
        if (chance <= 33){
            level = player.level - 1
        } else if (chance > 33 && chance <= 66){
            level = player.level
        } else {
            level = player.level + 1
        }
    } else if (mod === "demigod"){
        chance = getRandomNum(100)
        if (chance <= 50){
            level = player.level + 1
        } else {
            level = player.level + 2
        }
    }
        else if (mod === "elden ring"){
            chance = getRandomNum(100)
            if (chance <= 50){
                level = player.level + 2
            } else {
                level = player.level + 3
            }
            
        }
    if (level < 1){
        level = 1;
    }
    return level;
}

function getModifier(n){

    mod = ""
    if (n <= 30){
        mod = "tarnish"
    } else if (n > 30 && n <= 65){
        mod = "hollowed"
    } else if (n > 65 && n <= 95){
        mod = "demigod"
    } else {
        mod = "elden ring "
    }
    return mod;
}


function killedEnemy(enemy){
    player.foesKilled.push(enemy)
    player.exp += enemy.expGiven
    console.log(player.name + " gained " + enemy.expGiven + "exp!")
    checkLevelUp();
    items = lootGenerator(enemy);
    if (items){
        equipLoot(items)
    }

}

function equipLoot(items){
    for(i = 0; i < items.length; i++){
        items[i].type == "armor" ? console.log("You have looted " + items[i].name + " Armor: " + items[i].armor) : console.log("You have looted " + items[i].name + " Power:" + items[i].power)
        
        answer = rs.keyInYN("Would you like to equip " + items[i].name + "?")
        if (answer){
            
            console.log("item type: " + items[i].type)
            if (items[i].type === "weapon"){
                removeWeapon(player.equipped.mainHand)
                equipWeapon(items[i])
            } else {
                
                gearSlot = items[i].slot

                removeGear(player.equipped[gearSlot])
            
                equipGear(items[i])
            }
            
        } else {
            player.inventory.push(items[i])
        }
    }

}

function playerAttack(enemy, proneEnemy,reaction){
    let move = rs.keyIn("Press \'a\' to attack!\nPress \'r\' to attempt to run!\n",{limit: "ar"})
    if (move === "a"){
    
        proneModifier = 1;
        critModifier = 1;
        if (proneEnemy){
            proneModifier = 2
        }
        criticalRoll = getRandomNum(100)
        if (criticalRoll > 95){
            console.log(player.name + " Scores a Critical Hit!!")
            critModifier = (1 + (getRandomNum(100)/100))
        }
        let attackVal = parseInt(getRandomNum(100)/100 * player.attack * proneModifier * critModifier)
        armorCheck = Math.round(getRandomNum(100)/100 * enemy.armor)
        damage = attackVal - armorCheck
        if (damage < 0){
            damage = 0
        }
         console.log(player.name + " attackVal: " + attackVal + " armorCheck: " + armorCheck + " damage: " + damage)
        console.log(player.name + " attacks for " + damage + "\t(attackVal: " + attackVal + " armorCheck: " + armorCheck + " damage: " + damage +")\n")
        enemy.hp -= damage;
        if (enemy.hp <= 0){
            enemy.isAlive = false;
            console.log ("***You have defeated the " + enemy.modifier + " " + enemy.type + "!***")
            killedEnemy(enemy)
        }
        return false
    } else {
        if (reaction){
            console.log("You cannot run!")
        }
        else{
            runCheck = getRandomNum(100)
            if (runCheck > 50){
                console.log("You flee!\n")
                escapeBattle(enemy)
            } else {
                console.log("You fail to escape!\n")
                prone = true;
                changeProneState(player,prone)
                return false

            }
        }
    }
}

function escapeBattle(enemy){
 
    enemy.isAlive = false;
    
}
function changeProneState(entity, prone){
    if (entity == player){
        player.prone = prone
    } else {
        enemy.prone = prone
    }
}

function enemyAttack(prone, enemy){
    if (enemy.isAlive){
        let attackVal = 0;
        critModifier = 1;
        criticalRoll = getRandomNum(100)
        if (criticalRoll > 95){
            console.log(enemy.type + " Scores a Critical Hit!!")
            critModifier = (1 + (getRandomNum(100)/100))
        }
        if (prone === true){
            attackVal = parseInt(getRandomNum(100)/100 * enemy.attack * 2 * critModifier)
        } else {
            attackVal = parseInt(getRandomNum(100)/100 * enemy.attack * critModifier)
        }
        armorCheck = Math.round(getRandomNum(100)/100 * player.armor)
        damage = attackVal - armorCheck

        if (damage < 0){
                damage = 0
            }
        console.log (enemy.modifier + " " + enemy.type + " attacks for " + damage + "\t(attackVal: " + attackVal + " armorCheck: " + armorCheck + " damage: " + damage + ")\n")
        player.hp -= damage
        if (player.hp <= 0){
            player.isAlive = false;
            playerDead(player)
            
        }
    }
}

function playerDead (player){
    console.log(player.name + " has died...")
    console.log("Level attained: " + player.level)
    console.log("Enemies Killed: " + player.foesKilled.length)
    for (i = 0; i < player.equipped.length; i++){
        console.log("Equipment: " + player.equipped[i])
    }
    module.exports.player = player
    
}

function combatEvent(enemy, reaction){

    let sucessfulRun = false;
    let combatRoll = getRandomNum(100)
    let firstMove = true;
    var pronePlayer = false;
    let proneEnemy = false;
    console.clear("You have encountered a " + enemy.modifier + " " + enemy.type + "!")
    while (player.isAlive && enemy.isAlive){
        if (firstMove){
            firstMove = false;
            if (combatRoll < 10){
                console.log("You have been surprised by the " +  enemy.modifier + " " + enemy.type)
                pronePlayer = true;
            } else if (combatRoll > 90){
                console.log("You have snuck up on a " + enemy.modifier + " " + enemy.type)
                proneEnemy = true;
            }
        }
        
       
        console.log(player.name + " HP:" + player.hp)
        console.log("level " + enemy.level + " " + enemy.modifier + " " + enemy.type + " HP:" + enemy.hp)

        if (combatRoll >= 50){
            successfulRun = playerAttack(enemy, proneEnemy, reaction)
            if (enemy.isAlive){
                enemyAttack(pronePlayer, enemy)
                proneEnemy = false;  
            }
            
        } else {
            enemyAttack(pronePlayer, enemy)
            if (player.isAlive){
                successfulRun = playerAttack(enemy, proneEnemy)

                pronePlayer = false;
            }
            
            
        }

        
        
       


    }


}





var reactions = ["Limgrave", "Caelid", "Altus Plateau", "Liurnia of the lakes","Capital Outskirts", "Mountaintops of the giants" ]


function generatereaction(reactionType){
    console.clear("You have entered the " + reactionType + ", Alert...")
    numberOfEnemies = getRandomNum(10)
    if (numberOfEnemies < 4){
        numberOfEnemies = 4;
    }
    var enemyType = enemies[getRandomNum(enemies.length)]
    modifierInterval = 100/numberOfEnemies;
    enemyLevel = 1;
    for(var i = 0; i <= numberOfEnemies; i++){
        
        if(player.isAlive){
            
            spawnreactionEnemy(enemyLevel, enemyType)
            enemyLevel += modifierInterval
            console.log("to continue " + reactionType + "...\n")
        }

    }
    if (player.isAlive){
    console.log("checkpoint " + reactionType)
    console.log(" tresure looted!!")
    var items = treasureGenerator()
    if(items.length > 0)
    equipLoot(items)
    }
}

function spawnreactionEnemy(modifier, type){
    modifier = getModifier(modifier)
    type = type
    level = generateLevel(modifier)
   
    hp = generateHP(level,modifier)
    expGiven = 5 * level;
    attack = 3 * level; 
    armor = 1 * level;
    var enemy = new Foes(type, modifier, hp, level, attack, armor, expGiven)
    reactionType = true;
    
    combatEvent(enemy, reaction)
}

function treasureGenerator(){
    loot = []
    itemRoll = getRandomNum(100)
    
    console.log("treasure draw " + itemRoll)
    if (itemRoll < 10){
        console.log(" is empty...")
        return loot
    } else if (itemRoll >= 10 && itemRoll <= 35){
        if (itemRoll % 4 == 0){
           
            weapon = getWeapon()
            loot.push(weapon)
        } else {
            
            armor = getArmor()
            loot.push(armor)
        }
        return loot
       
    } else {
       

        for (i = 0; i < getRandomNum(6);i++){
            if (getRandomNum(13) % 4 == 0){
        
                weapon = getWeapon()
                loot.push(weapon)
            } else {

                armor = getArmor()
                loot.push(armor)
            }
        }
        return loot
    }
    
}
function generateEvent(){
    randomNumber = getRandomNum(100)
    
    if (randomNumber <= 33){
        spawnEnemy()
    }
    if (randomNumber > 33 && randomNumber < 37 ){
        reactionType = reactions[getRandomNum(reactions.length)]
        var response = rs.keyInYN("new encounter " + reactionType + " do you still want to continue?")
        if (response){
            generatereaction(reactionType)
        } else {
            console.log("fatroll slowing ...")
        }
    }
    else if (randomNumber > 82 && randomNumber <= 100) {
        incrementHealth()
    }
    
}

function incrementHealth(){
    if (player.hp < player.maxhp){
        player.hp += 1;
        console.log("hp up! hp is now " + player.hp) 
    } else {
    }

}
function getUserInput(){
    response = "";
    while (response != "w"){
        response = rs.keyIn("Press \'w\' to continue...\nPress \'i\' for  status\n",{limit: "wiq"})
        if (response === "i"){
            logCharStatus()
        }
        if (response === "q"){
            player.isAlive = false;
        }
    }
    return response;
}

function logCharStatus(){
    console.log(player.name+"\nHP: "+player.hp+"\nMaxHP: "+player.maxhp+"\nLevel: " + player.level + "\nExp :"+ player.exp+"\nNext Level: " + player.nextLevel)
    console.log("Equipped:\nMain Hand: " + player.equipped.mainHand.name + " Power: " + player.equipped.mainHand.power + " Rarity: " + player.equipped.mainHand.rarity + "\n")
    console.log("Gear:\nChest: " + player.equipped.chest.name + " Armor: "+ player.equipped.chest.armor +"\nLegs: " + player.equipped.legs.name + " Armor: " + player.equipped.legs.armor + "\nHead: " + player.equipped.head.name + " Armor: " + player.equipped.head.armor)
}
var name = rs.question("ole tarnish one ?  What is your name?\n")
var player = new Player(name)

console.log("The fallen leaves tell a story The great Elden Ring was shattered In our home, across the fog, the Lands Between.Now, Queen Marika the Eternal is nowhere to be found,and in the Night of the Black Knives, Godwyn the Golden was the first to perish.Soon, Marika's offspring, demigods all, claimed the shards of the Elden Ring.The mad taint of their newfound strength triggered the Shattering.A war from which no lord arose.A war leading to abandonment by the Greater Will.Arise now, ye Tarnished.Ye dead, who yet live.The call of long-lost grace speaks to us all.Hoarah Loux, chieftan of the badlands.The ever-brilliant Goldmask.Fia, the Deathbed Companion.The loathsome Dung Eater.And Sir Gideon Ofnir, the All-knowing.And one other. Whom grace would again bless.A Tarnished of no renown.Cross the fog, to the Lands Between.To stand before the Elden Ring.and become the Elden Lord.")

begin = rs.keyIn("Press \'w\' to continue\n",{limit: "w"})
console.log("ole rise up tarnish...")
equipGear(gearArray[0])
equipGear(gearArray[1])
equipGear(gearArray[2])
equipWeapon(weaponArray[0])

while(player.isAlive){
    getUserInput();
    generateEvent();
    

}