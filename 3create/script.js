/*
 */

console.log('OK TEST GO');
//

const newP = document.createElement('p');
// const newStuff = document.createTextNode(
//   'Running up that hill, shouting at the sky',
// );

const nameArray = ['Pierre', 'Paul', 'Panda'];
// const nameTag = 'pierre';

const artPos = document.getElementsByTagName('article')[0];

// color test
artPos.style.background = 'rgb(20, 24, 245)';

// const randoColorP = (amountElements) => {
//   for (let i = 0; i < amountElements; i++) {
//     newSection.appendChild(newStuff);
//     newSection.append(newP);
//     newP.append(nameTag);
//   }
// };

// randoColorP(3);
let s = document.querySelectorAll('section');
const sectionCr = (secNr) => {
  for (let i = 0; i < secNr; i++) {
    const newSection = document.createElement('section');
    artPos.append(newSection);
  }
};
sectionCr(3);
