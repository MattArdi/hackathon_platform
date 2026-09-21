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

function initViewToggle() {
  document.querySelectorAll(".view-toggle").forEach((toggle) => {
    const buttons = toggle.querySelectorAll(".view-toggle__btn");
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        buttons.forEach((b) => b.classList.remove("is-active"));
        btn.classList.add("is-active");
        const target = btn.dataset.view;
        document.querySelectorAll("[data-view-panel]").forEach((panel) => {
          panel.style.display = panel.dataset.viewPanel === target ? "" : "none";
        });
      });
    });
  });
}

function initStatusFilter() {
  document.querySelectorAll(".status-filter").forEach((filterGroup) => {
    const pills = filterGroup.querySelectorAll(".filter-pill");
    pills.forEach((pill) => {
      pill.addEventListener("click", () => {
        pills.forEach((p) => p.classList.remove("is-active"));
        pill.classList.add("is-active");
        const status = pill.dataset.status;
        document.querySelectorAll("[data-oic-status]").forEach((item) => {
          const show = status === "all" || item.dataset.oicStatus === status;
          item.style.display = show ? "" : "none";
        });
      });
    });
  });
}

function initAddEventForms() {
  document.querySelectorAll("[data-add-event]").forEach((form) => {
    const list = form.closest("[data-timeline-tab]")?.querySelector(".milestone-list");
    const nameInput = form.querySelector('[data-field="name"]');
    const dateInput = form.querySelector('[data-field="date"]');
    const button = form.querySelector('[data-action="add-event"]');
    if (!list || !nameInput || !dateInput || !button) return;
    button.addEventListener("click", () => {
      const name = nameInput.value.trim();
      const date = dateInput.value;
      if (!name || !date) return;
      const displayDate = new Date(date).toLocaleString("en-SG", {
        day: "numeric", month: "short", year: "numeric", hour: "numeric", minute: "2-digit",
      });
      const card = document.createElement("div");
      card.className = "milestone-card is-upcoming";
      card.innerHTML = `
        <div class="milestone-marker"></div>
        <div>
          <div class="milestone-row"><span class="milestone-date">${displayDate}</span><span class="badge badge-open">Upcoming</span></div>
          <strong>${name}</strong>
          <p class="text-secondary">No description yet - click to edit.</p>
        </div>`;
      list.appendChild(card);
      nameInput.value = "";
      dateInput.value = "";
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
  initViewToggle();
  initStatusFilter();
  initAddEventForms();
});
