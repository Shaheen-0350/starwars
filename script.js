const userInput = document.getElementById('userInput');
const characterImage = document.getElementById('characterImage');
const Name = document.getElementById('name');
const gender = document.getElementById('gender');
const species = document.getElementById('species');

function find() {
    fetch("https://akabab.github.io/starwars-api/api/all.json").then(response => response.json()).then(data => {
        characterImage.setAttribute('src', data[userInput.value-1].image);
        Name.innerHTML='Name:  '+(data[userInput.value-1].name).toUpperCase();
        gender.innerHTML='Gender:  '+(data[userInput.value-1].gender).toUpperCase();
        species.innerHTML='Species:  '+(data[userInput.value-1].species).toUpperCase();
    });
    }
