const navToggle = document.getElementById("nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
      navToggle.classList.remove("bi-list");
      navToggle.classList.add("bi-x");
    } else {
      navToggle.classList.remove("bi-x");
      navToggle.classList.add("bi-list");
    }
  });

  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");

      navToggle.classList.remove("bi-x");
      navToggle.classList.add("bi-list");
    });
  });