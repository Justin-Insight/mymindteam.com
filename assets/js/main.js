console.log('%c Crafted by Insight Creative, Inc. Designed and Developed by Justin Parsons', 'background: #1d1d1d; color: white; padding: 5px 10px;')

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const mobileMenu = document.querySelector('.site-header__mobile-nav')
const hamburger = document.querySelector('.hamburger')
const siteHeader = document.querySelector('.site-header')
const siteHeaderHeight = siteHeader.getBoundingClientRect().height

const mobileMenuHeight = mobileMenu.getBoundingClientRect().height

mobileMenu.style.height = 0

// alternate option to shrink logo on scroll versus the entire nav collapse
window.addEventListener('scroll', event => {
  const currentScroll = window.scrollY
  if(currentScroll > siteHeaderHeight) {
    siteHeader.classList.add('user-scrolling')
  } else {
    siteHeader.classList.remove('user-scrolling')
  }
})

hamburger.addEventListener('click', toggleMobileMenu)

function toggleMobileMenu() {
    const mobileMenuWrapper = document.querySelector('.site-header__mobile-nav-inner')
    const mobileMenuWrapperHeight = mobileMenuWrapper.getBoundingClientRect().height

    mobileMenu.style.height = 0

    if(mobileMenu.classList.contains('nav-open')) {
        this.setAttribute('aria-expanded', 'false')
        this.setAttribute('aria-label', 'open mobile menu')
        mobileMenu.classList.remove('nav-open')
        mobileMenu.style.height = 0
        hamburger.classList.remove('is-active')
    } else {
        mobileMenu.classList.add('nav-open')
        mobileMenu.style.height = mobileMenuWrapperHeight + 'px'
        hamburger.classList.add('is-active')
        this.setAttribute('aria-expanded','true')
        this.setAttribute('aria-label', 'close mobile menu')
    }
}

// function fadeAnimations() {
//     const fadeUp = document.querySelectorAll('.fade-up')

//     gsap.utils.toArray(fadeUp).forEach((fade) => {
//         gsap.to(fade, {
//             opacity: 1,
//             y: 0,
//             duration: .5,
//             ease: 'Power2.in',
//             scrollTrigger: {
//                 trigger: fade,
//                 toggleActions: 'play none none none',
//                 start: 'top bottom-=50'
//             }
//         })
//     })

//     gsap.set('.fade-staggered', {y: 50, autoAlpha: 0})

//     ScrollTrigger.batch('.fade-staggered', {
//         onEnter: batch => gsap.to(batch, {y: 0, autoAlpha: 1, stagger: 0.2}),
//       })
// }

// gsap.utils.toArray(".parallax").forEach((layer) => {
//   gsap.to(layer, {
//       y: 350,
//       filter: 'brightness(0)',
//       ease: 'none',
//       scrollTrigger: {
//         trigger: ".hero",
//         start: "top top",
//         end: "bottom top",
//         scrub: true, 
//       }
//   })
// })

// fadeAnimations()