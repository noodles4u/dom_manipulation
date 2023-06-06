/*
 */

console.log('Test, is this responding?');
// const important = document.querySelectorAll('.important');
const important = document.getElementsByClassName('important');

// add title attribute to .important class
for (const attri of important) {
  attri.setAttribute('title', 'teeest');
}
// hide images without .important class
for (const imgDisplay of document.images) {
  if (imgDisplay.className !== 'important') {
    imgDisplay.setAttribute('style', 'display:none');
    console.log('Images are hidden');
  }
}
