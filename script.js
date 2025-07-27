gsap.registerPlugin(ScrollTrigger);
gsap.to("#bg", {
  scaleX: 0.35,
  scaleY: 0.85,
  borderRadius: "8%",
  scrollTrigger: {
    trigger: ".spacer",
    start: "top top",
    end: "top+=300",
    scrub: true
  }
});
gsap.from(".center-text", {
  y: -80,
  opacity: 1,
  duration: 1,
  ease: "power2.out"
});

gsap.from(".know-more", {
  y: -50,
  opacity: 1,
  duration: 1,
  ease: "power2.out",
});
ScrollTrigger.create({
  start: "top -20",
  onEnter: () => document.querySelector("nav").classList.add("scrolled"),
  onLeaveBack: () => document.querySelector("nav").classList.remove("scrolled")
});

ScrollTrigger.create({
  trigger: ".spacer",
  start: "top top",
  onEnter: () => gsap.to("#knowMore", { autoAlpha: 0, duration: 0.5 }),
  onLeaveBack: () => gsap.to("#knowMore", { autoAlpha: 1, duration: 0.5 })
});

gsap.utils.toArray(".text-box").forEach((box, i) => {
  gsap.fromTo(box,
    {
      clipPath: "inset(100% 0 0 0)",
      opacity: 0,
      y: 50
    },
    {
      clipPath: "inset(0% 0 0 0)",
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power2.out",
      delay: i * 0.15,
      scrollTrigger: {
        trigger: box,
        start: "top 100%",
        toggleActions: "play none none none"
      }
    }
  );
});

gsap.to([".content-section", "#bg", ".center-text"], {
  y: -200,
  autoAlpha: 0,
  scrollTrigger: {
    trigger: ".content-section",
    start: "bottom bottom",
    end: "bottom+=200",
    scrub: true
  }
});

gsap.fromTo(".client-section",
  { autoAlpha: 0, y: 100 },
  {
    autoAlpha: 1,
    y: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".client-section",
      start: "top 80%",
      toggleActions: "play none none reverse"
    }
  }
);

gsap.timeline({
  scrollTrigger: {
    trigger: ".query-section",
    start: "top top",
    end: "bottom top",
    scrub: 0.5,
    pin: true,
    anticipatePin: 1
  }
}).from(".chat-bubble", {
  y: -10,
  opacity: 0,
  stagger: 0.15,
  ease: "power2.out"
}).from(".heading", {
  y: 60,
  opacity: 0,
  scale: 0.95,
  duration: 1,
  ease: "power2.out"
}, "<+0.3");

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".image-flower-section",
    start: "top top",
    end: "bottom top",
    scrub: true,
    pin: true
  }
});

[".img1", ".img2", ".img3"].forEach((img, i) => {
  tl.to(img, {
    opacity: 1,
    yPercent: -50,
    duration: 2
  });
});

tl.to(".img1", { x: -100, y: 170, duration: 3 }, "flower");
tl.to(".img2", { x: 80, y: 170, duration: 3 }, "flower");
tl.to(".img4", { opacity: 1, x: -170, y: 120, duration: 3 }, "flower");
tl.to(".img5", { opacity: 1, x: 190, y: 140, duration: 3 }, "flower");

tl.to(".img1", { x: -450, y: 390, scale: 1, duration: 1 }, "spread");
tl.to(".img2", { x: -210, y: 440, scale: 1, duration: 1 }, "spread");
tl.to(".img3", { x: 30, y: 390, scale: 1, duration: 1 }, "spread");
tl.to(".img4", { x: 270, y: 270, scale: 1, duration: 1 }, "spread");
tl.to(".img5", { x: 510, y: 220, scale: 1, duration: 1 }, "spread");
tl.to(".content-container", {
  opacity: 1,
  y: 0,
  duration: 1
}, "+=0.2");