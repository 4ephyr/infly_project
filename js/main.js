const link1 = document.getElementById('svg1');
const svg1 = document.getElementById('dropicon');
const boxes = document.getElementsByClassName('incheight');
const hello = document.getElementsByClassName('test');
const items = document.getElementsByClassName('item1');
const itempic = document.getElementsByClassName('itempic');
const hiddenbox = document.getElementById('hiddenbox');
const sec3 = document.getElementsByClassName('sec3full')
const x = boxes.length;
const y = items.length;

link1.addEventListener('mouseover',()=>{
  svg1.classList.add('svghover');
});

link1.addEventListener('mouseout',()=>{
  svg1.classList.remove('svghover');
});

const handleMouseOver = (index)=>{
  hello[index].classList.add('height');
};

const handleMouseOut = (index)=>{
  hello[index].classList.remove('height');
};

for (let i = 0; i < x; i++) {
  boxes[i].addEventListener('mouseover',()=>{
    handleMouseOver(i);
  });

  boxes[i].addEventListener('mouseout',()=>{
    handleMouseOut(i);
  });
}

for (let j = 0; j < y; j++) {
  items[j].addEventListener('mouseover',()=>{
    itempic[j].classList.add('box-shadow');
  });

  items[j].addEventListener('mouseout',()=>{
    itempic[j].classList.remove('box-shadow');
  });
}

for (let j = 0; j < y; j++) {
  items[j].addEventListener('click', (event) => {
    event.stopPropagation(); // Stop the click event from propagating to the document
    console.log(hiddenbox);
    hiddenbox.classList.toggle('width');
  });
} 

document.addEventListener('click', (event) => {
  const clickedElement = event.target;
  const sideNav = document.getElementById('hiddenbox');

  // Check if the clicked element is within the side navigation or its child elements
  if (!sideNav.contains(clickedElement)) {
    closeNav();
  }
});

function closeNav() {
  document.getElementById('hiddenbox').classList.remove('width');
}
// sec3.addEventListener('click',()=>{
//   if(hiddenbox.classList.contains('width')){
//         hiddenbox.classList.remove('width')
//       }
//         else{
//           console.log("Error")
//         }
      
//     })

// function testfn(){
//   if(hiddenbox.classList.contains('width')){
//     // hiddenbox.classList.remove('width')
//   }
//     else{
//       console.log("Error")
//     }
// }

// window.onclick = function(event) {
//   if (event.target.matches('.sec3full')) {

//       var sharedowns = hiddenbox;
//                 var openSharedown = sharedowns;
//           if (openSharedown.classList.contains('width')) {
//               openSharedown.classList.remove('width');
//           }
      
//   }
// }