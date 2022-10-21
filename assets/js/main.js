console.log('%c Crafted by Insight Creative, Inc. Designed and Developed by Justin Parsons', 'background: #1d1d1d; color: white; padding: 5px 10px;')

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import { toggleMobileMenu, toggleMobileDropdowns, filterPosts } from "./partials";

gsap.registerPlugin(ScrollTrigger)

const siteHeader = document.querySelector(".site-header")
const hasSubMenu = document.querySelectorAll(".has-sub-menu")

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