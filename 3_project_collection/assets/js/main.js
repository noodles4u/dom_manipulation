console.log('fuck ye hello');

/////
/////
const progData = [
  {
    title: 'Les Diaboliques',
    time: '15:00',
    location: 'ledoux',
    genre: 'Thriller',
    description:
      'A suspenseful thriller about a plot to murder a man and the subsequent events.',
    year: 1955,
    director: 'Henri-Georges Clouzot',
    main_actors: ['Simone Signoret', 'Véra Clouzot'],
  },
  {
    title: 'Les Glaneurs et la Glaneuse',
    time: '18:00',
    location: 'plateau',
    genre: 'Documentary',
    description:
      'A documentary that explores the lives of modern-day gleaners and the treasures they find.',
    year: 2000,
    director: 'Agnès Varda',
    main_actors: [],
  },
  {
    title: 'Fargo',
    time: '19:00',
    location: 'Ledoux',
    genre: 'Crime',
    description:
      'A dark comedy crime film that follows the story of a car salesman who hires two criminals to kidnap his wife.',
    year: 1996,
    director: 'Joel Coen',
    main_actors: ['Frances McDormand', 'William H. Macy'],
  },
  {
    title: 'A Bill of Divorcement',
    time: '20:00',
    location: 'plateau',
    genre: 'Drama',
    description:
      'A drama about a woman who discovers that her husband, who has been in a mental institution, may not be cured.',
    year: 1932,
    director: 'George Cukor',
    main_actors: ['Katharine Hepburn', 'John Barrymore'],
  },
  {
    title: 'Sans anesthésie ⁄ Without Anesthesia ⁄ Bez Znieczulenia',
    time: '21:00',
    location: 'ledoux',
    genre: 'Drama',
    description:
      'A drama film that follows the story of a young doctor working in a small town and the challenges he faces.',
    year: 1978,
    director: 'Andrzej Wajda',
    main_actors: ['Zbigniew Zapasiewicz', 'Ewa Dalkowska'],
  },
  {
    title: 'Horizons perdus ⁄ Lost Horizon',
    time: '18:00',
    location: 'Plateau',
    genre: 'Adventure',
    description:
      'An adventure film about a group of people who find themselves in a mysterious utopian paradise.',
    year: 1937,
    director: 'Frank Capra',
    main_actors: ['Ronald Colman', 'Jane Wyatt'],
  },
  {
    title: "J'ai faim, j'ai froid + Sans toit ni loi",
    time: '19:00',
    location: 'Ledoux',
    genre: 'Drama',
    description:
      'A drama film that explores the lives of two young women struggling with hunger and homelessness.',
    year: 1984,
    director: 'Agnès Varda',
    main_actors: ['Sandrine Bonnaire'],
  },
  {
    title: 'La ville est tranquille',
    time: '20:30',
    location: 'plateau',
    genre: 'Drama',
    description:
      'A drama film that tells the interconnected stories of various characters living in a working-class neighborhood.',
    year: 2000,
    director: 'Robert Guédiguian',
    main_actors: ['Ariane Ascaride', 'Jean-Pierre Darroussin'],
  },
  {
    title: 'Old Boy ⁄ Oldeuboi',
    time: '21:15',
    location: 'ledoux',
    genre: 'Thriller',
    description:
      'A psychological thriller about a man who seeks revenge after being inexplicably imprisoned for 15 years.',
    year: 2003,
    director: 'Park Chan-wook',
    main_actors: ['Choi Min-sik', 'Yoo Ji-tae'],
  },
  {
    title: 'Le Narcisse noir ⁄ Black Narcissus',
    time: '17:00',
    location: 'ledoux',
    genre: 'Drama',
    description:
      'A drama film about a group of nuns who establish a convent in the Himalayas and face various challenges.',
    year: 1947,
    director: 'Michael Powell, Emeric Pressburger',
    main_actors: ['Deborah Kerr', 'David Farrar'],
  },
  {
    title: 'Morning Glory',
    time: '18:00',
    location: 'plateau',
    genre: 'Drama',
    description:
      'A drama film that follows the story of an aspiring actress who gets her big break in the theater.',
    year: 1933,
    director: 'Lowell Sherman',
    main_actors: ['Katharine Hepburn', 'Douglas Fairbanks Jr.'],
  },
  {
    title: 'Les Diaboliques',
    time: '19:00',
    location: 'ledoux',
    genre: 'Thriller',
    description:
      'A suspenseful thriller about a plot to murder a man and the subsequent events.',
    year: 1955,
    director: 'Henri-Georges Clouzot',
    main_actors: ['Simone Signoret', 'Véra Clouzot'],
  },
  {
    title: 'Die Weisse Holle von Piz Palü',
    time: '20:00',
    location: 'Plateau',
    genre: 'Adventure',
    description:
      'An adventure film about a group of mountaineers who face life-threatening challenges in the Swiss Alps.',
    year: 1929,
    director: 'Arnold Fanck, Georg Wilhelm Pabst',
    main_actors: ['Leni Riefenstahl', 'Gustav Diessl'],
  },
  {
    title: 'La Mort suspendue ⁄ Touching the Void',
    time: '21:15',
    location: 'Ledoux',
    genre: 'Adventure',
    description:
      'An adventure documentary that tells the harrowing story of two mountaineers and their struggle for survival.',
    year: 2003,
    director: 'Kevin Macdonald',
    main_actors: [],
  },
  {
    title: 'Le Père Serge ⁄ Otec Sergej',
    time: '15:00',
    location: 'ledoux',
    genre: 'Drama',
    description:
      'A drama film that follows the story of a Russian Orthodox priest and his spiritual journey.',
    year: 1917,
    director: 'Yakov Protazanov',
    main_actors: ['Ivan Mozzhukhin', 'Vera Orlova'],
  },
  {
    title: 'Les Quatre Filles du docteur March ⁄ Little Women',
    time: '17:00',
    location: 'ledoux',
    genre: 'Drama',
    description:
      'A drama film that portrays the lives and struggles of four sisters growing up during the Civil War.',
    year: 2019,
    director: 'Greta Gerwig',
    main_actors: ['Saoirse Ronan', 'Emma Watson'],
  },
  {
    title: 'Les Glaneurs et la Glaneuse',
    time: '18:00',
    location: 'plateau',
    genre: 'Documentary',
    description:
      'A documentary that explores the lives of modern-day gleaners and the treasures they find.',
    year: 2000,
    director: 'Agnès Varda',
    main_actors: [],
  },
  {
    title: 'Fargo',
    time: '19:15',
    location: 'Ledoux',
    genre: 'Crime',
    description:
      'A dark comedy crime film that follows the story of a car salesman who hires two criminals to kidnap his wife.',
    year: 1996,
    director: 'Joel Coen',
    main_actors: ['Frances McDormand', 'William H. Macy'],
  },
  {
    title: 'The White Reindeer  ⁄ Une légende de Laponie ⁄ Valkoinen Peura',
    time: '20:00',
    location: 'Plateau',
    genre: 'Fantasy',
    description:
      'A fantasy film based on Finnish mythology that tells the story of a woman who transforms into a reindeer.',
    year: 1952,
    director: 'Erik Blomberg',
    main_actors: ['Mirjami Kuosmanen', 'Kalervo Nissilä'],
  },
  {
    title: 'La Jeunesse d’Ivan ⁄ Ivan’s jeugd ⁄ Ivanovo Detstvo',
    time: '21:15',
    location: 'ledoux',
    genre: 'War',
    description:
      'A war drama film that follows the story of a young boy who becomes a spy for the Soviet army during World War II.',
    year: 1962,
    director: 'Andrei Tarkovsky',
    main_actors: ['Nikolay Burlyaev', 'Valentin Zubkov'],
  },
  {
    title: 'La ville est tranquille',
    time: '18:00',
    location: 'plateau',
    genre: 'Drama',
    description:
      'A drama film that tells the interconnected stories of various characters living in a working-class neighborhood.',
    year: 2000,
    director: 'Robert Guédiguian',
    main_actors: ['Ariane Ascaride', 'Jean-Pierre Darroussin'],
  },
];

/////
/////
/////

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

// cineProg(progData[0]);
// cineProg(progData[1]);
// cineProg(progData[3]);

progData.forEach((el) => {
  cineProg(el);
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

const fetching =()=> {
fetch(http://www.omdbapi.com/?apikey=[your-apikey]&s=batman)
 .then((success) => { success.json() } )
 .then((movies) => { console.log(movies) } )
 .catch((error)=>{ console.log(error)});

}