var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"

var newArr = forception(people, alphabet)

function forception(people, alphabet) {
    
    let newArr= []
    for (let i = 0; i < people.length; i++){
        newArr.push(people[i])
        for (let n = 0; n < alphabet.length; n++){
            newArr.push(alphabet[n])
        }
    }
    return newArr
}

newArr.forEach(element => {
    console.log(element)
});