
// Get the SVG element
let cursor = document.getElementById('cursor');

function isTouchDevice() {
try {
  document.createEvent("TouchEvent");
  return true;
} catch (e) {
  return false;
}
}

const move = (e) => {
  try {
    var x = !isTouchDevice() ? e.pageX : e.touches[0].pageX; 
    var y = !isTouchDevice() ? e.pageY : e.touches[0].pageY; 
} catch(e) {}
   cursor.style.left = x + 'px';
   cursor.style.top = y + 'px';
} 

// Attach a mousemove event listener to the document
document.addEventListener('mousemove', (e) => {
  // Set the SVG's position to the mouse's x and y coordinates
 move(e);
});
