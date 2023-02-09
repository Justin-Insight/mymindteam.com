console.log('%c Crafted by Insight Creative, Inc. Designed by Sam Rowe and Developed by Justin Parsons', 'background: #1d1d1d; color: white; padding: 5px 10px;')

import { toggleMobileMenu, toggleMobileDropdowns, filterPosts, openSearchModal, closeSearchModal, updateBlogPostImagePaths } from "./partials";

const siteHeader = document.querySelector(".site-header")
const hasSubMenu = document.querySelectorAll(".has-sub-menu")
const searchButton = document.querySelector('.search__open')
const closeButton = document.querySelector('.search__close')
const siteMain = document.querySelector('.site-main')

siteMain.style.marginTop = siteHeader.getBoundingClientRect().height + 'px'

if (document.body.contains(searchButton)) {
  searchButton.addEventListener('click', openSearchModal)
}

if (document.body.contains(closeButton)) {
  closeButton.addEventListener('click', closeSearchModal)
}

hasSubMenu.forEach((link) => {
    link.addEventListener("mouseover", () => {
        link.classList.add("active")
        const activeLink = document.querySelector(".active")
        const activeSubMenu = activeLink.querySelector(".sub-menu")
        const activeSubMenuContainer = activeSubMenu.querySelector(".sub-menu__inner").offsetHeight
        activeSubMenu.style.height = activeSubMenuContainer + "px"
    })
    link.addEventListener("mouseout", () => {
        link.classList.remove("active")
        const subMenuToHide = link.querySelector(".sub-menu")
        subMenuToHide.removeAttribute("style")
    })
})

let scrollState = 0

var scrollTop = function() {
  return window.scrollY
}

var scrollDetect = function(collapse, expand) {
  var currentScroll = scrollTop()
  if (currentScroll > scrollState) {
    collapse()
  } else {
    expand()
  }
  scrollState = scrollTop()
}

function collapseNav() {
  siteHeader.classList.remove("nav-expand")
  siteHeader.classList.add("nav-collapse")
}

function expandNav() {
  siteHeader.classList.remove("nav-collapse")
  siteHeader.classList.add("nav-expand")
}

window.addEventListener("scroll", function() {
  scrollDetect(collapseNav, expandNav)
})