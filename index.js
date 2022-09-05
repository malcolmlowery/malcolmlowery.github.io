const scrollToElementInDOM = (event) => {
   event.preventDefault();
   const elementId = event.target.id;

   if(elementId === 'home') {
      return document.querySelector('.content').scrollIntoView({ behavior: 'smooth' })
   }
   if(elementId === 'about-me') {
      return document.querySelector('.content__about-me').scrollIntoView({ behavior: 'smooth' })
   }
   if(elementId === 'my-work') {
      return document.querySelector('.line').scrollIntoView({ behavior: 'smooth' })
   }
   // if(elementId === 'tech-stack') {
   //    return document.querySelector('.content__about-me').scrollIntoView({ behavior: 'smooth' })
   // }
}