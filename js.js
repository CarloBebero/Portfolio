function startLoader() {
  var counterElement = document.querySelector(".counter");
  var currentValue = 0;

  function updateCounter() {
    if (currentValue === 100) {
      return;
    }

    currentValue += Math.floor(Math.random() * 1) + 9;

    if (currentValue > 100) {
      currentValue = 100;
    }

    counterElement.textContent = currentValue + "%";

    var delay = Math.floor(Math.random() * 1) + 100;
    setTimeout(updateCounter, delay);
  }

  updateCounter();
}

startLoader();

gsap.fromTo(
  ".container",
  {
    duration: 2,
    scale: 1,
    ease: "power4.inOut",
    delay: 0.7,
    transform: "translateX(100%)",
  },
  {
    duration: 2,
    scale: 1,
    ease: "power4.inOut",
    delay: 0.8,
  }
);
gsap.to(".loader", 2.5, {
  scale: 1,
  transform: "translateX(-100%)",
  ease: "power4.inOut",
  delay: 1.2,
});

gsap.to(".container", 2, {
  scale: 1,
  transform: "translateX(0%)",
  ease: "power4.inOut",
  delay: 1.3,
});


gsap.to(".preloader", 2.5, {
  scale: 1,
  transform: "translateX(-100%)",
  ease: "power4.inOut",
  delay: 1.2,
});

gsap.to(".container", 2, {
  scale: 1,
  transform: "translateX(0%)",
  ease: "power4.inOut",
  delay: 1.3,
});

  
  document.addEventListener("DOMContentLoaded", function () {
      const toggleButton = document.querySelector(".burger");
      let isOpen = false;

      const timeline = gsap.timeline({ paused: true });

      timeline.to(".overlay", {
          duration: 1,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "power4.inOut"
      });

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
scale: 0,
ease: "power4.out",
delay: 2.5,
});

gsap.to(".text", 20, {
rotation: "360",
ease: Linear.easeNone,
repeat: -1,
});

gsap.from(".scale", 2, {
  scale: 0,
  ease: "power4.out",
  delay: 2.5,
  });
  
  gsap.to(".title", 20, {
  rotation: "360",
  ease: Linear.easeNone,
  repeat: -1,
  });


(function () {

let link = document.querySelectorAll('#hover-this');
let cursor = document.querySelector('.cursor');
let cursorOutline = document.querySelector('.cursor-outline');
let cursorTrail= document.querySelector('.cursor-trail');

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

  cursorOutline.animate({
        left: x + 'px',
        top: y + 'px'
    }, { duration: 0, fill: "forwards"});

    cursorTrail.animate({
      left: x + 'px',
      top: y + 'px'
  }, { duration: 2000, fill: "forwards"});
};

link.forEach(b => b.addEventListener('mousemove', animateit));
link.forEach(b => b.addEventListener('mouseleave', animateit));
window.addEventListener('mousemove', editCursor);

})();

let cursor = document.querySelector('.cursor');
let cursorOutline = document.querySelector('.cursor-outline');
let links = Array.from(document.querySelectorAll("#hover-this"));

console.log(links);

links.forEach( (link) => {
link.addEventListener('mouseover', ()=>{
  cursor.classList.add("grow");
});
link.addEventListener('mouseleave', ()=>{
  cursor.classList.remove("grow");
});

});

