const shareButton = document.querySelector('.share__button')
const shareContainer = document.querySelector('.share__container')
const authorContainer = document.querySelector('.author__container')
shareButton.addEventListener('click', () => {
    shareContainer.classList.toggle('active')
})