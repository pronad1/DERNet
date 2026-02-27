window.HELP_IMPROVE_VIDEOJS = false;

var INTERP_BASE = "./static/interpolation/stacked";
var NUM_INTERP_FRAMES = 240;

var interp_images = [];
function preloadInterpolationImages() {
  for (var i = 0; i < NUM_INTERP_FRAMES; i++) {
    var path = INTERP_BASE + '/' + String(i).padStart(6, '0') + '.jpg';
    interp_images[i] = new Image();
    interp_images[i].src = path;
  }
}

function setInterpolationImage(i) {
  var image = interp_images[i];
  image.ondragstart = function () { return false; };
  image.oncontextmenu = function () { return false; };
  $('#interpolation-image-wrapper').empty().append(image);
}


$(document).ready(function () {
  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function () {
    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");

  });

  var options = {
    slidesToScroll: 1,
    slidesToShow: 3,
    loop: true,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 3000,
  }

  // Initialize all div with carousel class
  var carousels = bulmaCarousel.attach('.carousel', options);

  // Loop on each carousel initialized
  for (var i = 0; i < carousels.length; i++) {
    // Add listener to  event
    carousels[i].on('before:show', state => {
      console.log(state);
    });
  }

  // Access to bulmaCarousel instance of an element
  var element = document.querySelector('#my-element');
  if (element && element.bulmaCarousel) {
    // bulmaCarousel instance is available as element.bulmaCarousel
    element.bulmaCarousel.on('before-show', function (state) {
      console.log(state);
    });
  }

  /*var player = document.getElementById('interpolation-video');
  player.addEventListener('loadedmetadata', function() {
    $('#interpolation-slider').on('input', function(event) {
      console.log(this.value, player.duration);
      player.currentTime = player.duration / 100 * this.value;
    })
  }, false);*/
  preloadInterpolationImages();

  $('#interpolation-slider').on('input', function (event) {
    setInterpolationImage(this.value);
  });
  setInterpolationImage(0);
  $('#interpolation-slider').prop('max', NUM_INTERP_FRAMES - 1);

  bulmaSlider.attach();

  // Demo Gallery Navigation - Slides one image at a time
  const demoGalleryWrapper = document.getElementById('demo-gallery-wrapper');
  const demoPrevBtn = document.getElementById('demo-prev');
  const demoNextBtn = document.getElementById('demo-next');
  const totalImages = 8; // Total original images
  let currentIndex = 3; // Start at index 3 (showing images 1-3, accounting for duplicates at start)

  function updateDemoGallery(newIndex, enableTransition = true) {
    if (enableTransition) {
      demoGalleryWrapper.style.transition = 'transform 0.5s ease-in-out';
    } else {
      demoGalleryWrapper.style.transition = 'none';
    }

    currentIndex = newIndex;
    // Calculate offset: each item is 33.333% + gap
    const offset = -(currentIndex * (100 / 3));
    if (demoGalleryWrapper) {
      demoGalleryWrapper.style.transform = `translateX(${offset}%)`;
    }
  }

  // Previous button - move one image left
  if (demoPrevBtn) {
    demoPrevBtn.addEventListener('click', function () {
      currentIndex--;
      updateDemoGallery(currentIndex, true);

      // If we went to the duplicate section at the start, jump to actual end
      if (currentIndex === 2) {
        setTimeout(() => {
          updateDemoGallery(10, false); // Jump to actual image 8 position
        }, 500);
      }
    });
  }

  // Next button - move one image right
  if (demoNextBtn) {
    demoNextBtn.addEventListener('click', function () {
      currentIndex++;
      updateDemoGallery(currentIndex, true);

      // If we went to the duplicate section at the end, jump to actual start
      if (currentIndex === 11) {
        setTimeout(() => {
          updateDemoGallery(3, false); // Jump to actual image 1 position
        }, 500);
      }
    });
  }

  // Initialize position
  if (demoGalleryWrapper) {
    updateDemoGallery(3, false);
  }

})
