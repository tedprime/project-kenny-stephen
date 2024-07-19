
// document.addEventListener('DOMContentLoaded', () => {
//     const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
//     const navMenu = document.querySelector('.nav-menu');
//     const menuIcon = mobileNavToggle.querySelector('.menu-icon');
//     const closeIcon = mobileNavToggle.querySelector('.close-icon');
  
//     mobileNavToggle.addEventListener('click', () => {
//       navMenu.classList.toggle('mobile-nav-active');
//       menuIcon.style.display = menuIcon.style.display === 'none' ? 'inline-block' : 'none';
//       closeIcon.style.display = closeIcon.style.display === 'none' ? 'inline-block' : 'none';
//     });a
//   });





  
//   document.addEventListener('DOMContentLoaded', () => {
//     const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
//     const navMenu = document.querySelector('.nav-menu');
//     const overlay = document.querySelector('.overlay');
//     const menuIcon = mobileNavToggle.querySelector('.menu-icon');
//     const closeIcon = mobileNavToggle.querySelector('.close-icon');
  
//     mobileNavToggle.addEventListener('click', () => {
//       navMenu.classList.toggle('mobile-nav-active');
//       overlay.classList.toggle('active');
//       menuIcon.style.display = menuIcon.style.display === 'none' ? 'inline-block' : 'none';
//     closeIcon.style.display = closeIcon.style.display === 'none' ? 'inline-block' : 'none';
//     });
//   });
  
// document.addEventListener('DOMContentLoaded', () => {
//     const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
//     const navMenu = document.querySelector('.nav-menu');
//     const menuIcon = mobileNavToggle.querySelector('.menu-icon');
//     const closeIcon = mobileNavToggle.querySelector('.close-icon');
  
//     mobileNavToggle.addEventListener('click', () => {
//       navMenu.classList.toggle('mobile-nav-active');
//       menuIcon.style.display = menuIcon.style.display === 'none' ? 'inline-block' : 'none';
//       closeIcon.style.display = closeIcon.style.display === 'none' ? 'inline-block' : 'none';
//     });
//   });
  





// document.addEventListener('DOMContentLoaded', () => {
//   const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
//   const navMenu = document.querySelector('.nav-menu');
//   const menuIcon = mobileNavToggle.querySelector('.fa-bars');
//   const closeIcon = mobileNavToggle.querySelector('.fa-times');

//   mobileNavToggle.addEventListener('click', () => {
//       navMenu.classList.toggle('mobile-nav-active');
//       menuIcon.style.display = menuIcon.style.display === 'none' ? 'inline-block' : 'none';
//       closeIcon.style.display = closeIcon.style.display === 'none' ? 'inline-block' : 'none';
//   });
// });

// const overlay = document.querySelector('.overlay');

// mobileNavToggle.addEventListener('click', () => {
//   navMenu.classList.toggle('mobile-nav-active');
//   overlay.classList.toggle('active');
//   // ... existing code ...
// });





// document.addEventListener('DOMContentLoaded', () => {
//   const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
//   const navMenu = document.querySelector('.nav-menu');
//   const menuIcon = mobileNavToggle.querySelector('.fa-bars');
//   const closeIcon = mobileNavToggle.querySelector('.fa-times');
//   const overlay = document.querySelector('.overlay');

//   mobileNavToggle.addEventListener('click', () => {
//       navMenu.classList.toggle('mobile-nav-active');
//       overlay.classList.toggle('active');
//       document.body.classList.toggle('menu-open');
//       menuIcon.style.display = menuIcon.style.display === 'none' ? 'inline-block' : 'none';
//       closeIcon.style.display = closeIcon.style.display === 'none' ? 'inline-block' : 'none';
//   });
// });



document.addEventListener('DOMContentLoaded', () => {
  const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const menuIcon = mobileNavToggle.querySelector('.fa-bars');
  const closeIcon = mobileNavToggle.querySelector('.fa-times');
  const overlay = document.querySelector('.overlay');
  const body = document.body;

  mobileNavToggle.addEventListener('click', () => {
      navMenu.classList.toggle('mobile-nav-active');
      overlay.classList.toggle('active');
      body.classList.toggle('menu-open');
      menuIcon.style.display = menuIcon.style.display === 'none' ? 'inline-block' : 'none';
      closeIcon.style.display = closeIcon.style.display === 'none' ? 'inline-block' : 'none';
  });
});
