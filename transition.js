function bubbleTransition() {
  const container = document.querySelector('.container');
  container.classList.add('bubble');

  setTimeout(() => {
    window.location.href = 'page2.html';
  }, 1000);
}
