let DOM = {
  a1: ".ham1",
  a2: ".ham2",
  a3: "body",
  a4: ".same1",
  a5: "#translate1",
  a6: ".anchore",
};

let hamburger = document.querySelector(DOM.a1);
let hamburger1 = document.querySelector(DOM.a2);
let body = document.querySelector(DOM.a3);
let nav = document.querySelectorAll(DOM.a4);
let navbar = document.querySelector(DOM.a5);
let bottomBtn = document.querySelector(DOM.a6);

let windowScreen = window.outerWidth;

hamburger.addEventListener("click", openNavBarButton);
hamburger1.addEventListener("click", closeNavBarButton);
bottomBtn.addEventListener("click", bottomToTop);

nav.forEach((e) => {
  e.addEventListener("click", closeAndOpenNavBar);
});

function openNavBarButton() {
  navbar.style.transform = "translateX(1500px)";
  if (navbar.style.transform == "translateX(1500px)") {
    navbar.style.transition = "0.7s";
    navbar.style.transform = "translateX(0px)";
  }
  body.classList.add("active");
}

function closeAndOpenNavBar() {
  if (navbar.style.transform !== "translateX(1500px)") {
    navbar.style.transition = "0.7s";
    navbar.style.transform = "translateX(1500px)";
  }
  body.classList.remove("active");
}

function closeNavBarButton() {
  if (navbar.style.transform !== "translateX(1500px)") {
    navbar.style.transition = "0.7s";
    navbar.style.transform = "translateX(1500px)";
  }
  body.classList.remove("active");
}

function bottomToTop() {
  window.scrollTo({ top: 900, behavior: "smooth" });
}

if (windowScreen >= "1021") {
  var splide = new Splide(".splide", {
    perPage: 3,
    rewind: true,
  });

  splide.mount();
} else if (windowScreen > "810") {
  var splide = new Splide(".splide", {
    perPage: 2,
    rewind: true,
  });

  splide.mount();
} else if (windowScreen <= "810") {
  var splide = new Splide(".splide", {
    perPage: 1,
    rewind: true,
  });

  splide.mount();
}
