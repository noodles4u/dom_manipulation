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

const h2 = document.querySelectorAll('h2');
thirdSec.firstElementChild.style.color = 'yellow';

sections[1].insertBefore(h2[2], sections[1].children[0]);
sections[2].insertBefore(h2[1], sections[2].children[0]);

// third part
const body = document.querySelector('body');
// body.style.background = 'red';
const kids = body.children;
console.log(body.children);
console.log(kids);

// not necessary but fun, create array from HTML collection
Array.from(kids).forEach((kid) => {
  kid.style.backgroundColor = 'red';
});

document.body.lastChildElement.remove();
console.log(document.body.lastChild.text);
let bodyNode = document.querySelectorAll('body');

console.log(body.children[body.children.length - 2]);
let footer = body.children[body.children.length - 2];
footer.remove();
document.body.lastElementChild.remove();
