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