// Animation lettre bienvenue

new Vivus(
  "svg",
  {
    delay: 0,
    duration: 120,
  },
  function (obj) {
    obj.el.classList.add("finished");
  }
);

// Animation scroll reveal

gsap.registerPlugin(ScrollTrigger);

gsap.config({
  autoSleep: 60,
  force3D: false,
  nullTargetWarn: false,
  trialWarn: false,
  units: { left: "%", top: "%", rotation: "rad" },
});

let masks = document.querySelectorAll(".mask");

masks.forEach((mask) => {
  let image = mask.querySelector("section");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: mask,
      toggleActions: "restart none none reset",
    },
  });

  tl.set(mask, { autoAlpha: 1 });

  tl.from(mask, 2, {
    yPercent: -3,
    ease: Power2.out,
    opacity: 0,
  });
  tl.from(image, 2, {
    yPercent: -3,
    delay: -2,
    ease: Power2.out,
    opacity: 1,
  });
});

// Menu burger responsive

let burgerMenu = document.querySelector(".menu_toggle");
let overlay = document.querySelector(".t");
let body = document.querySelector("body");
let tl = gsap.timeline();

burgerMenu.addEventListener("click", function () {
  this.classList.toggle("active");
  overlay.classList.toggle("overlay");
  body.classList.toggle("true");

  if (this.classList.contains("active")) {
    tl.from("li", {
      y: 40,
      opacity: 0,
      stagger: 0.2,
    });
  } else {
    tl.from("li", {
      opacity: 1,
    });
  }
});

let menu = document.querySelectorAll("li");

for (let i = 0; i < menu.length; i++) {
  const el = menu[i];
  el.addEventListener("click", function () {
    overlay.classList.toggle("overlay");
    burgerMenu.classList.toggle("active");
    body.classList.toggle("true");

    tl.from("li", {
      opacity: 1,
    });
  });
}
