let opens = document.querySelector('#one')
let closes = document.getElementById('two')
let leftNav = document.querySelector('.left')
let rightNav = document.querySelector('.right')
rightNav.style.right = '-100px'
let connect = document.querySelector('.connect')
const bottom = document.querySelector('.bottom')


opens.addEventListener('click', ()=>{
    opens.style.top = "-100px"
    closes.style.top = '0'
    closes.style.transition = '0.5s'
    leftNav.style.left = "0"
    leftNav.style.transition = '0.5s'
})

closes.addEventListener('click', ()=>{
    closes.style.top = "-100px"
    opens.style.top = '0'
    opens.style.transition = '0.5s'
    leftNav.style.left = "-200px"
    leftNav.style.transition = '0.5s'
})

connect.addEventListener('click', ()=>{
    rightNav.style.right = switcher(rightNav.style.right)
    rightNav.style.transition = '0.5s'
    })

function switcher(x){
    if (x === '5px'){y = '-100px'}
    if (x === '-100px'){y = '5px'}
    // console.log(y)
    return y
}

function scrolls() {
    bottom.scrollIntoView()
}

