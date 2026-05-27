const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav a");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const revealItems = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);

revealItems.forEach((item) => revealObserver.observe(item));

const form = document.getElementById("leadForm");

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const nome = data.get("nome") || "";
    const empresa = data.get("empresa") || "";
    const instagram = data.get("instagram") || "";
    const interesse = data.get("interesse") || "";
    const mensagem = data.get("mensagem") || "";

    const subject = encodeURIComponent("Solicitação de Análise Visual — Apex");
    const body = encodeURIComponent(
      `Olá, Apex.\n\nQuero solicitar uma análise visual.\n\n` +
      `Nome: ${nome}\n` +
      `Empresa: ${empresa}\n` +
      `Instagram: ${instagram}\n` +
      `Interesse: ${interesse}\n\n` +
      `O que preciso melhorar:\n${mensagem}\n`
    );

    window.location.href = `mailto:apexmarketingdigital26@gmail.com?subject=${subject}&body=${body}`;
  });
}
