// Vanilla JS interactions shared by every page. Visual-only demo: no network calls.

function initAccordions() {
  document.querySelectorAll(".accordion-item__trigger").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      trigger.closest(".accordion-item").classList.toggle("is-open");
    });
  });
}

function initTabs() {
  document.querySelectorAll("[data-tabs]").forEach((tabGroup) => {
    const tabs = tabGroup.querySelectorAll(".tabs__tab");
    const panels = tabGroup.querySelectorAll(".tabs__panel");
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        tabs.forEach((t) => t.classList.remove("is-active"));
        panels.forEach((p) => p.classList.remove("is-active"));
        tab.classList.add("is-active");
        tabGroup.querySelector(`[data-panel="${tab.dataset.tab}"]`).classList.add("is-active");
      });
    });
  });
}

function initSectionNavScrollSpy() {
  const nav = document.querySelector(".section-nav");
  if (!nav) return;
  const links = Array.from(nav.querySelectorAll("a"));
  const sections = links
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  function setActive() {
    let current = sections[0];
    sections.forEach((section) => {
      if (section.getBoundingClientRect().top - 120 <= 0) current = section;
    });
    links.forEach((link) => link.classList.remove("active"));
    const idx = sections.indexOf(current);
    if (idx >= 0) links[idx].classList.add("active");
  }

  window.addEventListener("scroll", setActive, { passive: true });
  setActive();
}

function initChatDemo() {
  document.querySelectorAll(".chat-thread").forEach((thread) => {
    thread.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelectorAll(".chat-thread").forEach((t) => t.classList.remove("is-active"));
      thread.classList.add("is-active");
    });
  });
  const compose = document.querySelector(".chat-compose");
  if (compose) {
    compose.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = compose.querySelector("input");
      if (!input.value.trim()) return;
      const bubble = document.createElement("div");
      bubble.className = "chat-bubble from-me";
      bubble.textContent = input.value.trim();
      document.querySelector(".chat-messages").appendChild(bubble);
      bubble.scrollIntoView({ block: "end" });
      input.value = "";
    });
  }
}

function initChatbotWidget() {
  const bubble = document.querySelector(".chatbot-widget__bubble");
  if (!bubble) return;
  bubble.addEventListener("click", () => {
    alert("Chatbot demo placeholder - answers would be sourced from the FAQ content managed in Content Management.");
  });
}

function initDrawers() {
  document.querySelectorAll(".drawer-item__trigger").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      trigger.closest(".drawer-item").classList.toggle("is-open");
    });
  });
}

function initCarousels() {
  document.querySelectorAll(".carousel").forEach((carousel) => {
    const track = carousel.querySelector(".carousel__track");
    const prev = carousel.querySelector('[data-carousel="prev"]');
    const next = carousel.querySelector('[data-carousel="next"]');
    const scrollBy = () => Math.max(track.clientWidth * 0.6, 260);
    if (prev) prev.addEventListener("click", () => track.scrollBy({ left: -scrollBy(), behavior: "smooth" }));
    if (next) next.addEventListener("click", () => track.scrollBy({ left: scrollBy(), behavior: "smooth" }));
  });
}

function initModals() {
  document.querySelectorAll("[data-modal-target]").forEach((opener) => {
    opener.addEventListener("click", () => {
      const modal = document.getElementById(opener.dataset.modalTarget);
      if (modal) modal.classList.add("is-open");
    });
  });
  document.querySelectorAll(".modal-overlay").forEach((overlay) => {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay || e.target.closest(".modal__close")) {
        overlay.classList.remove("is-open");
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initAccordions();
  initTabs();
  initSectionNavScrollSpy();
  initChatDemo();
  initChatbotWidget();
  initDrawers();
  initCarousels();
  initModals();
});
