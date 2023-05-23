const checkopen = document.getElementById('gftcode');
const inputbx = document.getElementById('gftinput');
const chkbx = document.getElementById('chkbx');
let appbtn = document.getElementById('appbtn');

chkbx.addEventListener('change',()=>{
    if (chkbx.checked == false) {
        checkopen.classList.remove('height');
    }
    else{
        checkopen.classList.toggle('height')
         inputbx.focus()
         inputbx.sty
    }
})
inputbx.addEventListener('input', () => {
  if (inputbx.value !== '') {
    appbtn.style.backgroundColor = 'black';
    appbtn.style.cursor = 'default';
    appbtn.disabled = false; // Optional: enable the button
  } else {
    appbtn.disabled = true; // Optional: disable the button
    appbtn.style.cursor = 'not-allowed';
    appbtn.style.backgroundColor = 'lightgray'; // Revert to default button color
  }
});

appbtn.addEventListener('mouseover', () => {
  if (!appbtn.disabled && inputbx.value !== '') {
    appbtn.classList.add('button-hover');
  }
});

appbtn.addEventListener('mouseout', () => {
  appbtn.classList.remove('button-hover');
});

