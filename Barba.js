barba.init({
  transitions: [
    {
      name: 'fade-in',
      once() {
        // This code runs once when the page is loaded for the first time
      },
      leave() {
        // This code runs when the user leaves the page
        return new Promise((resolve) => {
          // Add a fade-out animation to the body element
          gsap.to('body', {
            duration: 0.5,
            opacity: 0,
            onComplete: resolve,
          });
        });
      },
      enter() {
        // This code runs when the user enters the new page
        // Add a fade-in animation to the body element
        gsap.from('body', {
          duration: 0.5,
          opacity: 0,
        });
      },
    },
  ],
});
