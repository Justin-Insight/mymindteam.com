function closeSearchModal() {
    const searchModal = document.querySelector('.search-modal')
    searchModal.classList.remove('search-open')
    document.documentElement.style.overflow = "auto"
    document.body.style.overflow = "auto"
}

export default closeSearchModal