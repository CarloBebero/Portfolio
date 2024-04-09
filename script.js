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

const animateit = function (e) {
  const span = this.querySelector('span');
  const { offsetX: x, offsetY: y } = e,
  { offsetWidth: width, offsetHeight: height } = this,

  move = 80,
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

gsap.from(".text", 2, {
scale: 0,
ease: "power4.out",
delay: .6,
});

gsap.to(".text", 20, {
rotation: "360",
ease: Linear.easeNone,
repeat: -1,
});

gsap.from(".text-one", 2, {
scale: 0,
ease: "power4.out",
delay: .6,
});

gsap.to(".text-one", 20, {
rotation: "-360",
ease: Linear.easeNone,
repeat: -1,
});

gsap.from(".scale", 2, {
scale: 0,
ease: "power4.out",
delay: .4,
});