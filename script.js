/* =========================================================
   R&AW — INTERACTION SCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     MOBILE NAVIGATION
  ========================== */

  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

      const isOpen = navLinks.classList.toggle("active");

      menuToggle.setAttribute(
        "aria-expanded",
        isOpen ? "true" : "false"
      );

      menuToggle.textContent = isOpen ? "×" : "☰";
    });


    // Close menu after selecting a section

    navLinks.querySelectorAll("a").forEach(link => {

      link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuToggle.setAttribute(
          "aria-expanded",
          "false"
        );

        menuToggle.textContent = "☰";
      });

    });

  }


  /* =========================
     SCROLL REVEAL
  ========================== */

  const revealElements = document.querySelectorAll(
    ".timeline-card, .case-card, .person-card, .shadow-card, .source-card, .flow-step"
  );

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add("revealed");

          observer.unobserve(entry.target);

        }

      });

    },
    {
      threshold: 0.12
    }
  );


  revealElements.forEach(element => {

    element.classList.add("reveal");

    revealObserver.observe(element);

  });


  /* =========================
     ACTIVE NAVIGATION
  ========================== */

  const sections = document.querySelectorAll(
    "section[id]"
  );

  const navItems = document.querySelectorAll(
    ".nav-links a"
  );

  const sectionObserver = new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          navItems.forEach(link => {
            link.classList.remove("active");
          });

          const activeLink =
            document.querySelector(
              `.nav-links a[href="#${entry.target.id}"]`
            );

          if (activeLink) {
            activeLink.classList.add("active");
          }

        }

      });

    },
    {
      rootMargin: "-35% 0px -55% 0px"
    }
  );


  sections.forEach(section => {
    sectionObserver.observe(section);
  });


  /* =========================
     CASE FILE PLACEHOLDER
     INTERACTION
  ========================== */

  const caseButtons =
    document.querySelectorAll(".case-button");

  caseButtons.forEach(button => {

    button.addEventListener("click", () => {

      const card = button.closest(".case-card");

      if (!card) return;

      card.classList.toggle("case-open");

      if (card.classList.contains("case-open")) {

        button.textContent = "CASE SELECTED ✓";

      } else {

        button.textContent = "EXPLORE CASE →";

      }

    });

  });


  /* =========================
     SHADOW FILE BUTTONS
  ========================== */

  const shadowButtons =
    document.querySelectorAll(".shadow-card button");

  shadowButtons.forEach(button => {

    button.addEventListener("click", () => {

      button.textContent =
        "EVIDENCE REVIEW COMING →";

    });

  });


  /* =========================
     SOURCE BUTTONS
  ========================== */

  const sourceButtons =
    document.querySelectorAll(".source-card button");

  sourceButtons.forEach(button => {

    button.addEventListener("click", () => {

      button.textContent =
        "SOURCE VAULT COMING →";

    });

  });


  /* =========================
     HERO PARALLAX
  ========================== */

  const hero = document.querySelector(".hero");

  window.addEventListener(
    "scroll",
    () => {

      if (!hero) return;

      const scrollPosition =
        window.scrollY;

      if (scrollPosition < window.innerHeight) {

        hero.style.backgroundPosition =
          `center ${scrollPosition * 0.15}px`;

      }

    },
    { passive: true }
  );


  /* =========================
     YEAR / TIMELINE EFFECT
  ========================== */

  const timelineCards =
    document.querySelectorAll(".timeline-card");

  timelineCards.forEach((card, index) => {

    card.style.transitionDelay =
      `${index * 70}ms`;

  });


  /* =========================
     CONSOLE SIGNATURE
  ========================== */

  console.log(
    "%cR&AW — THE SHADOW BEHIND THE INFORMATION",
    "font-size:18px;font-weight:bold;"
  );

  console.log(
    "Educational project • Public-source research"
  );

});

/* =========================================================
   JAVASCRIPT REVEAL ANIMATION
========================================================= */

.reveal {
  opacity: 0;
  transform: translateY(25px);
  transition:
    opacity 0.7s ease,
    transform 0.7s ease;
}

.revealed {
  opacity: 1;
  transform: translateY(0);
}

.nav-links a.active {
  color: var(--accent);
}
