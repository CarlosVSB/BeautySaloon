// abre e fecha menu

const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

// esconder o menu quando clicar no icone

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

// colocar sombra no header ao mover e fazer ele acompanhar a página

const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeadeWhenScroll() {
  if (window.scrollY >= navHeight) {
    //scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    //menor que a altura do header
    header.classList.remove('scroll')
  }
}


// testimonials slider (swiper)

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints:{
    767:{
      slidesPerView:2,
      setWrapperSize: true
    }
  }
});


// Scroll reveal (ir mostrando elementos quando der scroll)

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links,
  footer .brand, footer .social
  `,{interval: 100})
  
  
/* voltar ao topo (botão) */
  
const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {
  if(window.scrollY >= 560)  {
    backToTopButton.classList.add('show')
  }else{
    backToTopButton.classList.remove('show')
  }
}

/* Menu selecionado conforme seção ativa */

const sections = document.querySelectorAll('main section[id]')

function activateMenuCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight/8)*4

  for(const section of sections){
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*='+sectionId+']')
        .classList.add('active')
    }else{
      document
        .querySelector('nav ul li a[href*='+sectionId+']')
        .classList.remove('active')
    }
  }
}
/* when scroll */
window.addEventListener('scroll', function () {
  changeHeadeWhenScroll()
  backToTop()
  activateMenuCurrentSection()
})  

