/* Main interaction script for the research blog */

function setupNavToggle() {
  const toggle = document.querySelector(".site-nav__toggle");
  const list = document.querySelector(".site-nav__list");
  if (!toggle || !list) return;

  const close = () => {
    list.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  };

  toggle.addEventListener("click", () => {
    const isOpen = list.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  list.addEventListener("click", (event) => {
    const target = event.target;
    if (target instanceof HTMLElement && target.tagName === "A") {
      close();
    }
  });
}

function setupSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');

  function scrollToId(id) {
    const target = document.querySelector(id);
    if (!target) return;
    const rect = target.getBoundingClientRect();
    const offset = window.scrollY + rect.top - 72; // account for sticky nav

    window.scrollTo({
      top: offset,
      behavior: "smooth",
    });
  }

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href") || "";
      if (!href.startsWith("#")) return;
      const id = href === "#" ? "#top" : href;
      const target = document.querySelector(id);
      if (target) {
        event.preventDefault();
        scrollToId(id);
      }
    });
  });

  document.querySelectorAll("[data-scroll-target]").forEach((el) => {
    el.addEventListener("click", () => {
      const id = el.getAttribute("data-scroll-target");
      if (id) {
        scrollToId(id);
      }
    });
  });
}

function setupRevealOnScroll() {
  const revealEls = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) || !revealEls.length) {
    revealEls.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      rootMargin: "0px 0px -10% 0px",
      threshold: 0.15,
    },
  );

  revealEls.forEach((el) => observer.observe(el));
}

function setupHeroParallax() {
  const orbs = document.querySelectorAll(".hero-orb");
  if (!orbs.length) return;

  let lastX = 0;
  let lastY = 0;
  let ticking = false;

  function update(x, y) {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const relX = (x - centerX) / centerX;
    const relY = (y - centerY) / centerY;

    orbs.forEach((orb, index) => {
      const intensity = 10 + index * 6;
      const translateX = -relX * intensity;
      const translateY = -relY * intensity;
      orb.style.transform = `translate3d(${translateX}px, ${translateY}px, 0)`;
    });
  }

  window.addEventListener("mousemove", (event) => {
    lastX = event.clientX;
    lastY = event.clientY;
    if (!ticking) {
      window.requestAnimationFrame(() => {
        update(lastX, lastY);
        ticking = false;
      });
      ticking = true;
    }
  });
}

function setupYear() {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
}

function setupAbstractToggles() {
  const toggles = document.querySelectorAll(".pub-abstract__toggle");
  if (!toggles.length) return;

  toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const abstract = toggle.parentElement;
      if (!abstract) return;

      const text = abstract.querySelector(".pub-abstract__text");
      if (text) {
        text.classList.toggle("is-expanded");
      }
    });
  });
}

function setupNavHighlight() {
  const navLinks = document.querySelectorAll(".site-nav__list a");
  const sections = document.querySelectorAll("section[id]");

  if (!navLinks.length || !sections.length) return;

  function highlightNav() {
    let currentSection = "";
    const scrollY = window.scrollY;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100; // offset for sticky nav
      const sectionHeight = section.offsetHeight;

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("is-active");
      const href = link.getAttribute("href");
      if (href === `#${currentSection}`) {
        link.classList.add("is-active");
      }
    });
  }

  // Initial highlight
  highlightNav();

  // Update on scroll with throttling
  let ticking = false;
  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        highlightNav();
        ticking = false;
      });
      ticking = true;
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setupNavToggle();
  setupSmoothScroll();
  setupRevealOnScroll();
  setupYear();
  setupAbstractToggles();
  setupNavHighlight();
});
