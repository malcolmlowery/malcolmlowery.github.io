const handleScrollToElement = (event) => {
    const scrollToElements = document.querySelectorAll('.scroll-element')

    scrollToElements.forEach(element => {
        const element_className = element.className.substring(0, element.className.indexOf(' '))
        const element_boundingBox = element.getBoundingClientRect().top + window.pageYOffset - 80
        
        if(event.name === 'home' && element_className === 'home-content__hero-section') {
            window.scrollTo({ top: 0 })
        }
        if(event.name === 'portfolio' && element_className === 'home-content__portfolio-title') {
            window.scrollTo({ top: element_boundingBox })
        }
        if(event.name === 'contact' && element_className === 'home-content__email') {
            window.scrollTo({ top: element_boundingBox })
        }
    }) 
};