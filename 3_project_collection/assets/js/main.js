const fetchy = async (callback) => {
  let progData;
  await fetch('./assets/js/json/cine.json', {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then((response) => {
      return response.json();
    })

    .then((data) => {
      progData = data;
      callback(progData);
    })
    .catch((error) => {
      error = 'lol error';
      console.log(error);
    });
};

const cineProg = (movie) => {
  const main = document.querySelector('main');

  let movieCard = document.createElement('div');
  movieCard.setAttribute('class', 'movie-card');

  let topCard = document.createElement('div');
  topCard.setAttribute('class', 'top-card');

  let rightData = document.createElement('div');
  rightData.setAttribute('class', 'right-data');

  let figure = document.createElement('figure');
  figure.setAttribute('class', 'film-img');
  let filmImg = document.createElement('img');

  let bottomCard = document.createElement('div');
  bottomCard.setAttribute('class', 'bottom-card');

  let locationCard = document.createElement('div');
  locationCard.setAttribute('class', 'location');
  let locationP = document.createElement('p');
  let timeP = document.createElement('p');

  let uList = document.createElement('ul');
  let liEl = document.createElement('li');
  let movieTitle = document.createElement('h2');
  let movieDirector = document.createElement('h3');
  ////
  ////
  movieTitle.innerText = movie.title;
  movieDirector.innerText = movie.director;
  liEl.innerText = movie.genre;
  timeP.innerText = movie.time;
  locationP.innerText = movie.location;

  ////
  ////
  uList.append(liEl);
  rightData.append(uList);

  locationCard.append(locationP);
  locationCard.append(timeP);

  rightData.append(movieTitle);
  rightData.append(movieDirector);
  rightData.append(locationCard);

  figure.append(filmImg);
  topCard.append(figure);
  topCard.append(rightData);
  movieCard.append(topCard);
  movieCard.append(bottomCard);

  main.append(movieCard);
};

fetchy((data) => {
  data.forEach((el) => {
    cineProg(el);
  });
});

// load json async later https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON

// Attribution tmdb to be used later

// let attribution = document.createElement('div');
// let imgAttr = document.createElement('img');

// imgAttr.style.maxHeight = '3em';
// imgAttr.src =
//   'https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg';

// attribution.append(imgAttr);
// document.body.append(attribution);
