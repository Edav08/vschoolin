var rs = require("readline-sync")

var x = +rs.question("What is the first number?\n");
var y = +rs.question("What is the second number?\n");

var options = ["+","-","*","/"];

var op = rs.keyInSelect(options, "What operation would you like to perform?\n")