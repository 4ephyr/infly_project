const checkopen = document.getElementById('gftcode');
const inputbx = document.getElementById('gftinput');
const chkbx = document.getElementById('chkbx');
let appbtn = document.getElementById('appbtn');

chkbx.addEventListener('change', () => {
  if (chkbx.checked == false) {
    checkopen.classList.remove('height');
  } else {
    checkopen.classList.toggle('height');
    if (window.innerWidth>525) {
      inputbx.focus();
    }
  }
});

inputbx.addEventListener('input', () => {
  if (inputbx.value !== '') {
    appbtn.style.backgroundColor = 'black';
    appbtn.style.cursor = 'default';
    appbtn.disabled = false;
  } else {
    appbtn.disabled = true; 
    appbtn.style.cursor = 'not-allowed';
    appbtn.style.backgroundColor = 'lightgray';
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

var validatonText = document.getElementsByClassName('v-msg');
var inputBoxes = document.getElementsByClassName('inbx');
var reviewBox = document.getElementById('rev-div')

function myFunction() {
  let firstEmptyInput = null; // Variable to store the first empty input element
  let allInputsFilled = true;
  for (let i = 0; i < validatonText.length; i++) {
    // Check the validation condition specific to each input element
    if (inputBoxes[i].type === 'email' && !isValidEmail(inputBoxes[i].value)) {
      inputBoxes[i].style.border = '1px solid red';
      validatonText[i].innerHTML = "*Enter a valid Email address";
      allInputsFilled = false;
      if (!firstEmptyInput) {
        firstEmptyInput = inputBoxes[i]; // Store the first empty input element
      }
    } else if (inputBoxes[i].type === 'text' && inputBoxes[i].value.trim() === '') {
      inputBoxes[i].style.border = '1px solid red';
      validatonText[i].innerHTML = "*Please fill this";
      allInputsFilled = false;
      if (!firstEmptyInput) {
        firstEmptyInput = inputBoxes[i]; // Store the first empty input element
      }
    } else {
      inputBoxes[i].style.border = ''; // Reset the border if validation is true
      validatonText[i].innerHTML = ""; // Reset the inner HTML if validation is true
    }
  }

  if (firstEmptyInput) {
    firstEmptyInput.focus(); // Set focus to the first empty input box
  }

  if (allInputsFilled) {
    // Open the div when all input boxes are filled
    const reviewContent = document.getElementById('rev-div-content')
    reviewContent.style.display = 'block';
    const billForm = document.getElementById('bill-form')
    billForm.style.display = 'none';
    const redeemBox = document.getElementById('redeem')
    redeemBox.style.display = 'none';
    const rzpBox = document.getElementById('rzp-box')
    rzpBox.style.display = 'none';
    const billDetailsBox = document.getElementById('billing-addr')
    billDetailsBox.style.display = 'block';
    reviewBox.classList.add('active')
    var editCartLink = document.getElementById('editcart')
    if (!editCartLink.classList.contains('visible')) {
      editCartLink.classList.add('visible')
    }
  }
  
}
function isValidEmail(value) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(value);
}

var promoHiddenBox = document.getElementById('hiddenpromobox')
var promoOpen = document.getElementById('promoopen')
var promoInput = document.getElementById('promoinpt')

promoOpen.addEventListener('click', () => {
  if (promoHiddenBox.classList.contains('height')) {
    promoHiddenBox.classList.remove('height');
  } else {
    promoHiddenBox.classList.toggle('height');
    if (window.innerWidth>525) {
      promoInput.focus();
    }
  }
});
var promoApplyBtn = document.getElementById('promoapply')
promoInput.addEventListener('input', () => {
  if (promoInput.value !== '') {
    promoApplyBtn.style.backgroundColor = 'black';
    promoApplyBtn.style.cursor = 'default';
    promoApplyBtn.disabled = false; // Optional: enable the button
  } else {
    promoApplyBtn.disabled = true; // Optional: disable the button
    promoApplyBtn.style.cursor = 'not-allowed';
    promoApplyBtn.style.backgroundColor = 'lightgray'; // Revert to default button color
  }
});
promoApplyBtn.addEventListener('mouseover', () => {
  if (!promoApplyBtn.disabled && promoInput.value !== '') {
    promoApplyBtn.classList.add('button-hover');
  }
});
promoApplyBtn.addEventListener('mouseout', () => {
  promoApplyBtn.classList.remove('button-hover');
});
var mobMenuIcon = document.getElementById('m-menu');
var mDiv = document.getElementById('mn-bx');

mobMenuIcon.addEventListener('click', (event) => {
  mDiv.classList.toggle('visible');
  // overlay.classList.toggle('visible');
  event.stopPropagation();
});

document.addEventListener('click', (event) => {
  var targetElement = event.target;

  var isClickedInsideDiv = mDiv.contains(targetElement);
  var isClickedMenuIcon = (targetElement === mobMenuIcon);

  if (!isClickedInsideDiv && !isClickedMenuIcon) {
    mDiv.classList.remove('visible');
    // overlay.classList.remove('visible');
  }
});


