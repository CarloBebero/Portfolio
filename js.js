// setup
// gsap.from(".marquee", 1, {
//   bottom: "-10em",
//   ease: "power4.out",
//   delay: 3,
document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  let currentSlideIndex = 0;
  let isAnimating = false;
  let currentTopValue = 0;

  const elements = [
    { selector: ".prefix", delay: 0 },
    { selector: ".names", delay: 0.15 },
    { selector: ".years", delay: 0.3 },
  ];

  slides.forEach((slide, idx) => {
    if (idx !== 0) {
      const img = slide.querySelector("img");
      gsap.set(img, { scale: 2, top: "4em" });
    }
  });

  function showSlide(index) {
    if (isAnimating) return;
    isAnimating = true;
    const slide = slides[index];
    const img = slide.querySelector("img");

    currentTopValue -= 30;

    elements.forEach((elem) => {
      gsap.to(document.querySelector(elem.selector), {
        y: `${currentTopValue}px`,
        duration: .5,
        ease: "power4.inOut",
        delay: elem.delay,
      });
    });

    gsap.to(img, {
      scale: 1,
      top: "0%",
      duration: .5,
      ease: "power3.inOut",
    });
    gsap.to(
      slide,
      {
        clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)",
        duration: .5,
        ease: "power4.inOut",
        onComplete: () => {
          isAnimating = false;
        },
      },
      "<"
    );
  }

  function hideSlide(index) {
    if (isAnimating) return;
    isAnimating = true;
    const slide = slides[index];
    const img = slide.querySelector("img");

    currentTopValue += 30;
    elements.forEach((elem) => {
      gsap.to(document.querySelector(elem.selector), {
        y: `${currentTopValue}px`,
        duration: .5,
        ease: "power4.inOut",
        delay: elem.delay,
      });
    });

    gsap.to(slide, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
      duration: .5,
      ease: "power4.inOut",
    });

    gsap.to(img, {
      scale: 2,
      top: "4em",
      duration: .5,
      ease: "power3.inOut",
    });

    gsap.to(
      slide,
      {
        clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
        duration: .5,
        ease: "power4.inOut",
        onComplete: () => {
          isAnimating = false;
        },
      },
      "<"
    );
  }

  window.addEventListener("wheel", (e) => {
    if (isAnimating) return;
    if (e.deltaY > 0 && currentSlideIndex < slides.length - 1) {
      showSlide(currentSlideIndex + 1);
      currentSlideIndex++;
    } else if (e.deltaY < 0 && currentSlideIndex > 0) {
      hideSlide(currentSlideIndex);
      currentSlideIndex--;
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let activeItemIndicator = CSSRulePlugin.getRule(".menu-item p#active::after");
  const toggleButton = document.querySelector(".burger");
  let isOpen = false;

  gsap.set(".menu-item p", {y: 225})

  const timeline = gsap.timeline({ paused: true });

  timeline.to(".overlay", {
    duration: 1,
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    ease: "power4.inOut"
  });

  timeline.to(".menu-item p", {
    duration: 1.5,
    y: 0,
    stagger: 0.2,
    ease: "power4.out"
  }, "-=1");

  timeline.to(activeItemIndicator, {
    width: "100%",
    duration: 1,
    ease: "power4.out",
    delay: 0.5
  }, "<");

  // timeline.to(".sub-nav", {
  //   bottom: "10%",
  //   opacity: 1,
  //   duration: 0.5,
  //   delay: 0.5
  // }, "<");

  toggleButton.addEventListener("click", function () {
    if (isOpen) {
      timeline.reverse();
    } else {
      timeline.play();
    }
    isOpen = !isOpen;
  });
});

gsap.from(".text", 2, {
  scale: 5,
  ease: "power4.out",
  delay: 0,
});

gsap.to(".text", 20, {
  rotation: "360",
  ease: Linear.easeNone,
  repeat: -1,
});



// gsap.from(".marquee", 1, {
//   bottom: "-10em",
//   ease: "power4.out",
//   delay: 3,
// });


(function () {

const link = document.querySelectorAll('.nav > .hover-this');
const cursor = document.querySelector('.cursor');

const animateit = function (e) {
      const span = this.querySelector('span');
      const { offsetX: x, offsetY: y } = e,
      { offsetWidth: width, offsetHeight: height } = this,

      move = 25,
      xMove = x / width * (move * 2) - move,
      yMove = y / height * (move * 2) - move;

      span.style.transform = `translate(${xMove}px, ${yMove}px)`;

      if (e.type === 'mouseleave') span.style.transform = '';
};

const editCursor = e => {
      const { clientX: x, clientY: y } = e;
      cursor.style.left = x + 'px';
      cursor.style.top = y + 'px';
};

link.forEach(b => b.addEventListener('mousemove', animateit));
link.forEach(b => b.addEventListener('mouseleave', animateit));
window.addEventListener('mousemove', editCursor);

})();

gsap.from(".blob", 2, {
  scale: .5,
  ease: "power3.inOut",
  delay: 2,
  stagger: {
    amount: 0.5,
  },
});


// (function () {

//     const cursor = document.querySelector('.cursor');

//     const editCursor = e => {
//           const { clientX: x, clientY: y } = e;
//           cursor.style.left = x + 'px';
//           cursor.style.top = y + 'px';
//     };
    
//     window.addEventListener('mousemove', editCursor);
// })();


function startLoader() {
    var counterElement = document.querySelector(".counter");
    var currentValue = 0;

    function updateCounter() {
      if (currentValue === 100) {
        return;
      }

      currentValue += Math.floor(Math.random() * 60) + 1;

      if (currentValue > 100) {
        currentValue = 100;
      }

      counterElement.textContent = currentValue + "%";

      var delay = Math.floor(Math.random() * 200) + 250;
      setTimeout(updateCounter, delay);
    }

    updateCounter();
  }

  startLoader();

  gsap.from(".circles", 2, {
    top: "-100%",
    ease: "elastic.out",
    delay: 0.1,
  });

  gsap.to(".circle-inner", 1, {
    width: "75px",
    height: "75px",
    ease: "power4.inOut",
    delay: 0.2,
  });

  gsap.to(".circle-inner-rotator", 1, {
    scale: 1,
    ease: "power4.inOut",
    delay: 0.3,
  });

  gsap.to(".circles", 1, {
    rotation: 720,
    ease: "power4.inOut",
    delay: 0.4,
  });

  // gsap.to(".block", 0.50, {
  //   display: "block",
  //   height: "200px",
  //   ease: "power4.inOut",
  //   delay: 0.5,
  // });

  // gsap.to(".block", 0.50, {
  //   width: "800px",
  //   ease: "power4.inOut",
  //   delay: 0.6,
  // });

  gsap.fromTo(
    ".container",
    {
      duration: 2,
      left: "100%",
      scale: 0.5,
      ease: "power4.inOut",
      delay: 0.7,
    },
    {
      duration: 2,
      left: "50%",
      scale: 0.5,
      transform: "translateX(-50%)",
      ease: "power4.inOut",
      delay: 0.8,
    }
  );

  // gsap.to(".block", .75, {
  //   width: "0px",
  //   ease: "power4.inOut",
  //   delay: 0.9,
  // });

  // gsap.to(".block", 0.75, {
  //   display: "block",
  //   height: "0px",
  //   ease: "power4.inOut",
  //   delay: 1,
  // });

  gsap.to(".circles", 1.5, {
    rotation: 0,
    ease: "power4.inOut",
    delay: 1.1,
  });

  gsap.to(".loader", 2.5, {
    scale: 0,
    ease: "power4.inOut",
    delay: 1.2,
  });

  gsap.to(".container", 2, {
    scale: 1,
    ease: "power4.inOut",
    delay: 1.3,
  });

//   document.addEventListener("DOMContentLoaded", function () {
//     let activeItemIndicator = CSSRulePlugin.getRule(".menu-item p#active::after");
//     const toggleButton = document.querySelector(".burger");
//     let isOpen = false;

//     gsap.set(".menu-item p", {y: 225})

//     const timeline = gsap.timeline({ paused: true });

//     timeline.to(".overlay", {
//       duration: 1,
//       clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
//       ease: "power4.inOut"
//     });

//     timeline.to(".menu-item p", {
//       duration: 1.5,
//       y: 0,
//       stagger: 0.2,
//       ease: "power4.out"
//     }, "-=1");

//     timeline.to(activeItemIndicator, {
//       width: "100%",
//       duration: 1,
//       ease: "power4.out",
//       delay: 0.5
//     }, "<");

//     // timeline.to(".sub-nav", {
//     //   bottom: "10%",
//     //   opacity: 1,
//     //   duration: 0.5,
//     //   delay: 0.5
//     // }, "<");

//     toggleButton.addEventListener("click", function () {
//       if (isOpen) {
//         timeline.reverse();
//       } else {
//         timeline.play();
//       }
//       isOpen = !isOpen;
//     });
//   });

//   gsap.from(".text", 2, {
//     scale: 5,
//     ease: "power4.out",
//     delay: 0,
//   });

//   gsap.to(".text", 20, {
//     rotation: "360",
//     ease: Linear.easeNone,
//     repeat: -1,
//   });



//   // gsap.from(".marquee", 1, {
//   //   bottom: "-10em",
//   //   ease: "power4.out",
//   //   delay: 3,
//   // });


// (function () {

//   const link = document.querySelectorAll('.nav > .hover-this');
//   const cursor = document.querySelector('.cursor');

//   const animateit = function (e) {
//         const span = this.querySelector('span');
//         const { offsetX: x, offsetY: y } = e,
//         { offsetWidth: width, offsetHeight: height } = this,

//         move = 25,
//         xMove = x / width * (move * 2) - move,
//         yMove = y / height * (move * 2) - move;

//         span.style.transform = `translate(${xMove}px, ${yMove}px)`;

//         if (e.type === 'mouseleave') span.style.transform = '';
//   };

//   const editCursor = e => {
//         const { clientX: x, clientY: y } = e;
//         cursor.style.left = x + 'px';
//         cursor.style.top = y + 'px';
//   };

//   link.forEach(b => b.addEventListener('mousemove', animateit));
//   link.forEach(b => b.addEventListener('mouseleave', animateit));
//   window.addEventListener('mousemove', editCursor);

// })();
