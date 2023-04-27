
function collectAnimals(...animals){
    return animals
}
console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"));

function combineFruit(fruit, sweets, vegetables){
    return {fruit,sweets,vegetables}
}

console.log(combineFruit(["apple", "pear"],["cake", "pie"],["carrot"]))



const vacation = {  
    location: "Burly Idaho",
    duration: "2 weeks"
  };
  
const { location, duration } = vacation
function parseSentence(location, duration){
return `We're going to have a good time in ${location} for ${duration}`
}
console.log(parseSentence(location, duration))

 const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr){
  let [firstFav, secondFav, thirdFav] = favoriteActivities
   return `My top three favorite activities are, ${firstFav}, ${secondFav} and ${thirdFav}`; }

console.log(returnFavorites(favoriteActivities))

function combineAnimals(...animalGroups) {  
let [firstGroup,secondGroup,thirdGroup] = animalGroups
return [...firstGroup,...secondGroup, ...thirdGroup]}
const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];
console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals)); 



function product(...numbers){
    return numbers.reduce((x, y) => {return x * y}, 1) }
console.log(product(4,6,2,4,5))


function unshift(array, a, b, c, d, e) {  
const unshift = (...items) => {
firstItem = items.shift()
return ([...items,...firstItem])}
}



function populatePeople(names){
    return names.map( name => {
        let [firstName, secondName] = name.split(" ")
        return (`firstName: ${firstName}, secondName: ${secondName}`)
    })
}
console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))

