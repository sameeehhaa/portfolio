// Loader

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.visibility = "hidden";
  }, 1500);
});

// Typing Effect

const roles = [
  "Machine Learning Engineer",
  "Frontend Developer",
  "AI Enthusiast",
  "Problem Solver"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect() {
  const current = roles[roleIndex];

  if (!deleting) {
    typing.textContent = current.substring(0, charIndex++);
  } else {
    typing.textContent = current.substring(0, charIndex--);
  }

  if (!deleting && charIndex === current.length + 1) {
    deleting = true;
    setTimeout(typeEffect, 1200);
    return;
  }

  if (deleting && charIndex === 0) {
    deleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
  }

  setTimeout(typeEffect, deleting ? 50 : 100);
}

typeEffect();

// Custom Cursor

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", e => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// Cursor Grow

const hoverItems = document.querySelectorAll(
  "a, button, .skill-card, .project-card"
);

hoverItems.forEach(item => {
  item.addEventListener("mouseenter", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(2)";
  });

  item.addEventListener("mouseleave", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(1)";
  });
});

// Scroll Progress Bar

window.addEventListener("scroll", () => {

  const scrollTop =
    document.documentElement.scrollTop;

  const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const progress =
    (scrollTop / scrollHeight) * 100;

  document.getElementById(
    "progress-bar"
  ).style.width = progress + "%";
});

// Reveal Animation

const revealElements = document.querySelectorAll(
  "section"
);

function reveal() {

  revealElements.forEach(el => {

    const windowHeight = window.innerHeight;

    const revealTop =
      el.getBoundingClientRect().top;

    if (revealTop < windowHeight - 120) {
      el.classList.add("reveal-active");
    }

  });
}

window.addEventListener("scroll", reveal);
reveal();

// Skill Card Animation

const skillCards =
  document.querySelectorAll(".skill-card");

skillCards.forEach(card => {

  card.addEventListener("mousemove", e => {

    const rect =
      card.getBoundingClientRect();

    const x =
      e.clientX - rect.left;

    const y =
      e.clientY - rect.top;

    const rotateY =
      ((x / rect.width) - 0.5) * 20;

    const rotateX =
      ((y / rect.height) - 0.5) * -20;

    card.style.transform =
      `perspective(800px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.05)`;

  });

  card.addEventListener("mouseleave", () => {

    card.style.transform =
      "perspective(800px) rotateX(0) rotateY(0)";

  });

});

// Project Card Tilt

const projectCards =
  document.querySelectorAll(".project-card");

projectCards.forEach(card => {

  card.addEventListener("mousemove", e => {

    const rect =
      card.getBoundingClientRect();

    const x =
      e.clientX - rect.left;

    const y =
      e.clientY - rect.top;

    const rotateY =
      ((x / rect.width) - 0.5) * 15;

    const rotateX =
      ((y / rect.height) - 0.5) * -15;

    card.style.transform =
      `perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-10px)`;

  });

  card.addEventListener("mouseleave", () => {

    card.style.transform =
      "perspective(1000px) rotateX(0) rotateY(0)";

  });

});

// Smooth Navbar Highlight

const sections =
  document.querySelectorAll("section");

const navLinks =
  document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop =
      section.offsetTop - 150;

    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }

  });

  navLinks.forEach(link => {

    link.classList.remove("active");

    if (
      link.getAttribute("href") ===
      "#" + current
    ) {
      link.classList.add("active");
    }

  });

});

// Contact Form

const form =
  document.querySelector(".contact-form");

if(form){

form.addEventListener("submit", e => {

  e.preventDefault();

  alert(
    "Thank you! Your message has been received."
  );

  form.reset();

});

}

// Floating Background Effect

document.addEventListener("mousemove", e => {

  const blur1 =
    document.querySelector(".blur1");

  const blur2 =
    document.querySelector(".blur2");

  const x =
    e.clientX / window.innerWidth;

  const y =
    e.clientY / window.innerHeight;

  blur1.style.transform =
    `translate(${x * 40}px, ${y * 40}px)`;

  blur2.style.transform =
    `translate(${-x * 40}px, ${-y * 40}px)`;

});

// Console Signature

console.log(
"%cPortfolio Developed By Sameeha Mohamed",
"color:#00E5FF;font-size:18px;font-weight:bold;"
);