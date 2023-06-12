/*
 */

document.body.style.padding = '20px';
//

console.log('test');

const sections = document.getElementsByTagName('section');
const input1 = document.getElementById('firstname');
const pwd = document.querySelectorAll("input[id^='pwd']");
const displayText = document.getElementById('display-firstname');
const errShort = 'your password is too short, less than 6 characters';

sections[0].addEventListener('keyup', (e) => {
  if (e.target.id == 'firstname') {
    document.body.style.background = 'coral';
    //   if (e.key.length === 1) {
    //     document.getElementById('displa y-firstname').append(e.key);
    //   }
  }
  const check = (displayText.innerHTML = e.target.value);
  checkLength(check);
});

/// try to remove negative numbers
sections[1].addEventListener('keyup', (e) => {
  if (e.target.value < 0) {
    e.target.value = '';
  } else if (e.target.value < 18) {
    console.log('Damn you young');
  } else {
    document.getElementById('a-hard-truth').style.visibility = 'visible';
  }
});

///
const pCreate = document.createElement('p');
pCreate.setAttribute('id', 'error-message');
pwd.forEach((p) => {
  p.setAttribute('value', 'submit');
  p.setAttribute('minlength', '6');
});
sections[3].append(pCreate);
sections[3].addEventListener('keyup', (e) => {
  pwd.forEach((p) => {
    p.style.border = '1px dotted blue';

    const check = (p.innerHTML = e.target.value);

    if (check.length < 6) {
      pCreate.innerHTML = 'Hello, you need atleast 6 characters';
    } else if (check.length >= 20) {
      pCreate.innerHTML = 'Yo, 20 characters is too many! Tone it down!';
    } else if (pwd[0].value !== pwd[1].value) {
      pCreate.innerHTML = "Your passwords don't match";
    } else {
      pCreate.innerHTML = '';
    }
  });
});

const toggle = document.querySelector('#toggle-darkmode');
console.log(toggle);
addEventListener('change', (e) => {
  if (e.target.value === 'dark') {
    document.body.style.background = '#2d2d2d';
    document.body.style.color = '#f6f6f6';
  }
  if (e.target.value === 'light') {
    document.body.style.background = '#f6f6f6';
    document.body.style.color = '#2d2d2d';
  }
});

init = () => {
  // Clear forms here
  document.getElementById('firstname').value = '';
  pwd.forEach((p) => {
    p.value = '';
  });
};
window.onload = init;
