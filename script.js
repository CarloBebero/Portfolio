// setup

(function () {

    const cursor = document.querySelector('.cursor');

    const editCursor = e => {
          const { clientX: x, clientY: y } = e;
          cursor.style.left = x + 'px';
          cursor.style.top = y + 'px';
    };
    
    window.addEventListener('mousemove', editCursor);

})();


function startLoader() {
    var counterElement = document.querySelector(".counter");
    var currentValue = 0;

    function updateCounter() {
      if (currentValue === 100) {
        return;
      }

      currentValue += Math.floor(Math.random() * 10) + 1;

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
    delay: 0.5,
  });

  gsap.to(".circle-inner", 1, {
    width: "75px",
    height: "75px",
    ease: "power4.inOut",
    delay: 2,
  });

  gsap.to(".circle-inner-rotator", 1, {
    scale: 1,
    ease: "power4.inOut",
    delay: 2.5,
  });

  gsap.to(".circles", 1.5, {
    rotation: 360,
    ease: "power4.inOut",
    delay: 3,
  });

  gsap.to(".block", 0.75, {
    display: "block",
    height: "200px",
    ease: "power4.inOut",
    delay: 4,
  });

  gsap.to(".block", 0.75, {
    width: "800px",
    ease: "power4.inOut",
    delay: 4.5,
  });

  gsap.fromTo(
    ".container",
    {
      duration: 2,
      left: "100%",
      scale: 0.5,
      ease: "power4.inOut",
      delay: 4,
    },
    {
      duration: 2,
      left: "50%",
      scale: 0.5,
      transform: "translateX(-50%)",
      ease: "power4.inOut",
      delay: 4,
    }
  );

  gsap.to(".block", 1.5, {
    width: "0px",
    ease: "power4.inOut",
    delay: 5,
  });

  gsap.to(".block", 0.75, {
    display: "block",
    height: "0px",
    ease: "power4.inOut",
    delay: 6,
  });

  gsap.to(".circles", 1.5, {
    rotation: 0,
    ease: "power4.inOut",
    delay: 6.5,
  });

  gsap.to(".loader", 2.5, {
    scale: 0,
    ease: "power4.inOut",
    delay: 7,
  });

  gsap.to(".container", 2, {
    scale: 1,
    ease: "power4.inOut",
    delay: 7.5,
  });
  
        document.addEventListener("DOMContentLoaded", function () {
          let activeItemIndicator = CSSRulePlugin.getRule(".menu-item p#active::after");
          const toggleButton = document.querySelector(".burger");
          let isOpen = false;

          gsap.set(".menu-item p", {y: 225})

          const timeline = gsap.timeline({ paused: true });

          timeline.to(".overlay", {
            duration: 1.5,
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

          timeline.to(".sub-nav", {
            bottom: "10%",
            opacity: 1,
            duration: 0.5,
            delay: 0.5
          }, "<");

          toggleButton.addEventListener("click", function () {
            if (isOpen) {
              timeline.reverse();
            } else {
              timeline.play();
            }
            isOpen = !isOpen;
          });
        });

  