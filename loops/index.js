/*
var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
var cItems = []
for (var i = 0; i < officeItems.length; i++) {
  if(officeItems[i].startsWith("c")){
  cItems.push(officeItems[i]);
  }
}

console.log(cItems);
*/

var peopleWhoWantToSeeMadMaxFuryRoad  = [
  {
    name: "Mike",
    age: 12,
    gender: "male"
  },{
    name: "Madeline",
    age: 80,
    gender: "female"
  },{
    name: "Cheryl",
    age: 22,
    gender: "female"
  },{
    name: "Sam",
    age: 30,
    gender: "male"
  },{
    name: "Suzy",
    age: 4,
    gender: "female"
  }
]

/*
for( let i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++ ) {
  if( peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
      console.log("old enough");
  } else {
      console.log("not old enough");
  }
}
*/

for( let i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++ ) {
  if( peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
       console.log( peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see Mad Max");
  } else {
      console.log( peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max");
  }
}