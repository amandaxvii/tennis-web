const topNav = document.querySelector('.header')
const stickyPosition = topNav.offsetTop
console.log(stickyPosition)


window.addEventListener('scroll', offsetTopNav)

function offsetTopNav(){
 if (window.pageYOffset >= stickyPosition ){
    topNav.classList.add('sticky')
 } else {
     topNav.classList.remove('sticky')
 }
}

