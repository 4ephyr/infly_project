let link1 = document.getElementById('svg1')
let svg1 = document.getElementById('dropicon')
let boxes = document.getElementsByClassName('incheight')
let hello = document.getElementsByClassName('test')
let x = boxes.length
let y = hello.length
console.log(y)
link1.addEventListener('mouseover',()=>{
    svg1.classList.add('svghover')
})
link1.addEventListener('mouseout',()=>{
    svg1.classList.remove('svghover')
})

for(let i = 0;i < x;i++){
    boxes[i].addEventListener('mouseover',()=>{
        for(let j = 0;j<y;j++){
            hello[i].classList.add('height')
        }
    })
}

for(let i = 0;i < x;i++){
    boxes[i].addEventListener('mouseout',()=>{
        for(let j = 0;j<y;j++){
            hello[i].classList.remove('height')
        }
    })
}