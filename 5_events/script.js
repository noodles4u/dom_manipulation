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
const randomColor = () => {
  r = Math.floor(Math.random() * 256);
  g = Math.floor(Math.random() * 256);
  b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};
document.addEventListener('keydown', (e) => {
  if (e.isComposing || e.key === ' ') {
    const randomColor = () => {
      r = Math.floor(Math.random() * 256);
      g = Math.floor(Math.random() * 256);
      b = Math.floor(Math.random() * 256);
      return `rgb(${r}, ${g}, ${b})`;
    };

    document.body.style.background = randomColor();

    const classAndTime = `
    ${getElapsedTime()}
    Created a new color ${randomColor()} while pressing space`;

    const li = document.createElement('li');
    li.append(classAndTime);
    list.append(li);
  }
  // do something
});

document.addEventListener('keydown', (e) => {
  if (e.isComposing || e.key === 'l' || e.key === 'L') {
    const li = document.querySelectorAll('li');
    Array.from(li).forEach((item) => {
      item.remove();
    });
  }
});

document.addEventListener('keydown', (e) => {
  if (e.isComposing || e.key === 's' || e.key === 'S') {
    const squares = document.querySelectorAll('.displayedsquare');
    Array.from(squares).forEach((item) => {
      item.remove();
    });
  }
});
const clickDisplay = (e) => {
  if (e.target.tagName == 'DIV') {
    return alert(`${e.target.classList[2]}`);
  }
};

displayed.addEventListener('click', clickDisplay);
