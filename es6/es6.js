const carrots = ["bright orange", "ripe", "rotten"]

function mapVegetables(arr) {
    return arr.map((carrot) => {
        return { type: "carrot", name: carrot }
    })
}

const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

function filterForFriendly(arr) {
    return arr.filter((person) => {
        return person.friendly
    })
}

console.log(filterForFriendly(people))


let a = 2
let b = 6

doMathSum = (a, b) => {
    return a + b
}

console.log(doMathSum(a, b))

var produceProduct = function(a, b) {
    return a * b
}

produceProduct = (a,b) => {
    return a * b
}

console.log(produceProduct(5,6))


printString = (x = "Jane", y = "Doe", z = 100) => {
    return (`Hi ${x} ${y}, how do you feel to be ${z}?`)
}

console.log(printString("jane"))