// Sec1 image carusel

const philosophy1 = document.querySelector('.show-philosophy:first-child')
const philosophy2 = document.querySelector('.show-philosophy:nth-child(2)')
const philosophy3 = document.querySelector('.show-philosophy:nth-child(3)')
const philosophy4 = document.querySelector('.show-philosophy:nth-child(4)')

philosophy1.classList.add('active')

function sliderFlow() {
  setTimeout(()=>{
    philosophy1.classList.remove('active')
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
    philosophy1.classList.add('active')
  }, 36000)
}
sliderFlow()

setInterval(()=> {
    sliderFlow()    
  }
, 36000)


// Header style event & arrow down event

const header = document.querySelector('header')
const arrowDown = document.querySelector('.arrow-down')
const sec1 = document.querySelector('.sec1')
const blurryDiv = document.querySelector('.blur')

window.addEventListener('scroll', (ev) => {
  const el = ev.target.documentElement
  hHeaderSec1 = sec1.clientHeight

  // header style event
  if (el.scrollTop >= hHeaderSec1) {
    header.classList.add('scroll-down')
    blurryDiv.classList.add('scroll-down')
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

burgerMenuPanel.addEventListener('mouseover', function() {
  menuPanel.classList.add('active')
  bgMenuPanel.classList.add('active')
})

menuPanel.addEventListener('mouseleave', function(ev) {
  ev.target.classList.remove('active')
  bgMenuPanel.classList.remove('active')
})


document.querySelectorAll('.button-list').forEach(btn => {
  btn.addEventListener('click', function() {
    const movingList = this.querySelector('.list-tab')

    if(this.classList.contains('active')) {
      this.classList.remove('active')
      this.style.paddingBottom = 0
    } else {
      this.classList.add('active')
      this.style.paddingBottom = movingList.clientHeight + 'px'
      this.style.transition = 'all .35s ease'
    }
  })
})


//  Popping nav-bar 

const poppingList = document.querySelectorAll('.popping-links')

poppingList.forEach(li => {
  li.addEventListener('mouseover', function() {
    document.querySelector('.blur').classList.add('active')
    poppingList.forEach(item => item.classList.add('mouse-over'))
    li.classList.remove('mouse-over')
    li.classList.remove('inactive')
  })

  li.addEventListener('mouseleave', function() {
    document.querySelector('.blur').classList.remove('active')
    poppingList.forEach(item => item.classList.remove('mouse-over'))
  })
})


// Sec3 hover on title

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


