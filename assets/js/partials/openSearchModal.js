function openSearchModal() {
    const searchModal = document.querySelector('.search-modal')
    searchModal.classList.add('search-open')
    document.documentElement.style.overflow = "hidden"
    document.body.style.overflow = "hidden"
}

export default openSearchModal