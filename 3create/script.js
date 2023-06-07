/*
 */

console.log('OK TEST GO');
//

const artPos = document.getElementsByTagName('article')[0];
const nameArray = ['Pierre', 'Paul', 'Panda', 'Hector', 'Jacques', 'Jean'];

// color test
// artPos.style.background = 'rgb(20, 24, 245)';

// HSL color randomizer
const randomColor = () => {
  const h = Math.floor(Math.random() * 360);
  s = Math.floor(Math.random() * 100) + '%';
  l = Math.floor(Math.random() * 100) + '%'; //full

  return `hsl(${h},${s},${l})`;
};
//

// section creation (REMEMBER scope)
const amount = 6;
const sectionCr = (secNr) => {
  for (let i = 0; i < secNr; i++) {
    const newSection = document.createElement('section');
    artPos.append(newSection);

    // if (container) {
    //     console.log('one already existed');

    //     coinflip = Math.random();
    //     console.log(coinflip);
    //     if (coinflip < 0.5) {
    //       artPos.insertBefore(newSection, container);
    //       newSection.style.border = '2px dotted blue';
    //     } else {
    //       artPos.append(newSection);
    //       console.log('uhu');
    //       newSection.style.border = '2px dotted red';
    //     }
    //   } else {
    //     artPos.append(newSection);
    //   }
  }
};
sectionCr(amount);

// paragraph creation and append to section elements (usage of array)
const sect = document.querySelectorAll('section');
const pCr = () => {
  for (let i = 0; i < sect.length; i++) {
    // var randomColor = Math.floor(Math.random() * 16777215).toString(16);

    const newP = document.createElement('p');
    newP.style.background = `${randomColor()}`;
    sect[i].append(newP);

    // convert l of hsl to number and remove  %
    var lNumber = l.replace('%', '');
    // console.log(lNumber);

    if (lNumber > 50) {
      //   console.log('too bright');
      newP.style.color = 'black';
    } else {
      //   console.log('too dark');
      newP.style.color = 'white';
    }
  }
};
pCr();

// add names to paragraph

const addNames = () => {
  const para = document.querySelectorAll('section > p');

  for (let i = 0; i < para.length; i++) {
    const names = document.createTextNode(nameArray[i]);
    para[i].append(names);
  }
};
addNames();

// Shuffler
const shuffleSections = () => {
  const container = document.querySelector('section');
  for (let i = 0; i < sect.length; i++) {
    console.log('hello');
    if (container) {
      console.log(`one existed ${[i]}`);

      coinflip = Math.random();
      console.log(coinflip);
      if (coinflip < 0.5) {
        artPos.insertBefore(sect[i], sect[0]);
        // sect[i].style.border = '2px dotted blue';
      } else {
        artPos.append(sect[i]);
        // console.log('uhu');
        // sect[i].style.border = '2px dotted red';
      }
    } else {
      artPos.append(newSection);
    }
  }
};

shuffleSections();
