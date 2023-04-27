var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]

function sortedOfAge(arr){
var sortedarray = arr.sort(function(a, b) {
return a.lastName > b.lastName;
})
  filterarray = sortedarray.filter(person => person.age >= 18);
  test = filterarray.reduce(function(final , user){
        final.push("<li>" + user.firstName + " " + user.lastName + " is " + user.age + "</li>")
        return final
    }, [])

  return test
}
console.log(sortedOfAge(peopleArray));