'use strict';

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const nav = document.querySelector('.nav')
const tabs = document.querySelectorAll('.operations__tab');
const tabContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');


///////////////////////////////////////
// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener
('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


// Button Scrolling
btnScrollTo.addEventListener('click', function(e){
  e.preventDefault()
  const s1coord = section1.getBoundingClientRect();
  console.log(s1coord);
  console.log(e.target.getBoundingClientRect());
    
  window.scrollTo({left: s1coord.left + window.pageXOffset,
       top: s1coord.top + window.pageYOffset,
       behavior: 'smooth',
      });


    section1.scrollIntoView({behavior: 'smooth'})
});

// Page Navigation

// document.querySelectorAll('.nav__link').forEach(function(el){
//   el.addEventListener('click', function(e){
//   e.preventDefault()
//   const id = this.getAttribute('href'); 
//   console.log(id);

//   document.querySelector(id).scrollIntoView({behavior: 'smooth'});
//   });

// });

document.querySelector('.nav__links').addEventListener(
  'click', function(e){
    e.preventDefault()
    console.log(e.target);
    if (e.target.classList.contains('nav__link')){
      const id = e.target.getAttribute('href');
      console.log(id);
      document.querySelector(id).scrollIntoView({behavior: 'smooth'})
    };
  
    });



// ////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////


// console.log(document.documentElement)
// console.log(document.head)
// console.log(document.body)


// Selecting Elements
// const header = document.querySelector('.header');
// const allSections= document.querySelectorAll('.section');
// console.log(allSections)
// const allButtons = document.getElementsByTagName('button');
// console.log(allButtons)
// console.log(document.getElementsByClassName('btn'));

// Creating and insering elements
// .insertAdjecentHTML

// const message = document.createElement('div');
// message.classList.add('cookie-message');
// message.textContent = 'We use cookies for improved functionality and analytics.';
// message.innerHTML = 'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';
// header.prepend(message);
// header.append(message);
// header.append(message.cloneNode(true));
// header.before(message);
// header.after( message);

// DELETING ELEMENTS
// document.querySelector('.btn--close-cookie').addEventListener('click', function(){
//   message.remove();
// });

// Style

// message.style.backgroundColor = "#37383d";
// message.style.width = '120%';

// message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';


// Attributes

// const logo = document.querySelector('.nav__logo');

// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.className);


// Non-standard


// console.log(logo.designer);
// console.log(logo.getAttribute('designer'));
// logo.setAttribute('company', 'Bankist');

  // Classes

  // logo.classList.add('c', 'j');
  // logo.classList.remove('c', 'j');
  // logo.classList.toggle('c');
  // logo.classList.contains('c');

  
// const btnScrollTo = document.querySelector('.btn--scroll-to');
// const section1 = document.querySelector('#section--1');

// btnScrollTo.addEventListener('click', function(e){
//   e.preventDefault()
//   const s1coord = section1.getBoundingClientRect();
  // console.log(s1coord);
  // console.log(e.target.getBoundingClientRect());
    
  // window.scrollTo({left: s1coord.left + window.pageXOffset,
    //    top: s1coord.top + window.pageYOffset,
    //    behavior: 'smooth',
    //   });


//     section1.scrollIntoView({behavior: 'smooth'})
// });



// const h1 = document.querySelector('h1');
// const alerth1 = function(e){
//   alert('AddEventListener: You are reading the text!');

//   h1.removeEventListener('mouseenter', alerth1);
// }

// h1.addEventListener('mouseenter', alerth1);
// setTimeout(() => h1.removeEventListener('mouseenter', alerth1), 3000);

// const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () => `rgb(${randomInt(0, 255)}, ${randomInt(0,255)}, 
// ${randomInt(0, 255)})`;

// document.querySelector('.nav__link').addEventListener('click', function(e){
//   console.log('LINK', e.target, e.currentTarget);
//   this.style.backgroundColor = randomColor();

//   console.log(e.currentTarget == this);

// Stop Propegation
//   e.stopPropagation()
// });

// document.querySelector('.nav__links').addEventListener('click', function(e){
//   console.log('Container', e.target, e.currentTarget);
//   this.style.backgroundColor = randomColor();
// });

// document.querySelector('.nav').addEventListener('click', function(e){
//   this.style.backgroundColor = randomColor();
//    console.log('NAV', e.target, e.currentTarget);
// });



// console.log(randomColor(0,255));


// Going downwords: child
const h1 = document.querySelector('h1');
console.log(h1.querySelector('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);

// h1.firstElementChild.style.color = "white";
// h1.lastElementChild.style.color = "orangered";


// Going upwards: parents

// console.log(h1.parentNode);
// console.log(h1.parentElement);

// h1.closest('.header').style.background = 'var(--gradient-secondary)';
// h1.closest('h1').style.background = 'var(--gradient-primary)';

// Going sideways: siblings

console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

// console.log(h1.nextSibling);
// console.log(h1.previousSibling);

// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function(el){
//   if(el !== h1) el.style.transform = 'scale(0.5)'
// });


tabContainer.addEventListener('click', function(e){
  const clicked = e.target.closest('.operations__tab');
  
  if (!clicked) return; 
  

  tabs.forEach(t => t.classList.remove
    ('operations__tab--active'));
  
    tabsContent.forEach(c => c.classList.remove('operations__content--active'))
  
  
    clicked.classList.add('operations__tab--active');

  
  // Active Content Area
document
  .querySelector(`.operations__content--${clicked.dataset.tab}`)
  .classList.add('operations__content--active');
  
});

const handleHover = function(e){
    if(e.target.classList.contains('nav__link')){
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if(el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

// Passing an argument into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

// stcky navigation
const initialCoords = section1.getBoundingClientRect();

window.addEventListener('scroll', function(e){
  // console.log(this.window.scrollY)

  if (window.scrollY > initialCoords.top) 
    nav.classList.add('sticky'); 
  else nav.classList.add('sticky')
});


// Reveal seciton
const allSection = document.querySelectorAll('.section')
const revealSection = function(entries, observer){
  const [entry] = entries;
  // console.log(entry);
  if(!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);

};

const sectionObserver = new IntersectionObserver(revealSection, {
  root:null,
  threshold:0.15
});


allSection.forEach(function(section){
  sectionObserver.observe(section);
  section.classList.add('section--hidden')
});

// Lazy Loading Images
const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function(entries, obsever){
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) return;
  // replace src with data-src
  entry.target.src = entry.target.dataset.src;
  entry.target.classList.remove('lazy-img');
  entry.target.addEventListner('load', function(){});
  obsever.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg,
  { root:null,
  threshold: 0,
  rootMargin: '-200px'
});

imgTargets.forEach(img => imgObserver.observe(img));
// console.log(imgTargets); 


// slider

const slides = document.querySelectorAll('.slide');
// const slider = document.querySelector('.slider');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
const maxSlide = slides.length;
let currentSlide = 0;

// slider.style.transform = 'scale(0.4) translateX(-800px)';
// slider.style.overflow = 'visible';

const goToSlide = function(slide){
  slides.forEach((s, i) => s.style.transform =  
  `translateX(${100 * (i - slide)}%)`);
}

goToSlide(0)

// Next Slide

const nextSlide = function(){
   if (currentSlide === maxSlide - 1){
      currentSlide = 0;
  }else{
    currentSlide++;
  }
  goToSlide(currentSlide);
}

const prevSlide = function(){
  if (currentSlide === 0){
    currentSlide = maxSlide - 1;
  }else{
    currentSlide--;
  }
  goToSlide(currentSlide);
};

btnRight.addEventListener('click',nextSlide);
btnLeft.addEventListener('click', prevSlide);