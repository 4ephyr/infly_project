let link1 = document.getElementById('svg1')
let svg1 = document.getElementById('dropicon')
let boxes = document.getElementsByClassName('incheight')
let hello = document.getElementsByClassName('test')
let items = document.getElementsByClassName('item1')
let itempic = document.getElementsByClassName('itempic')
let x = boxes.length
let y = items.length
// console.log(z)
link1.addEventListener('mouseover',()=>{
    svg1.classList.add('svghover')
})
link1.addEventListener('mouseout',()=>{
    svg1.classList.remove('svghover')
})

for(let i = 0;i < x;i++){
    boxes[i].addEventListener('mouseover',()=>{
            hello[i].classList.add('height')
    })
}

for(let i = 0;i < x;i++){
    boxes[i].addEventListener('mouseout',()=>{
            hello[i].classList.remove('height')
    })
}

for(let i = 0;i < x;i++){
    boxes[i].addEventListener('mouseout',()=>{
            hello[i].classList.remove('box-shadow')
    })
}

for(let j = 0;j < y;j++){
    items[j].addEventListener('mouseover',()=>{
            itempic[j].classList.add('box-shadow')
    })
}

for(let j = 0;j < y;j++){
    items[j].addEventListener('mouseout',()=>{
            itempic[j].classList.remove('box-shadow')
    })
}


