/*
 */

document.body.style.padding = '20px';
//

console.log('test');

const section = document.getElementsByTagName('section');
const input1 = document.getElementById('firstname');
console.log(section);
console.log(input1);
// section[0].input.append('uhu');
input1.append('uhu');

section[0].addEventListener('keyup', (e) => {
  if (e.target.id == 'firstname') {
    document.body.style.background = 'red';
    if (e.key.length === 1) {
      document.getElementById('display-firstname').append(e.key);
    }
  }
});
init = () => {
  // Clear forms here
  document.getElementById('firstname').value = '';
};
window.onload = init;
