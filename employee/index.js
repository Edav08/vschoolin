var employeeNames = ["Lebron James", "Kevin Love", "Kyrie Irving", "Anthony Davis"]

function Employee(name,jobtitle, salary){
    this.name = name;
    this.jobtitle = jobtitle;
    this.salary = salary;
    this.status = "Full Time";
   
}

Employee.prototype.print = print

function print(){
    console.log("Name: " + this.name + "\nJob Title: " + this.jobtitle + "\nSalary: " + this.salary + "\nStatus: " + this.status)
    console.log(this)
}

var Franklin = new Employee("Franklin Saint", "Drug Boss", 7800000)
var Ghost = new Employee("Ghost Face Killah", "Rapper", 5000000)
var James= new Employee("James SaintPatrick", "Club Owner", 2000000)

Franklin.status = "No Schedule"

Franklin.print()
Ghost.print()
James.print()


var Workers = ["Franklin Saint", "Ghost Face Killah", "James SaintPatrick"]
for (i = 0; i < Workers.length; i++){

    employeeNames.push(Workers[i])
}
console.log(employeeNames)