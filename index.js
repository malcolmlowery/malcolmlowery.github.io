const scrollTopElement = (event) => {
    const element_sections = document.querySelectorAll('section')
    
    element_sections.forEach((element, index) => {
        if(event.name === element.id) {
            
            element.scrollIntoView({ behavior: 'smooth' })
        }
    })

};

addEventListener('click', scrollTopElement);

const home_container_element = document.querySelector('.home__container')

home_container_element.addEventListener('scroll', (event) => {
    const elementsToHide = document.querySelectorAll('section')
    
    elementsToHide.forEach((element, index) => {
        const reveal_top = elementsToHide[index].getBoundingClientRect().top
        const reveal_point = 0

        if(reveal_top < reveal_point) {
            elementsToHide[index].classList.add('fadeOut-active')
        } else {
            elementsToHide[index].classList.remove('fadeOut-active')
        }
    })

})