var Name = "HelLo"
var Names = "Hello World"

var uppercaseHello = Name.toUpperCase()
console.log(uppercaseHello)
var lowercaseHello = Name.toLowerCase()
console.log(lowercaseHello)

function middle(Names) {
    return [Math.floor(Names.length / 2)];
  }
  
console.log(middle(Names));

  
function middle(Name) {
    return [Math.floor(Name.length / 2)];
  }
  
console.log(middle(Name));

var First2 = Name.slice(0,2)
console.log(First2)

var First3 = Names.slice(0,5)
console.log(First3)


 
var Name_len = Name.length;
var changed_string = '';
 
for(var i=0 ; i<Math.ceil(Name_len/2) ; i++)
{
    changed_string+=Name[i].toUpperCase();
}
 
for(var i=Math.ceil(Name_len/2) ; i<Name_len ; i++)
{
    changed_string+=Name[i];
}
 
console.log(changed_string);
 

var Names_len = Names.length;
var changes_string = '';
 
for(var i=0 ; i<Math.ceil(Names_len/2) ; i++)
{
    changes_string+=Names[i].toUpperCase();
}
 
for(var i=Math.ceil(Names_len/2) ; i<Names_len ; i++)
{
    changes_string+=Names[i];
}
 
console.log(changed_string);
 