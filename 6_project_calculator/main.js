console.log('%chello', 'color:blue');
// The "result" button
function computeResult(str) {
  return Function('return ' + str)();
}

const a = '(13 + 17) / 3';
console.log(computeResult(a)); // Should display 10

//
let main = document.querySelector('main');
document.body.style = 'font-family:system-ui';

let displayView = document.createElement('p');
displayView.style = 'text-align:right';

let displaySection = document.createElement('section');

displaySection.append(displayView);
main.append(displaySection);

let calcSection = document.createElement('section');

main.append(calcSection);

let calcArray = [
  '(',
  ')',
  '%',
  'AC',
  7,
  8,
  9,
  '/',
  4,
  5,
  6,
  '*',
  1,
  2,
  3,
  '-',
  0,
  '.',
  '=',
  '+',
];
console.log(calcArray.length);

////
const createBlocks = () => {
  calcArray.forEach((item) => {
    let div = document.createElement('div');
    let p = document.createElement('p');
    p.innerText = item;
    div.style = 'border: 1px dotted gray; background:white; cursor:pointer;';
    p.style = 'text-align:center;cursor:pointer;';
    div.setAttribute('class', 'box');
    div.append(p);
    calcSection.append(div);
  });
};

createBlocks(20);

let arrInput = [];
//Calc functions

// const initial = 0;
// const calc = arrInput.reduce(
//   (el, currentEL) => parseFloat(el) + parseFloat(currentEL),
//   initial,
// );

// const array1 = ['3', '2', '+', '2'];
// let initial = 0;
// const calc = () => {
//   for (let i = 0; i < array1.length; i++) {
//     let a = initial + array1[i];
//     initial = a;
//     console.log(a);
//   }
//   let aah = Number('1+3*6');
//   return aah;
// };

/// CSS style for calculator
calcSection.style =
  'background:coral; padding: 1em; font-family:system-ui;display:grid;gap: 1rem; grid-template-columns:repeat(4,1fr);';
displaySection.style =
  'background:green; padding: 1em; display:block;min-height:3.3em';

const calcString = (array) => {
  return array.join('');
};

// create css class
let style;
// document.getElementsByTagName('head')[0].appendChild(style);
// style = s
// document.getElementById('someElementId').className = 'clicked';

// Click Event
let div = document.querySelectorAll('div');
Array.from(div).forEach((el) => {
  el.addEventListener('click', (e) => {
    console.log(e.currentTarget.firstChild);
    // ternary operator
    e.currentTarget.firstChild.innerText === 'AC'
      ? [
          (displayView.innerText = ''),
          (arrInput = []),
          (el.style.border = '1px dotted black'),
          Array.from(div).forEach((item) => {
            item.style = 'border:1px dotted black; background:white;';
          }),
        ]
      : e.currentTarget.firstChild.innerText === '='
      ? [
          (displayView.innerText = computeResult(calcString(arrInput))),
          (arrInput = [computeResult(calcString(arrInput))]),
          (displaySection.style.background = 'blue'),
          (displayView.style.color = 'white'),
          Array.from(div).forEach((item) => {
            item.style = 'border:1px dotted black; background:white;';
          }),
        ]
      : e.target.className == 'box' || e.target.parentElement.className == 'box'
      ? [
          displayView.append(e.currentTarget.firstChild.innerText),
          (e.currentTarget.style = 'border: 1px dotted yellow'),
          (style = document.createElement('style')),
          (style.innerHTML = '.clicked { color: #f00; }'),
          e.currentTarget.appendChild(style),

          arrInput.push(e.currentTarget.firstChild.innerText),
        ]
      : (displayView.innerText =
          'It seems like something went wrong, our excuses');
  });
});
