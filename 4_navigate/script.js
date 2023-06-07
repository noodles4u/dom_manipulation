/*
 */

// first part exo
document.body.style.padding = '2em';
const orderedL = document.querySelector('ol');

orderedL.insertBefore(orderedL.lastElementChild, orderedL.children[0]);
orderedL.lastElementChild.style.color = 'blue'; // new last child got colored

// second part exo
const sections = document.querySelectorAll('section');
const thirdSec = sections[2];
// thirdSec.style.background = 'red';

const h2 = document.querySelectorAll('h2');
// thirdSec.firstElementChild.style.color = 'yellow';

sections[1].insertBefore(h2[2], sections[1].children[0]);
sections[2].insertBefore(h2[1], sections[2].children[0]);
