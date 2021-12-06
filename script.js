// let i = 0

function addClassToDiv() {
  document.querySelectorAll('.show-philosophy')
    .forEach(div => {
      // div.classList.add(i)
      // div.classList.add('active')
      
      // setInterval(()=> {

        
      //   if (div.classList.contains(i)) {
      //     div.classList.add('active')
      //     console.log('enter')
      //   } else {
      //     div.classList.remove('active')
      //     return
      //   } 
        
        
      // }
      // , 3000)
    
      // i++
  })
}
addClassToDiv()

const philosophy1 = document.querySelector('.show-philosophy:first-child')
const philosophy2 = document.querySelector('.show-philosophy:nth-child(2)')
const philosophy3 = document.querySelector('.show-philosophy:nth-child(3)')
const philosophy4 = document.querySelector('.show-philosophy:nth-child(4)')

philosophy1.classList.add('active')

function sliderFlow() {
  setTimeout(()=>{
    philosophy1.classList.remove('active')
    // philosophy2.style.zIndex = '98'
    philosophy2.classList.add('active')
  }, 9000)

  setTimeout(()=>{
    philosophy2.classList.remove('active')
    philosophy3.classList.add('active')
  }, 18000)

  setTimeout(()=>{
    philosophy3.classList.remove('active')
    philosophy4.classList.add('active')
  }, 27000)

  setTimeout(()=>{
    philosophy4.classList.remove('active')
    // philosophy1.style.zIndex = '97'
    philosophy1.classList.add('active')
  }, 36000)
}
sliderFlow()

setInterval(()=> {
    sliderFlow()
    
    // if (div.classList.contains(i)) {
    //   div.classList.add('active')
    //   console.log('enter')
    // } else {
    //   div.classList.remove('active')
    //   return
    // } 
    
    
  }
, 36000)


// header style event & arrow down event
const header = document.querySelector('header')
const arrowDown = document.querySelector('.arrow-down')
const sec1 = document.querySelector('.sec1')
const blurryDiv = document.querySelector('.blur')

window.addEventListener('scroll', (ev) => {
  const el = ev.target.documentElement
  hHeaderSec1 = sec1.clientHeight
  console.log(el.scrollTop)

  // header style event
  if (el.scrollTop >= hHeaderSec1) {
    header.classList.add('scroll-down')
    // header.style.backgroundImage = 'none'
    blurryDiv.classList.add('scroll-down')
    // if(blurryDiv.classList.contains('scroll-down') && blurryDiv.classList.contains('active')) {
    //   header.classList.add('no-bg')
    // } else {
    //   header.classList.remove('no-bg')
    // }
  } else {
    header.classList.remove('no-bg')
    header.classList.remove('scroll-down')
    blurryDiv.classList.remove('scroll-down')
  }

  // arrow down event
  if (el.scrollTop >= 20) {
    arrowDown.classList.add('deactivated')
  } else {
    arrowDown.classList.remove('deactivated')
  }

})


// MENU PANEL
const burgerMenuPanel = document.querySelector('#burger-menu')
const menuPanel = document.querySelector('.menu-panel')
const bgMenuPanel = document.querySelector('.bg-menu-panel')
// const listTab = document.querySelector('.list-tab')

burgerMenuPanel.addEventListener('mouseover', function() {
  menuPanel.classList.add('active')
  // setTimeout(() => bgMenuPanel.classList.add('active'), 2000)
  bgMenuPanel.classList.add('active')

})

menuPanel.addEventListener('mouseleave', function(ev) {
  ev.target.classList.remove('active')
  // console.log(ev.target)
  bgMenuPanel.classList.remove('active')
})


document.querySelectorAll('.button-list').forEach(btn => {
  btn.addEventListener('click', function() {
    // let evt = this
    const movingList = this.querySelector('.list-tab')
    console.log(this.classList, movingList)
    if(this.classList.contains('active')) {
      // setTimeout(function() {
      //   evt.classList.remove('active')
      // }, 500)
      this.classList.remove('active')
      this.style.paddingBottom = 0
      
      
      // this.next
    } else {
      this.classList.add('active')
      this.style.paddingBottom = movingList.clientHeight + 'px'
      this.style.transition = 'all .35s ease'
    }
  })
})

// document.querySelectorAll('.menu-panel .extend').forEach()

//popping nav-bar 

const poppingList = document.querySelectorAll('.popping-links')

poppingList.forEach(li => {
  li.addEventListener('mouseover', function() {
    document.querySelector('.blur').classList.add('active')
    poppingList.forEach(item => item.classList.add('mouse-over'))
    li.classList.remove('mouse-over')
    // header.style.height = '100%'
    // header.style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.5) 105%, rgba(0, 0, 0, 0))'
    // header.style.backgroundSize = 'auto'
    // header.style.transition = 'background-size ease 5s'
    // header.style.trasition = 'all .9s ease-in'
    // poppingList.querySelectorAll('.link-color').forEach(itemList => itemList.classList.add('inactive'))
    // if(header.classList.contains('scroll-down')) {
    //   header.classList.add('no-bg')
    // }
    li.classList.remove('inactive')
  })

  li.addEventListener('mouseleave', function() {
    document.querySelector('.blur').classList.remove('active')
    poppingList.forEach(item => item.classList.remove('mouse-over'))
    // header.classList.remove('no-bg')
    // header.style.height = '80px'
    // header.style.backgroundImage = 'none'
    // header.style.backgroundSize = '100% 0%'
  })
})



// floating image



// sec3 hover on title
const titleLink = document.querySelectorAll('.sec3-layout>a>*')

titleLink.forEach(tag => {
  tag.addEventListener('mouseover', function() {
    document.querySelector('.sec3-layout>a>p').style.opacity = '1'
  })

  tag.addEventListener('mouseleave', function() {
    document.querySelector('.sec3-layout>a>p').style.opacity = '0.7'
  })
  
})






// FOOTER LAST LINK
const floatingLink = document.querySelector('footer .float-div')

floatingLink.addEventListener('mouseover', function() {
  this.classList.add('active')
})

floatingLink.addEventListener('mouseout', function() {
  this.classList.remove('active')
})


