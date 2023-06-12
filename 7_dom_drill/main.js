const list = document.querySelectorAll('li');
const ul = document.querySelector('ul');
const body = document.body;
// console.log(list);

// Array.from(list).forEach((i) => {
//   console.log(i.innerHTML);
// });
console.log(ul.childNodes);
// let test = [];
// const findStuff = test.find((f) => {
//   return f.innerText === 'Fast and Furious';
// });

const importantMessage =
  "The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family.";

/// New with 2 for loops
const itemsLi = ul.childNodes;
//
// loop 1
for (let i = 0; i < itemsLi.length; i++) {
  if (itemsLi[i].nodeType === 1) {
    // console.log(itemsLi[i].innerText);
    //style
    itemsLi[i].style.cursor = 'pointer';
    //  eventListener important message
    itemsLi[i].addEventListener('click', (e) => {
      if (e.target.className === 'important') {
        alert(importantMessage);
      } else alert(e.target.innerHTML);
    });

    //  find content
    if (itemsLi[i].innerText === 'Fast and Furious') {
      console.log('found');
      itemsLi[i].setAttribute('class', 'important');

      ul.insertBefore(itemsLi[i], ul.childNodes[0]);
    }

    //
    // loop 2
    for (let a = 0; a < ul.childNodes.length; a++) {
      if (itemsLi[i].isEqualNode(itemsLi[a]) && itemsLi[i] !== itemsLi[a]) {
        console.log('removed');
        ul.removeChild(itemsLi[a]);
      }
    }
  }
}

body.addEventListener('keyup', (e) => {
  const liRandom = itemsLi;

  if (e.isComposing || e.key === 'r' || e.key === 'R') {
    for (let o = 0; o < liRandom.length / 2; o++) {
      if (itemsLi[o].nodeType === 1) {
        let rando = Math.floor(Math.random() * liRandom.length);

        if (o < liRandom.length / 2) {
          ul.insertBefore(liRandom[rando], itemsLi[1]);

          console.log(rando);
        } else ul.append(liRandom[rando]);
      }
    }
  }
  if (e.isComposing || e.key === 'd' || e.key === 'D') {
    let impo = document.getElementsByClassName('important')[0];
    // impo.style.background = 'red';
    console.log(impo);
    let clone;
    clone = impo.cloneNode(impo);

    impo.insertAdjacentElement('afterend', clone);
  }
});

// create element

let newDiv = document.createElement('div');
newDiv.innerText = 'hello world';

ul.prepend(newDiv);

// outer.HTHML needed when using AdjacentElement
// ul.insertAdjacentHTML('beforebegin', newDiv.outerHTML);
// ///// OLD
// for (each of ul.childNodes) {
//   if (each.nodeType === 1) {
//     //style
//     each.style.cursor = 'pointer';

//     // list items
//     console.log(each.innerText);

//     // for (let i = 0; i < ul.childNodes.length; i++) {
//     //   if (each.isEqualNode(ul.childNodes[i]) && ul.childNodes !== i) {
//     //     console.log(true);
//     //   }
//     // }
//     //   if (each.innerText == ul.childNodes[i].innerText) {
//     //     console.log(each.innerText);
//     //     console.log(ul.childNodes[i].innerText);
//     //   }
//     // }

//     // if (ul.childNodes[0].innerText.isEqualNode(each.innerText)) {
//     //   console.log(each);
//     //   console.log('yeeeeeeeeeeee');
//     // }

//     if (each.innerText === 'Fast and Furious') {
//       console.log('found');
//       each.setAttribute('class', 'important');

//       ul.insertBefore(each, ul.childNodes[0]);
//     }

//     each.addEventListener('click', (e) => {
//       if (e.target.className === 'important') {
//         alert(importantMessage);
//       } else alert(e.target.innerHTML);
//     });
//   }
// }

// TESTS
//
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
