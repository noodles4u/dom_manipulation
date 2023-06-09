/*
 */

document.body.style.padding = '20px';
//

console.log('test');

const sections = document.getElementsByTagName('section');
const input1 = document.getElementById('firstname');
const displayText = document.getElementById('display-firstname');

const checkLength = (check) => {
  if (check.length < 6) {
    console.log('type more');
    console.log(check.length);
  }
};
sections[0].addEventListener('keyup', (e) => {
  if (e.target.id == 'firstname') {
    document.body.style.background = 'coral';
    //   if (e.key.length === 1) {
    //     document.getElementById('display-firstname').append(e.key);
    //   }
  }
  const check = (displayText.innerHTML = e.target.value);
  checkLength(check);
});

/// try to remove negative numbers
sections[1].addEventListener('keyup', (e) => {
  if (e.target.value < 18) {
    console.log('you young');
  } else {
    document.getElementById('a-hard-truth').style.visibility = 'visible';
  }
});

init = () => {
  // Clear forms here
  document.getElementById('firstname').value = '';
};
window.onload = init;
