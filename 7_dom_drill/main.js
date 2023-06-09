console.log('yeehaa');

const list = document.querySelectorAll('li');
const ul = document.querySelector('ul');
// console.log(list);

// Array.from(list).forEach((i) => {
//   console.log(i.innerHTML);
// });
console.log(ul.childNodes);
// let test = [];
// const findStuff = test.find((f) => {
//   return f.innerText === 'Fast and Furious';
// });
ul.style.cursor = 'pointer';
console.log(ul.childNodes[0]);
for (each of ul.childNodes) {
  if (each.nodeType === 1) {
    console.log(each.innerText);
    if (each.innerText === 'Fast and Furious') {
      console.log('found');
      each.setAttribute('class', 'important');

      ul.insertBefore(each, ul.childNodes[0]);
    }
    each.addEventListener('click', (e) => {
      alert(e.target.innerHTML);
    });
  }
}
// console.log(ul.childNodes);
// console.log(ul.children[0]);
// console.log(ul.children[ul.children.length - 1].innerHTML);
// console.log(ul.children[0].childNodes[0].nodeValue);
// console.log(ul.children[ul.children.length - 1].childNodes[0].nodeValue);

// console.log(ul.children[0].innerHTML);

// console.log(ul.childNodes[ul.childNodes.length - 2].innerText);
// const li = document.createElement('li');
// li.innerHTML = 'blaaa';
// ul.append(li);
// console.log(ul.children[ul.children.length - 1].childNodes[0].nodeValue);
