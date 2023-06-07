/*
 */

console.log('blablabla');

const newSection = document.createElement('section');

const newStuff = document.createTextNode(
  'Running up that hill, shouting at the sky',
);

newSection.appendChild(newStuff);
const testArt = document.getElementsByTagName('article')[0];
const posMain = document.getElementsByTagName('main')[0];
posMain.insertBefore(newSection, testArt);
testArt.style.background = 'rgb(20, 24, 245)';

// document.body.onload = addElement;

// function addElement() {
//   // create a new div element
//   const newDiv = document.createElement('div');

//   // and give it some content
//   const newContent = document.createTextNode('Hi there and greetings!');

//   // add the text node to the newly created div
//   newDiv.appendChild(newContent);

//   // add the newly created element and its content into the DOM
//   const currentDiv = document.getElementsByTagName('article')[0];

//   currentDiv.insertBefore(newDiv, currentDiv[0]);
//   console.log(currentDiv);
// }
