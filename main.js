/* ===== HERO TYPING ANIMATION ===== */
const texts = ["Web Developer.", "Front-End Developer.", "Creative Designer."];
let count = 0,
  index = 0,
  currentText = "",
  letter = "";

(function type() {
  if (count === texts.length) count = 0;
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.getElementById("typed-text").textContent = letter;

  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 1500); // wait before next word
  } else {
    setTimeout(type, 200); // typing speed
  }
})();


particlesJS("particles-js", {
  particles: {
    number: { value: 80 },
    size: { value: 3 },
    move: { speed: 2 },
    line_linked: { enable: true, distance: 150, opacity: 0.4 },
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "repulse" },
    },
  },
});


/* ===== SKILLS CAROUSEL ===== */
const carousel = document.querySelector(".skills-carousel");

// Duplicate all items for seamless infinite scroll
carousel.innerHTML += carousel.innerHTML;

let scrollAmount = 0;

function scrollSkills() {
  scrollAmount += 1; // speed in pixels
  if (scrollAmount >= carousel.scrollWidth / 2) scrollAmount = 0;
  carousel.style.transform = `translateX(-${scrollAmount}px)`;
  requestAnimationFrame(scrollSkills);
}

scrollSkills();
