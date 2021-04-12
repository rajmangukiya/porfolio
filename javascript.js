const navButton = document.querySelector('.nav-button')
const buttonLine1 = document.querySelector('.button-line-1')
const buttonLine2 = document.querySelector('.button-line-2')
const buttonLine3 = document.querySelector('.button-line-3')
const navOptions = document.querySelector('.nav-options')
let isOpen = false


navButton.addEventListener('click', openCloseNav)

function openCloseNav() {
  if (isOpen == false) {
    navOptions.style.transform = 'translateY(0px)'
    buttonLine1.style.transform = 'translateY(13px) rotatez(45deg)'
    buttonLine2.style.opacity = '0'
    buttonLine3.style.transform = 'translateY(-13px) rotate(-45deg)'
    isOpen = true
  } else {
    navOptions.style.transform = 'translateY(-1000px)'
    buttonLine1.style.transform = 'translateY(0px) rotatez(0deg)'
    buttonLine2.style.opacity = '1'
    buttonLine3.style.transform = 'translateY(0px) rotate(0deg)'
    isOpen = false
  }
}
// home page image scroll
function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const root = document.querySelector(':root')

const introText = document.querySelector('.intro-text')
const introTextP = document.querySelector('.intro-text>p')

const homeImageBackground = document.querySelector('.about-me')
const homeImage = document.querySelector('.about-me>img')
const aboutMeH1 = document.querySelector('.about-me>h1')

const aboutMeText = document.querySelector('.about-me-text')
const aboutMeTextP1 = document.querySelector('.about-me-text>p1')
const aboutMeTextP2 = document.querySelector('.about-me-text>p2')

const skillsBackground = document.querySelector('.skills')
const skills = document.querySelectorAll('.skill')
const stars = document.querySelectorAll('.skill>div')
const skillsH1 = document.querySelectorAll('.skill>h1')

window.addEventListener('scroll', debounce(handleAboutMeH1, 10))
window.addEventListener('scroll', debounce(handleIntroTextP, 10))
window.addEventListener('scroll', debounce(handleAboutMeTextP, 10))
window.addEventListener('scroll', debounce(handleSkills, 10))

let yTranslate = 0
let flag = 0

function handleSkills() {
  skills.forEach((skill) => {
    // console.log(skillsBackground.offsetTop, window.scrollY)
    
    if(skillsBackground.offsetTop + skill.offsetTop <= window.scrollY + (window.innerHeight / 1.2)) {
      // console.log(skill.offsetTop)
      skill.style.transform = 'translateY(0px)'
      skill.querySelector('h1').style.transform = 'translateY(0px)'
    }
    else {
      skill.style.transform = 'translateY(-1000px)'
    }
  })
}

function handleAboutMeTextP() {
  if(window.scrollY + window.innerHeight >= aboutMeText.offsetTop && aboutMeText.offsetTop + aboutMeText.clientHeight >= window.scrollY) {
    yTranslate = (window.scrollY + window.innerHeight - aboutMeText.offsetTop)
    aboutMeTextP1.style.transform = `translateY(${yTranslate / 5}px)`
    aboutMeTextP2.style.transform = `translateY(${yTranslate / 5}px)`
  }
}

function handleIntroTextP() {
  if(introText.clientHeight >= window.scrollY) {
    yTranslate = window.scrollY
    // console.log(yTranslate)
    introTextP.style.transform = `translateY(${yTranslate / 4}px)`
    // introTextP.style.fontSize = `${(yTranslate * 500 / introText.clientHeight) + 30}px`
    // introTextP.style.width = `${((yTranslate * 10000 / introText.clientHeight) + getComputedStyle(root).getPropertyValue('--intro-text-p-width'))}px`
    // introTextP.style.lineHeight = `${(yTranslate * 100 / introText.clientHeight) + 45}px`
  }
}

function handleAboutMeH1() {
  if(window.scrollY + window.innerHeight >= homeImageBackground.offsetTop && homeImageBackground.offsetTop + homeImageBackground.clientHeight >= window.scrollY) {
    yTranslate = (window.scrollY + window.innerHeight - homeImageBackground.offsetTop) / 3
    aboutMeH1.style.transform = `translateY(${yTranslate}px)`
  }
}
