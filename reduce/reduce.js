function total(arr) {
  return arr.reduce(function(final,num){
  final += num
  return final
  })
 }
 
console.log(total([1,2,3]));


function stringConcat(arr) {
  return arr.reduce(function(final,num){
  final += num
  return final
  },"")
  }
console.log(stringConcat([1,2,3])); 


function totalVotes(arr) {
  return arr.reduce(function(count, voter) {
    return count + voter.voted;
}, 0);
}


var voters = [
   {name:'Bob' , age: 30, voted: true},
   {name:'Jake' , age: 32, voted: true},
   {name:'Kate' , age: 25, voted: false},
   {name:'Sam' , age: 20, voted: false},
   {name:'Phil' , age: 21, voted: true},
   {name:'Ed' , age:55, voted:true},
   {name:'Tami' , age: 54, voted:true},
   {name: 'Mary', age: 31, voted: false},
   {name: 'Becky', age: 43, voted: false},
   {name: 'Joey', age: 41, voted: true},
   {name: 'Jeff', age: 30, voted: true},
   {name: 'Zack', age: 19, voted: false}
];
console.log(totalVotes(voters));


function shoppingSpree(arr) {
  const totalCost = wishlist.reduce((a, b) => {
   return a + b.price
 }, 0);
 return totalCost;
}

var wishlist = [
   { title: "Tesla Model S", price: 90000 },
   { title: "4 carat diamond ring", price: 45000 },
   { title: "Fancy hacky Sack", price: 5 },
   { title: "Gold fidgit spinner", price: 2000 },
   { title: "A second Tesla Model S", price: 90000 }
];

console.log(shoppingSpree(wishlist));

function flatten(arr) {
  return arrays.reduce((a, b) => a.concat(b), []);
  }
  
  var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
  ];
  
  
  
console.log(flatten(arrays));

var voters = [
  {name:'Bob' , age: 30, voted: true},
  {name:'Jake' , age: 32, voted: true},
  {name:'Kate' , age: 25, voted: false},
  {name:'Sam' , age: 20, voted: false},
  {name:'Phil' , age: 21, voted: true},
  {name:'Ed' , age:55, voted:true},
  {name:'Tami' , age: 54, voted:true},
  {name: 'Mary', age: 31, voted: false},
  {name: 'Becky', age: 43, voted: false},
  {name: 'Joey', age: 41, voted: true},
  {name: 'Jeff', age: 30, voted: true},
  {name: 'Zack', age: 19, voted: false}
];

function voterResults(arr) {
  const reducedObject = arr.reduce((a, b) => {
    if(b.age >= 18 && b.age <= 25 && b.voted) {
      a.numYoungVotes++;
    }
    if(b.age >= 18 && b.age <= 25) {
      a.numYoungPeople++;
    }
    if(b.age >= 26 && b.age <= 35 && b.voted) {
      a.numMidVotesPeople++;
    }
    if(b.age >= 26 && b.age <= 35) {
      a.numMidsPeople++;
    }
    if(b.age >= 36 && b.age <= 55 && b.voted) {
      a.numOldVotesPeople++;
    }
    if(b.age >= 36 && b.age <= 55) {
      a.numOldsPeople++;
    }
    return {...a};
  }, {
    numYoungVotes: 0,
    numYoungPeople: 0,
    numMidVotesPeople: 0,
    numMidsPeople: 0,
    numOldVotesPeople: 0,
    numOldsPeople: 0
  });
  return reducedObject;
};


console.log(voterResults(voters)); 
