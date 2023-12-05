console.log('Main.js loaded');
fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
    .then(myData => myData.json())
    .then(jsonData => showInConsole(jsonData) & showInDocument(jsonData, true))

function showInConsole(reference){
    console.log(reference)
}

function showInDocument(reference, readable){
    if (readable == false) {
        document.querySelector('body').innerHTML += reference
    } else {
        let referenceArray = reference.results
        
        for (let i = 0; i < referenceArray.length; i++){
            let item = referenceArray[i]
            document.querySelector('body').innerHTML += `
            ${fetchPokemonData(item.url)}
            `;
        }
    }
}


function fetchPokemonData(url){
    fetch(url)
        .then(myData => myData.json())
        .then(jsonData => () => {
            let pokemonData = jsonData;
        })

    let pokemonscript;

    return pokemonscript
}