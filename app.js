function createParagraphs(container, paragraphs) {
  paragraphs.forEach((paragraph) => {
    const p = document.createElement("p");
    p.textContent = paragraph;
    container.appendChild(p);
  });
}

function createList(container, items) {
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    container.appendChild(li);
  });
}

function renderLinks(containerId, links) {
  const container = document.getElementById(containerId);
  links.forEach((link) => {
    const a = document.createElement("a");
    a.href = link.href;
    a.textContent = link.label;
    container.appendChild(a);
  });
}

function renderSite() {
  const data = siteData;

  renderLinks("utility-links", data.utilityLinks);
  renderLinks("footer-nav", data.nav);
  renderLinks("footer-utility", data.utilityLinks);

  const nav = document.getElementById("site-nav");
  data.nav.forEach((item) => {
    const link = document.createElement("a");
    link.href = item.href;
    link.textContent = item.label;
    nav.appendChild(link);
  });

  document.getElementById("hero-kicker").textContent = data.metadata.kicker;
  document.getElementById("hero-title").textContent = data.metadata.title;
  document.getElementById("hero-summary").textContent = data.metadata.summary;
  document.getElementById("hero-date").textContent = data.metadata.date;
  document.getElementById("hero-location").textContent = data.metadata.location;
  document.getElementById("theme-text").textContent = data.metadata.theme;
  document.getElementById("focus-text").textContent = data.metadata.focus;

  const heroPrimary = document.getElementById("hero-primary");
  heroPrimary.textContent = data.metadata.primaryButton.label;
  heroPrimary.href = data.metadata.primaryButton.href;

  const heroSecondary = document.getElementById("hero-secondary");
  heroSecondary.textContent = data.metadata.secondaryButton.label;
  heroSecondary.href = data.metadata.secondaryButton.href;

  const heroTertiary = document.getElementById("hero-tertiary");
  heroTertiary.textContent = data.metadata.tertiaryLink.label;
  heroTertiary.href = data.metadata.tertiaryLink.href;

  createParagraphs(document.getElementById("hero-intro"), data.heroIntro);
  document.getElementById("overview-note").textContent = data.overview.note;
  createParagraphs(document.getElementById("overview-copy"), data.overview.paragraphs);
  createParagraphs(document.getElementById("artist-copy"), data.artist.paragraphs);
  createParagraphs(
    document.getElementById("featured-program-copy"),
    data.artist.featuredProgram
  );
  createParagraphs(document.getElementById("artist-bio-copy"), data.artist.bio);
  createList(document.getElementById("artist-works"), data.artist.selectedWorks);
  createParagraphs(document.getElementById("artist-signing-copy"), data.artist.signing);

  const highlightsGrid = document.getElementById("highlights-grid");
  data.highlights.forEach((highlight) => {
    const card = document.createElement("article");
    card.className = "highlight-card";
    card.innerHTML = `<h3>${highlight.title}</h3><p>${highlight.body}</p>`;
    highlightsGrid.appendChild(card);
  });

  createParagraphs(document.getElementById("collaboration-copy"), data.collaboration.paragraphs);
  createList(document.getElementById("collaboration-list"), data.collaboration.areas);

  createParagraphs(document.getElementById("student-intro"), data.student.intro);
  createParagraphs(document.getElementById("prompt-copy"), data.student.prompt);

  const formsGrid = document.getElementById("forms-grid");
  data.student.forms.forEach((form) => {
    const card = document.createElement("article");
    card.className = "form-card";
    card.innerHTML = `<h3>${form.title}</h3><p>${form.body}</p>`;
    formsGrid.appendChild(card);
  });

  createList(document.getElementById("student-features"), data.student.features);
  createParagraphs(document.getElementById("eligibility-copy"), data.student.eligibility);
  createList(document.getElementById("submission-items"), data.student.submissionItems);
  createParagraphs(document.getElementById("selection-copy"), data.student.selection);
  createParagraphs(document.getElementById("faculty-copy"), data.student.faculty);

  const scheduleList = document.getElementById("schedule-list");
  data.schedule.forEach((item) => {
    const article = document.createElement("article");
    article.className = "schedule-card";
    const paragraphs = item.description.map((text) => `<p>${text}</p>`).join("");
    const bullets = item.bullets
      ? `<ul>${item.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}</ul>`
      : "";
    const meta = item.meta
      .map((entry) => `<li>${entry}</li>`)
      .join("");

    article.innerHTML = `
      <div class="schedule-time">${item.time}</div>
      <div class="schedule-body">
        <h3>${item.title}</h3>
        ${item.subheading ? `<p class="detail-subhead">${item.subheading}</p>` : ""}
        <div class="prose">${paragraphs}</div>
        ${bullets}
        <ul class="schedule-meta">${meta}</ul>
      </div>
    `;
    scheduleList.appendChild(article);
  });

  createParagraphs(
    document.getElementById("exhibition-overview"),
    data.exhibition.overview
  );
  createList(
    document.getElementById("exhibition-components"),
    data.exhibition.components
  );
  createParagraphs(
    document.getElementById("cla-installation"),
    data.exhibition.claInstallation
  );
  createParagraphs(
    document.getElementById("student-work-copy"),
    data.exhibition.studentWorkCopy
  );
  createList(
    document.getElementById("student-work-list"),
    data.exhibition.studentWorkList
  );

  const aboutSections = document.getElementById("about-sections");
  data.aboutSections.forEach((section) => {
    const article = document.createElement("article");
    article.className = "detail-card";
    article.innerHTML = `
      <p class="eyebrow">${section.eyebrow}</p>
      <h3>${section.title}</h3>
      <div class="prose">${section.paragraphs.map((p) => `<p>${p}</p>`).join("")}</div>
      ${section.bullets ? `<ul>${section.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}</ul>` : ""}
    `;
    aboutSections.appendChild(article);
  });

  const eventInfoGrid = document.getElementById("event-info-grid");
  data.eventInfo.forEach((item) => {
    const article = document.createElement("article");
    article.className = "detail-card";
    article.innerHTML = `
      <p class="eyebrow">${item.eyebrow}</p>
      <h3>${item.title}</h3>
      <div class="prose">${item.paragraphs.map((p) => `<p>${p}</p>`).join("")}</div>
      ${item.button ? `<a class="button button-secondary" href="#event-information">${item.button}</a>` : ""}
    `;
    eventInfoGrid.appendChild(article);
  });
}

function setupMenu() {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.getElementById("site-nav");

  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
    nav.classList.toggle("open");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      toggle.setAttribute("aria-expanded", "false");
      nav.classList.remove("open");
    });
  });
}

function setupRevealObserver() {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const revealItems = document.querySelectorAll(".reveal");

  if (prefersReducedMotion) {
    revealItems.forEach((item) => item.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  revealItems.forEach((item) => {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.9) {
      item.classList.add("visible");
      return;
    }
    observer.observe(item);
  });
}

renderSite();
setupMenu();
setupRevealObserver();
