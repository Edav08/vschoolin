/*
function findLargestNumb() {
  let maxNumb = [0];
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > maxNumb) {
      maxNumb = arguments[i];
    }
  }
  console.log(maxNumb);
}
findLargestNumb(6, 13, 250, 3);
findLargestNumb(3, 5, 2, 8, 1)
findLargestNumb(-13, 40, 3, 0, 19, 22)
*/

/*
var secondChar = ["$hello!", "%%^%%", "test!"]
var thirdChar = ["#3", "$$$", "C%4!", "Hey!"]
var fourthChar= ["yellow", "green", "^up^", "down", "dog"]
var char = []


for (var i = 0; i < secondChar.length; i++) {
  if(secondChar[i].endsWith("!")){
  char.push(secondChar[i]);
  }
}

console.log(char);

for (var i = 0; i < thirdChar.length; i++) {
  if(thirdChar[i].endsWith("!")){
  char.push(thirdChar[i]);
  }
}

console.log(char);

for (var i = 0; i < fourthChar.length; i++) {
  if(fourthChar[i].endsWith("h")){
  char.push(fourthChar[i]);
  }
}

console.log(char);
*/

function isDivisible(num1, num2){
  return !(num1%num2)?true:false;
}
console.log(isDivisible(4, 2)) 
console.log(isDivisible(9, 3)) 
console.log(isDivisible(15, 4))
