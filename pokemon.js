var xhr = new XMLHttpRequest();
var listDiv = document.getElementById("list-div")
var pokemon = [];
xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
        var jsonData = xhr.responseText;
        var data = JSON.parse(jsonData)
        showPokemon(data.objects[0].pokemon);
        
    }
}
console.log(pokemon)

function showPokemon(arr){
    for(var n = 0; n < arr.length; n++){
        var pokemonName = document.createElement("li")
        var info = document.createTextNode(arr[n].resource_uri)
        var ul = document.createElement("ul")
        pokemonName.textContent = arr[n].name
        listDiv.appendChild(ul)
        listDiv.appendChild(pokemonName)
        pokemonName.appendChild(info)
        console.log('pokemon dom loop is running')
    }
    console.log(listDiv)   
}


xhr.open("GET", "https://api.vschool.io/pokemon", true)
xhr.send()