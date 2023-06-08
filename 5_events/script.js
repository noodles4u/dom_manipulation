const _initTime = Date.now();

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's';
};

// my code
const displayed = document.querySelector('.displayedsquare-wrapper');
const list = document.querySelector('ul');

// const newSquares = () => {
//   const div = document.createElement('div');
//   div.setAttribute('class', 'actionsquare displayedsquare violet');
//   displayed.append(div);
// };
// //

const clickOnSquare = (e) => {
  // console.log(e.target.classList[1]);
  // console.log(getElapsedTime());
  const classAndTime = `
  ${getElapsedTime()}
  Created a new ${e.target.classList[1]} square`;
  // newSquares();
  const div = document.createElement('div');
  div.setAttribute(`class`, `displayedsquare ${e.target.classList}`);
  displayed.append(div);

  const li = document.createElement('li');
  li.append(classAndTime);
  list.append(li);
};

//

const actionSquares = document.querySelectorAll('.actionsquare');
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare);
}
