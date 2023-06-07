/*
 */

console.log('Hello you checking this');
console.log(document.title);
document.title = 'Blabla Modifying the DOM';
// document.body.style.background = '#FF69B4';
document.body.style.background = 'rgb(20, 24, 245)';

let child;
for (child of document.body.children) {
  console.log(child.tagName);
}
