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

const allPara = document.getElementsByTagName('p');

let child;
for (child of allPara) {
  if (child.getAttribute('class', '')) {
    console.log(`(Class: ${child.className}) ${child.innerText}`);
  } else {
    console.log(child.innerText);
  }
}

for (child of allPara) {
  var randomColor = Math.floor(Math.random() * 16777215).toString(16);

  child.style.color = `#${randomColor}`;
  console.log(`#${randomColor}`);
}
