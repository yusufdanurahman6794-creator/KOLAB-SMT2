// ===============================
// PORTFOLIO INTERACTIVE SCRIPT
// ===============================

// NAVBAR ACTIVE LINK SAAT SCROLL
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

// ===============================
// ANIMASI BAR SKILL
// ===============================
const fills = document.querySelectorAll(".fill");

const showProgress = () => {
  fills.forEach((fill) => {
    const value = fill.dataset.width;
    fill.style.width = value;
  });
};

window.addEventListener("load", showProgress);

// ===============================
// ANIMASI FADE-IN SAAT SCROLL
// ===============================
const hiddenElements = document.querySelectorAll(
  ".hero, .about, .tech, .skills, .projects, .contact"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.2,
  }
);

hiddenElements.forEach((el) => {
  el.classList.add("hidden");
  observer.observe(el);
});

// ===============================
// BUTTON PROJECT
// ===============================
const projectButtons = document.querySelectorAll(".project-card button");

projectButtons.forEach((button) => {
  button.addEventListener("click", () => {
    alert("Membuka detail project...");
  });
});

// ===============================
// FORM CONTACT
// ===============================
const form = document.querySelector(".contact-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputs = form.querySelectorAll("input, textarea");

  let valid = true;

  inputs.forEach((input) => {
    if (input.value.trim() === "") {
      valid = false;
      input.style.boxShadow = "0 0 0 2px red";
    } else {
      input.style.boxShadow = "0 0 0 2px #00ff99";
    }
  });

  if (valid) {
    alert("Pesan berhasil dikirim!");
    form.reset();
  }
});

// ===============================
// EFFECT PARALLAX BLUR
// ===============================
const blur1 = document.querySelector(".blur1");
const blur2 = document.querySelector(".blur2");

window.addEventListener("mousemove", (e) => {
  let x = e.clientX / 40;
  let y = e.clientY / 40;

  blur1.style.transform = `translate(${x}px, ${y}px)`;
  blur2.style.transform = `translate(-${x}px, -${y}px)`;
});