const contents = document.querySelectorAll('.contents');
const images = document.querySelectorAll('.image');
const leftBtn= document.getElementById('left');
const rightBtn= document.getElementById('right');
const shopContainer = document.getElementById('shop-container');
const aboutBtn = document.getElementById('About');
const contactBtn = document.getElementById('Contact');
const aboutContainer = document.querySelector('.About-container');
const contactContainer = document.querySelector('.Contact-container');
const cancelAbout = document.getElementById('cancel-ab');
const  cancelContact = document.getElementById('cancel-con');
const mainBody = document.getElementById('main-body');
const headerDiv = document.getElementById('header')


console.log(mainBody);
console.log(headerDiv);

let activeSlide = 0;

const setBg = () => {
  shopContainer.style.backgroundImage = images[activeSlide].style.backgroundImage;
}

setBg()
const setActiveSlide = () => {
    contents.forEach((slide) => {
         slide.classList.remove('active')
     })
    
  
     contents[activeSlide].classList.add('active')
  }


aboutBtn.addEventListener('click', () =>{
  mainBody.style.display ='none' ;
  headerDiv.style.display = 'none'
  aboutContainer.classList.add('Ab-active') 


} )

cancelAbout.addEventListener('click', () =>{
  aboutContainer.classList.remove('Ab-active') ;

  headerDiv.style.display = 'flex' ;

  mainBody.style.display = 'block';
})

contactBtn.addEventListener('click', () =>{
  mainBody.style.display ='none' ;
  headerDiv.style.display = 'none' ;
  contactContainer.classList.add('cont-active') ;
})

cancelContact.addEventListener('click' , () =>{
  contactContainer.classList.remove('cont-active');
  headerDiv.style.display = 'flex' ;

  mainBody.style.display = 'block';
})
rightBtn.addEventListener('click', () => {
    activeSlide++
  
    if (activeSlide > contents.length - 1) {
      activeSlide = 0
    }
    setBg()
    setActiveSlide()
  })

leftBtn.addEventListener('click', () => {
    activeSlide--
  
    if (activeSlide < 0) {
      activeSlide = contents.length - 1
    }
    setBg()
    setActiveSlide()
  })
