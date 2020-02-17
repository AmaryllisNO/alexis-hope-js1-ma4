fetch("https://api.rawg.io/api/games/4200")
    .then(response => response.json())
    .then(json => createGameDetails(json))
    .catch(error => console.log(error)); 

var container = document.querySelector(".container");

console.log(container);




function createGameDetails(json) {
    console.dir(json);

   container.innerHTML = `
    <h1>${json.name}</h1>
    <div class="image" style="background-image: url('${json.background_image}')"></div>
    <div class="description">${json.description}</div>`
}


