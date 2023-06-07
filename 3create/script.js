/*
 */

console.log('OK TEST GO');
//

const artPos = document.getElementsByTagName('article')[0];
const nameArray = ['Pierre', 'Paul', 'Panda'];

// color test
// artPos.style.background = 'rgb(20, 24, 245)';

// section creation (REMEMBER scope)
const amount = 3;
const sectionCr = (secNr) => {
  for (let i = 0; i < secNr; i++) {
    const newSection = document.createElement('section');
    artPos.append(newSection);
  }
};
sectionCr(amount);

// paragraph creation and append to section elements (usage of array)
const pCr = () => {
  const s = document.querySelectorAll('section');

  for (let i = 0; i < s.length; i++) {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    const newP = document.createElement('p');
    newP.style.background = `#${randomColor}`;
    s[i].append(newP);
  }
};
pCr();

// add names to paragraph

const addNames = () => {
  const para = document.querySelectorAll('section > p');

  for (let i = 0; i < para.length; i++) {
    const names = document.createTextNode(nameArray[i]);
    para[i].append(names);
    console.log(`test ${[i]}`);
  }
};
addNames();
