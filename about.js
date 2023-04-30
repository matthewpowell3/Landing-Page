const title = document.querySelector('.scramble');
const chars = '!<>-_\\/[]{}—=+*^____';
const duration = 40;
const delay = 3000;
let isAnimating = true;

function scrambleText() {
  const text = title.textContent;
  const length = text.length;
  let result = '';

  for (let i = 0; i < length; i++) {
    const randomChar = Math.floor(Math.random() * chars.length);
    result += chars[randomChar];
  }

  title.textContent = result;

  if (result !== 'ABOUT:' && isAnimating) {
    setTimeout(() => {
      unscrambleText(text);
    }, duration);
  }
}

function unscrambleText(text) {
  const length = text.length;
  let result = '';

  for (let i = 0; i < length; i++) {
    const randomChar = Math.floor(Math.random() * chars.length);
    result += chars[randomChar];
  }

  if (!isAnimating) {
    // Stop scrambling and unscramble to "ABOUT:"
    result = 'ABOUT:'.substring(0, result.length);
  }

  title.textContent = result;

  if (result !== text && isAnimating) {
    setTimeout(() => {
      unscrambleText(text);
    }, duration);
  } else {
    setTimeout(() => {
      isAnimating = false;
    }, delay);
  }
}

setTimeout(() => {
  isAnimating = false;
}, delay);

scrambleText();

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

// image move

window.addEventListener('load', function () {
  var container = document.querySelector('.author-image');
  var img = document.querySelector('.author');
  var containerWidth = container.offsetWidth;
  var containerHeight = container.offsetHeight;
  var imgWidth = img.offsetWidth;
  var imgHeight = img.offsetHeight;
  var imgOffsetX = (containerWidth - imgWidth) / 5;
  var imgOffsetY = (containerHeight - imgHeight) / 5;

  document.addEventListener('mousemove', function (event) {
    var mouseX = event.clientX;
    var mouseY = event.clientY;
    var percentX = (mouseX / window.innerWidth) * 100;
    var percentY = (mouseY / window.innerHeight) * 100;
    var offsetX = ((percentX - 80) / 100) * imgOffsetX;
    var offsetY = ((percentY - 80) / 100) * imgOffsetY;

    img.style.transition = 'transform 0.3s ease-out'; // add transition
    img.style.transform = 'translate(' + offsetX + 'px, ' + offsetY + 'px)';
  });

  // reset image position when mouse leaves container
  container.addEventListener('mouseleave', function () {
    img.style.transition = 'transform 0.3s ease-out'; // add transition
    img.style.transform = 'translate(0, 0)';
  });
});
