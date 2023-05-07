// Get the SVG element
let cursor = document.getElementById('cursor');

function isTouchDevice() {
  return (
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
}

const move = (e) => {
  try {
    var x = !isTouchDevice() ? e.pageX : e.touches[0].pageX;
    var y = !isTouchDevice() ? e.pageY : e.touches[0].pageY;
  } catch (e) {}
  cursor.style.left = x + 'px';
  cursor.style.top = y + 'px';
};

// Attach a mousemove event listener to the document
document.addEventListener('mousemove', (e) => {
  // Set the SVG's position to the mouse's x and y coordinates
  move(e);
});

window.addEventListener('load', function () {
  const loader = document.querySelector('.loading-screen');
  loader.classList.add('fadeOut');
});


// Load the content of home.html into the container
$('#content').load('home.html');

// Handle button clicks
$('#home-button').click(function() {
  // Load the content of home.html into the container
  $('#content').load('home.html', function() {
    // Add the slide-in class to the new content
    $('#content > div').addClass('slide-in');
    // Remove the slide-out class from the old content
    $('#content > div').removeClass('slide-out');
  });
});

$('#about-button').click(function() {
  // Load the content of about.html into the container
  $('#content').load('about.html', function() {
    // Add the slide-in class to the new content
    $('#content > div').addClass('slide-in');
    // Remove the slide-out class from the old content
    $('#content > div').removeClass('slide-out');
  });
});

// Handle page transition animation
$(document).on('click', 'a[href^="/"]', function(event) {
  event.preventDefault();
  var url = $(this).attr('href');
  $('#content > div').addClass('slide-out');
  setTimeout(function() {
    window.location.href = url;
  }, 500);
});
