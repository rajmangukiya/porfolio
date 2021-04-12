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

const headingBackground = document.querySelector('.heading')
const headingCircle = document.querySelector('.heading-circle')

headingBackground.addEventListener('mousemove', debounce(handleHeadingCircle, 5))

function handleHeadingCircle(e) {
  headingCircle.style.top = `${e.pageY - 150}px`
  headingCircle.style.left = `${e.pageX - 150}px`
}

const images3d = document.querySelectorAll('.work>.image>img')

images3d.forEach((image3d) => {
  image3d.addEventListener('mousemove', handleImage3d)
})
images3d.forEach((image3d) => {
  image3d.addEventListener('mouseout', closeHandleImage3d)
})

function closeHandleImage3d(e) {
  this.style.transform = 'rotateX(0deg) rotateY(0deg)'
}

let xPercentage = 0
let yPercentage = 0
function handleImage3d(e) {
  // console.log(e.offsetX, e.offsetY)
  xPercentage = ((e.offsetX - (this.offsetWidth / 2)) * 20) / (this.offsetWidth / 2)
  yPercentage = ((e.offsetY - (this.offsetHeight / 2)) * 20) / (this.offsetHeight / 2)
  this.style.transform = `rotateX(${-yPercentage}deg) rotateY(${xPercentage}deg)`
}

const heading = document.querySelector('.heading')
const headingP = document.querySelector('.heading>p')

window.addEventListener('scroll', debounce(handleHeadingP, 10))

function handleHeadingP() {
  if(heading.clientHeight >= window.scrollY) {
    yTranslate = window.scrollY
    headingP.style.transform = `translateY(${yTranslate / 3}px)`
  }
}