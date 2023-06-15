console.log('%chello', 'color:blue');
// The "result" button
function computeResult(str) {
  return Function('return ' + str)();
}

const a = '(13 + 17) / 3';

console.log(computeResult(a)); // Should display 10
let main = document.querySelector('main');

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
const createBlocks = (blocks) => {
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
calcSection.style =
  'background:coral; padding: 1em; font-family:system-ui;display:grid;gap: 1rem; grid-template-columns:repeat(4,1fr);';

let div = document.querySelectorAll('div');
Array.from(div).forEach((el) => {
  el.addEventListener('click', (e) => {
    (e.target.className == 'box') | (e.target.parentElement.className == 'box')
      ? (e.currentTarget.style = 'background:yellow')
      : null;
  });
});
