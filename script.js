// toggle icon
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// ------------------------------------------------------

let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navlinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  // SCROLLL SECTION

  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  // ----------------------remove togglE icon and navbar when clicked
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// scroll reveal

ScrollReveal({
  // reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio-box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });
// ScrollReveal().reveal('.contact, .contact-form', {origin: 'top' });

// header design file

const typed = new Typed(".multiple-text", {
  strings: ["Culinary Chef", "Freelancer", "Blogger"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// audio

const audio = new Audio();
audio.src = "./ab.mp3";

const sound = new Audio();
sound.src = "./ab.mp3";

const music = new Audio();
music.src = "./ab.mp3";

const we = new Audio();
we.src = "./ab.mp3";

const sent = new Audio();
sent.src = "./ab.mp3";

const select = new Audio();
select.src = "./ab.mp3";

// --------------------google sheet------------------

const scriptURL =
  "https://script.google.com/macros/s/AKfycbydTk2rhH-OjYMYxHyD8RwA10I5RmkKFweGHpjL8LjzHefShvydjkKHhrNfgRf9bf206w/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById["msg1"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg1.innerHTML = "Message sent successfully!";
      setTimeout(function () {
        msg1.innerHTML = "";
      }, 3000);
      form.reset();
    })

    .catch((error) => console.error("Error!", error.message));
});
