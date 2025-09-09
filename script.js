// Navigation menu toggle for hamburger
function toggleMenu() {
  const menuLinks = document.querySelector('.menu-links');
  const hamburgerIcon = document.querySelector('.hamburger-icon');

  menuLinks.classList.toggle('open');
  hamburgerIcon.classList.toggle('change'); // Use 'change' for animation
}

// Disable right-click context menu on the video
const video = document.getElementById('casaiya');
video.addEventListener('contextmenu', (e) => e.preventDefault());

// Disable Picture-in-Picture (PiP)
video.disablePictureInPicture = true;

// Disable keyboard shortcuts for playback speed
video.addEventListener('ratechange', () => {
  video.playbackRate = 1; // Force playback speed to normal
});

// Navigation hide/show on scroll
let lastScrollTop = 0;
const desktopNav = document.getElementById('desktop-nav');
const hamburgerNav = document.getElementById('hamburger-nav');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        // Scrolling down
        if (desktopNav) {
            desktopNav.classList.add('hide-nav');
            desktopNav.classList.remove('show-nav');
        }
        if (hamburgerNav) {
            hamburgerNav.classList.add('hide-nav');
            hamburgerNav.classList.remove('show-nav');
        }
    } else {
        // Scrolling up
        if (desktopNav) {
            desktopNav.classList.remove('hide-nav');
            desktopNav.classList.add('show-nav');
        }
        if (hamburgerNav) {
            hamburgerNav.classList.remove('hide-nav');
            hamburgerNav.classList.add('show-nav');
        }
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
}, false);

// Simple image carousel for mobile gallery
const images = document.querySelectorAll('.gallery-mobile-img');
const indicatorsWrapper = document.querySelector('.carousel-indicators');
let currentIndex = 0;

// Dynamically create indicators based on number of images
images.forEach((img, i) => {
  const dot = document.createElement('button');
  if(i === 0) dot.classList.add('active');
  indicatorsWrapper.appendChild(dot);

  dot.addEventListener('click', () => {
    currentIndex = i;
    showImage(currentIndex);
  });
});

const indicators = document.querySelectorAll('.carousel-indicators button');

function showImage(index) {
  images.forEach((img, i) => img.classList.toggle('active', i === index));
  indicators.forEach((dot, i) => dot.classList.toggle('active', i === index));
}

// Swipe support for mobile
let startX = 0;
let endX = 0;
const gallery = document.querySelector('.gallery-mobile-images');

gallery.addEventListener('touchstart', e => startX = e.touches[0].clientX);
gallery.addEventListener('touchmove', e => endX = e.touches[0].clientX);
gallery.addEventListener('touchend', () => {
  if(startX - endX > 50) currentIndex = (currentIndex + 1) % images.length; // Swipe left
  else if(endX - startX > 50) currentIndex = (currentIndex - 1 + images.length) % images.length; // Swipe right
  showImage(currentIndex);
  startX = endX = 0;
});
