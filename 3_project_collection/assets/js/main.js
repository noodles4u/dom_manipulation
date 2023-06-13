console.log('fuck ye hello');
const main = document.querySelector('main');

let movieCard = document.createElement('div');
movieCard.setAttribute('class', 'movie-card');

let topCard = document.createElement('div');
topCard.setAttribute('class', 'top-card');

let rightData = document.createElement('div');
let figure = document.createElement('figure');
figure.setAttribute('class', 'film-img');
let film_img = document.createElement('img');

let bottomCard = document.createElement('div');
bottomCard.setAttribute('class', 'bottom-card');

let locationCard = document.createElement('div');
locationCard.setAttribute('class', 'location');

let uList = document.createElement('ul');
let liEl = document.createElement('li');
let movieTitle = document.createElement('h2');
let movieDirector = document.createElement('h3');

uList.append(liEl);
topCard.append(uList);

topCard.append(movieTitle);
topCard.append(movieDirector);
topCard.append(locationCard);
movieCard.append(topCard);
movieCard.append(bottomCard);

main.append(movieCard);
console.log(main);
