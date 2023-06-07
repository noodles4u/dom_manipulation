/*
 */

const orderedL = document.querySelector('ol');
orderedL.children[1].style.background = 'red';
orderedL.insertBefore(orderedL.lastElementChild, orderedL.children[0]);
orderedL.lastElementChild.style.color = 'blue'; // new last child got colored
