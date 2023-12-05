console.log('Main.js loaded');
fetch('https://mbo-sd.nl/period3-fetch/ict')
    .then(myData => myData.json())
    .then(jsonData => showInConsole(jsonData) & showInDocument(jsonData, true))

function showInConsole(reference){
    console.log(reference)
}

function showInDocument(reference, readable){
    if (readable == false) {
        document.querySelector('body').innerHTML += reference
    } else {
        let referenceArray = reference
        
        for (let i = 0; i < referenceArray.length; i++){
            let item = referenceArray[i]
            document.querySelector('body').innerHTML += `
            <img id="sid-${i}-image" src="${item.image}">

            <h2 id="sid-${i}">${item.title}</h2>

            <p id="sid-${i}-type">${item.type}</p>
            <p id="sid-${i}-location">${item.location}</p>
            
            <br>
            `;
        }
    }
}


