'use strict';

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

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

h1.firstElementChild.style.color = "white";
h1.lastElementChild.style.color = "orangered";


// Going upwards: parents

console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest('.header').style.background = 'var(--gradient-secondary)';
h1.closest('h1').style.background = 'var(--gradient-primary)';

// Going sideways: siblings

console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

// console.log(h1.nextSibling);
// console.log(h1.previousSibling);

// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function(el){
//   if(el !== h1) el.style.transform = 'scale(0.5)'
// });