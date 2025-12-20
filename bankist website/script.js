'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

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

console.log(document.documentElement)
console.log(document.head)
console.log(document.body)


// Selecting Elements
const header = document.querySelector('.header');
const allSections= document.querySelectorAll('.section');
console.log(allSections)
const allButtons = document.getElementsByTagName('button');
console.log(allButtons)
console.log(document.getElementsByClassName('btn'));

// Creating and insering elements
// .insertAdjecentHTML

const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent = 'We use cookies for improved functionality and analytics.';
message.innerHTML = 'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';
// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true));
// header.before(message);
// header.after( message);

// DELETING ELEMENTS
document.querySelector('.btn--close-cookie').addEventListener('click', function(){
  message.remove();
});

// Style

message.style.backgroundColor = "#37383d";
message.style.width = '120%';

message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';


// Attributes

const logo = document.querySelector('.nav__logo');

console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);


// Non-standard

console.log(logo.designer);
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist');

  // Classes

  logo.classList.add('c', 'j');
  logo.classList.remove('c', 'j');
  logo.classList.toggle('c');
  logo.classList.contains('c');

  
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function(e){
  e.preventDefault()
  const s1coord = section1.getBoundingClientRect();
  // console.log(s1coord);
  // console.log(e.target.getBoundingClientRect());
    
  // window.scrollTo({left: s1coord.left + window.pageXOffset,
    //    top: s1coord.top + window.pageYOffset,
    //    behavior: 'smooth',
    //   });


    section1.scrollIntoView({behavior: 'smooth'})
});



const h1 = document.querySelector('h1');
const alerth1 = function(e){
  alert('AddEventListener: You are reading the text!');

  h1.removeEventListener('mouseenter', alerth1);
}

h1.addEventListener('mouseenter', alerth1);
setTimeout(() => h1.removeEventListener('mouseenter', alerth1), 3000);