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


    toggleButton.addEventListener("click", function () {
        if (isOpen) {
        timeline.reverse();
        } else {
        timeline.play();
        }
        isOpen = !isOpen;
    });
    });

// 		gsap.from(".text", 2, {
//   scale: 0,
//   ease: "power4.out",
//   delay: 2.5,
// });

// gsap.to(".text", 20, {
//   rotation: "360",
//   ease: Linear.easeNone,
//   repeat: -1,
// });


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

let mysBtn = document 
    .getElementById('scrollbuttonid'); 
    window.addEventListener('scroll', function () { 
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) { 
            mysBtn.style.display = 'block';
        } else {
            mysBtn.style.display = 'none';
        }
    }); 


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

// gsap.to(".text-four, .text-two, .text, .text-six, .text-eight, .text-ten", 20, {
// rotation: "360",
// ease: Linear.easeNone,
// repeat: -1,
// });

// gsap.from(".text-four, .text-two, .text, .text-six, .text-eight, .text-ten", 2, {
// scale: 0,
// ease: "power4.out",
// delay: .6,
// });

// gsap.to(".text-five, .text-three, .text-one, .text-seven, .text-nine, .text-11", 20, {
// rotation: "-360",
// ease: Linear.easeNone,
// repeat: -1,
// });

// gsap.from(".text-five, .text-three, .text-one, .text-seven, .text-nine, .text-11", 2, {
// scale: 0,
// ease: "power4.out",
// delay: .9,
// });


gsap.from(".scale", 2, {
scale: 0,
ease: "power4.out",
delay: 2.3,
});




document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".item");

  items.forEach((item) => {
    item.addEventListener("mouseenter", shuffleAnimation);
  });
});

function getRandomCharacter() {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return chars[Math.floor(Math.random() * chars.length)];
}

function shuffleAnimation(event) {
  const target = event.currentTarget;

  if (target.dataset.animating) {
    return;
  }

  target.dataset.animating = true;

  const words = target.querySelectorAll(".word");
  const originalWords = Array.from(words).map((word) => word.textContent);

  let shuffles = 0;
  const maxShuffles = 5;
  const intervalDuration = 500 / maxShuffles;

  let animationInterval = setInterval(() => {
    if (shuffles >= maxShuffles) {
      clearInterval(animationInterval);
      words.forEach((word, index) => {
        word.textContent = originalWords[index];
      });

      delete target.dataset.animating;
    } else {
      words.forEach((word) => {
        const length = word.textContent.length;
        let shuffledText = "";
        for (let i = 0; i < length; i++) {
          shuffledText += getRandomCharacter();
        }
        word.textContent = shuffledText;
      });
      shuffles++;
    }
  }, intervalDuration);
}



gsap.fromTo(
  ".page-content",
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
gsap.to(".preloader", 2.5, {
  scale: 1,
  transform: "translateX(-100%)",
  ease: "power4.inOut",
  delay: 1.2,
});

gsap.to(".page-content", 2, {
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

gsap.to(".page-content", 2, {
  scale: 1,
  transform: "translateX(0%)",
  ease: "power4.inOut",
  delay: 1.3,
});
