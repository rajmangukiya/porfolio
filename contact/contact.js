const contactImage3d = document.querySelector('.contact-image')
const contactImageLayer3d = document.querySelector('.contact-image-layer')

contactImage3d.addEventListener('mousemove', handleImage3d)
contactImage3d.addEventListener('mouseout', closeHandleImage3d)

function closeHandleImage3d(e) {
  this.style.transform = 'rotateX(0deg) rotateY(0deg)'
}

let xPercentage = 0
let yPercentage = 0
function handleImage3d(e) {
  xPercentage = ((e.offsetX - (this.offsetWidth / 2)) * 20) / (this.offsetWidth / 2)
  yPercentage = ((e.offsetY - (this.offsetHeight / 2)) * 20) / (this.offsetHeight / 2)
  this.style.transform = `rotateX(${-yPercentage}deg) rotateY(${xPercentage}deg)`
  this.querySelector('.contact-image-layer').style.transform = 'translateZ(100px)'
}