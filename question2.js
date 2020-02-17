fetch("https://api.rawg.io/api/games")
    .then(response => response.json())
    .then(json => createGames(json))
    .catch(error => console.log(error));

const div = document.querySelector(".results");

function createGames(json) { 
    
    console.log(json.results);
    for (let index = 0; index < json.results.length; index++) {
        div.innerHTML += `<div class="${json.results[index].slug}">
                    <h2>${json.results[index].name}</h2>
                    <img src="${json.results[index].background_image}" alt="${json.results[index].name}">
                </div>`
    }
}
