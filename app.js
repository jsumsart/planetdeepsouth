function paragraphBlock(paragraphs) {
  return paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("");
}

function listBlock(items) {
  return items.map((item) => `<li>${item}</li>`).join("");
}

function linkAttrs(href) {
  return href.startsWith("http") ? ' target="_blank" rel="noreferrer"' : "";
}

function renderHeader(currentPage) {
  const { site } = siteData;
  const utilityLinks = site.utilityLinks
    .map((link) => `<a href="${link.href}"${linkAttrs(link.href)}>${link.label}</a>`)
    .join("");
  const navLinks = site.nav
    .map((item) => {
      const active = item.page === currentPage ? ' aria-current="page"' : "";
      return `<a href="${item.href}"${active}>${item.label}</a>`;
    })
    .join("");

  document.getElementById("site-header").innerHTML = `
    <div class="topbar">
      <div class="topbar-inner">
        <span class="topbar-label">${site.date}</span>
        <div class="topbar-links">${utilityLinks}</div>
      </div>
    </div>
    <div class="header-bar">
      <a class="brand" href="index.html" aria-label="${site.title} home">
        <img class="brand-logo" src="${site.logoImage}" alt="${site.logoAlt}" />
        <span class="brand-copy">
          <strong>${site.title}</strong>
          <span>${site.subtitle}</span>
        </span>
      </a>
      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-nav">
        Menu
      </button>
      <nav id="site-nav" class="site-nav" aria-label="Primary navigation">
        ${navLinks}
      </nav>
    </div>
  `;
}

function renderFooter() {
  const { site } = siteData;
  const navLinks = site.nav.map((item) => `<a href="${item.href}">${item.label}</a>`).join("");
  const utilityLinks = site.utilityLinks
    .map((item) => `<a href="${item.href}"${linkAttrs(item.href)}>${item.label}</a>`)
    .join("");
  const partnerLogos = site.partnerLogos
    .map(
      (item) => `
        <figure class="footer-logo-card${item.lightBackground ? " footer-logo-card-light" : ""}">
          <img src="${item.image}" alt="${item.alt}" />
          <figcaption>${item.name}</figcaption>
        </figure>
      `
    )
    .join("");

  document.getElementById("site-footer").innerHTML = `
    <div class="footer-grid">
      <div class="footer-brand">
        <p class="eyebrow">${site.title}</p>
        <h2>${site.title}</h2>
        <p>${site.date}<br />${site.venue}<br />${site.city}</p>
      </div>
      <div>
        <p class="footer-heading">Pages</p>
        <div class="footer-links">${navLinks}</div>
      </div>
      <div>
        <p class="footer-heading">Links</p>
        <div class="footer-links">${utilityLinks}</div>
        ${site.footerLegal ? `<p class="footer-legal">${site.footerLegal}</p>` : ""}
      </div>
    </div>
    <section class="footer-partners">
      <div class="footer-partners-header">
        <p class="footer-heading">Presented With</p>
      </div>
      <div class="footer-logo-row">
        ${partnerLogos}
      </div>
    </section>
  `;
}

function renderPageHeader(data) {
  return `
    <section class="page-intro section-frame">
      ${data.eyebrow ? `<p class="eyebrow">${data.eyebrow}</p>` : ""}
      <h1>${data.title}</h1>
      <p class="lede">${data.intro}</p>
      ${data.note ? `<p class="microcopy">${data.note}</p>` : ""}
    </section>
  `;
}

function renderRegistrationEmbed() {
  return `
    <div class="registration-embed">
      <iframe
        id="JotFormIFrame-262326200071139"
        title="Sign Up for Planet Deep South!"
        onload="window.parent.scrollTo(0,0)"
        allowtransparency="true"
        allow="geolocation; microphone; camera; fullscreen; payment"
        src="https://form.jotform.com/262326200071139"
        frameborder="0"
        style="min-width:100%;max-width:100%;height:539px;border:none;"
        scrolling="no"
      ></iframe>
    </div>
  `;
}

function renderHome() {
  const { site, shared, pages } = siteData;
  const page = pages.home;
  return `
    <section class="hero">
      <figure class="hero-banner section-frame">
        <img src="${site.heroImage}" alt="${site.heroAlt}" />
      </figure>
      <section class="hero-copy section-frame">
        <p class="eyebrow">${page.hero.eyebrow}</p>
        <h1>${page.hero.title}</h1>
        <p class="lede">${page.hero.summary}</p>
        <div class="hero-meta">
          <div><span>Date</span><strong>${site.date}</strong></div>
          <div><span>Location</span><strong>${site.venue}</strong></div>
        </div>
        <p>${page.hero.shortIntro}</p>
        <div class="button-row">
          <a class="button button-primary" href="${page.hero.primaryButton.href}">${page.hero.primaryButton.label}</a>
          <a class="button button-secondary" href="${page.hero.signupButton.href}" target="_blank" rel="noreferrer">${page.hero.signupButton.label}</a>
          <a class="button button-secondary" href="${page.hero.secondaryButton.href}">${page.hero.secondaryButton.label}</a>
        </div>
      </section>
    </section>

    <section class="content-section editorial-split">
      <div class="section-heading section-heading-split">
        <div>
          <p class="eyebrow">Event Overview</p>
          <h2>${shared.eventOverview.title}</h2>
        </div>
        <aside class="pull-quote">
          <p>Planet Deep South gathers artists, scholars, students, and community audiences around Black speculative futures in the American South.</p>
        </aside>
      </div>
      <div class="editorial-columns editorial-columns-single">
        <div class="section-prose">
          <p class="lede-small">${shared.eventOverview.intro}</p>
          ${paragraphBlock(shared.eventOverview.paragraphs)}
        </div>
      </div>
    </section>

    <section class="content-section feature-band">
      <div class="section-heading">
        <p class="eyebrow">Featured Artist</p>
        <h2>John Jennings</h2>
      </div>
      <div class="feature-grid">
        <article class="feature-panel">
          ${paragraphBlock(shared.artistShort)}
          <div class="button-row">
            <a class="button button-secondary" href="john-jennings.html">About John Jennings</a>
            <a class="button button-primary" href="schedule.html">View the Featured Program</a>
          </div>
        </article>
        <article class="spotlight-panel">
          <p class="eyebrow">Craft Talk</p>
          <h3>Drawing the Future South</h3>
          <p class="detail-kicker">A Craft Talk with John Jennings</p>
          <p>John Jennings will discuss how artists build speculative worlds through comics, character design, visual research, collage, typography, adaptation, history, and cultural memory.</p>
          <p>The program will explore the relationship between Black visual culture and future-making, as well as the role of artists, writers, and educators in imagining worlds beyond the present.</p>
          <div class="detail-pair">
            <strong>${site.date}</strong>
            <span>11:00 a.m. · College of Liberal Arts, Room 166</span>
          </div>
        </article>
      </div>
    </section>

    <section class="content-section">
      <div class="section-heading">
        <p class="eyebrow">Program Highlights</p>
        <h2>Scholarship, installation, performance, and collective imagination.</h2>
      </div>
      <div class="card-grid card-grid-three">
        ${page.highlights
          .map(
            (item) => `
              <article class="info-card">
                <h3>${item.title}</h3>
                <p>${item.body}</p>
              </article>
            `
          )
          .join("")}
      </div>
    </section>

    <section class="content-section">
      <article class="section-prose section-frame registration-feature">
        <p class="eyebrow">Registration</p>
        <h2>Register for Planet Deep South 2026</h2>
        <p class="lede-small">Reserve your place for a full day of talks, exhibition viewing, scholarly exchange, Tiger Futures, readings, and the evening reception.</p>
        ${renderRegistrationEmbed()}
      </article>
    </section>

    <section class="content-section closing-banner">
      <div>
        <p class="eyebrow">Attend and Participate</p>
        <h2>Spend the day exploring art, scholarship, creative practice, and the future of the Black South.</h2>
      </div>
      <div class="button-row">
        <a class="button button-primary" href="schedule.html">View the Schedule</a>
        <a class="button button-secondary" href="build-your-tiger-world.html">Call for Submissions</a>
      </div>
    </section>
  `;
}

function renderSchedule() {
  const page = siteData.pages.schedule;
  return `
    ${renderPageHeader(page.pageHeader)}
    <section class="content-section">
      <div class="card-grid card-grid-three schedule-overview">
        ${page.overview
          .map(
            (item) => `
              <article class="info-card schedule-overview-card">
                <p class="eyebrow">Program Flow</p>
                <h3>${item.title}</h3>
                <p>${item.body}</p>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
    <section class="content-section">
      <div class="timeline">
        ${page.items
          .map(
            (item) => `
              <article class="timeline-item">
                <div class="timeline-time">${item.time}</div>
                <div class="timeline-body">
                  <h3>${item.title}</h3>
                  ${item.subheading ? `<p class="detail-kicker">${item.subheading}</p>` : ""}
                  ${item.location ? `<p class="schedule-location">${item.location}</p>` : ""}
                  ${paragraphBlock(item.description)}
                  ${item.bullets ? `<ul>${listBlock(item.bullets)}</ul>` : ""}
                  ${item.meta ? `<ul class="meta-list">${listBlock(item.meta)}</ul>` : ""}
                </div>
              </article>
            `
          )
          .join("")}
      </div>
      <p class="microcopy">Schedule subject to change.</p>
    </section>
  `;
}

function renderJohnJennings() {
  const { site, pages } = siteData;
  const page = pages["john-jennings"];
  return `
    ${renderPageHeader(page.pageHeader)}
    <section class="content-section feature-band">
      <div class="feature-grid">
        <article class="section-prose section-frame">
          <p class="eyebrow">Biography</p>
          <h2>About John Jennings</h2>
          ${paragraphBlock(page.biography)}
        </article>
        <aside class="media-stack">
          <figure class="portrait-frame section-frame">
            <img src="${site.johnJenningsImage}" alt="${site.johnJenningsAlt}" />
          </figure>
          <div class="list-panel">
            <p class="eyebrow">Selected Works</p>
            <ul>${listBlock(page.works)}</ul>
          </div>
        </aside>
      </div>
    </section>
    <section class="content-section">
      <div class="feature-grid">
        <article class="spotlight-panel">
          <p class="eyebrow">Featured Program</p>
          <h2>${page.program.title}</h2>
          <p class="detail-kicker">${page.program.subtitle}</p>
          ${paragraphBlock(page.program.paragraphs)}
          <div class="detail-pair">
            <strong>${siteData.site.date}</strong>
            <span>11:00 a.m. · College of Liberal Arts, Room 166</span>
          </div>
          <a class="button button-primary" href="schedule.html">View the Full Schedule</a>
        </article>
        <article class="list-panel">
          <p class="eyebrow">The Program Will Explore</p>
          <ul>${listBlock(page.program.topics)}</ul>
        </article>
      </div>
    </section>
    <section class="content-section">
      <article class="section-prose section-frame">
        <p class="eyebrow">Comic Book Signing</p>
        <h2>After the Craft Talk</h2>
        ${paragraphBlock(page.signing)}
        <a class="text-link" href="schedule.html">Return to the Schedule</a>
      </article>
    </section>
  `;
}

function renderBuildYourTigerWorld() {
  const page = siteData.pages["build-your-tiger-world"];
  return `
    ${renderPageHeader(page.pageHeader)}
    <section class="content-section feature-band">
      <div class="feature-grid">
        <article class="section-prose section-frame">
          <p class="eyebrow">Submission Opportunity</p>
          <h2>Submit Work to Planet Deep South 2026</h2>
          ${paragraphBlock(page.prompt)}
          <div class="button-row">
            <a class="button button-primary" href="${page.submit.href}" target="_blank" rel="noreferrer">${page.submit.label}</a>
          </div>
        </article>
        <article class="list-panel">
          <p class="eyebrow">Submission Guidelines</p>
          <ul>${listBlock(page.guidelines)}</ul>
        </article>
      </div>
    </section>
    <section class="content-section">
      <div class="section-heading">
        <p class="eyebrow">Submission Categories</p>
        <h2>Eligible Work</h2>
      </div>
      <div class="card-grid card-grid-two">
        ${page.forms
          .map(
            (item) => `
              <article class="info-card">
                <h3>${item.title}</h3>
                <p>${item.body}</p>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
    <section class="content-section card-grid card-grid-two">
      <article class="section-prose section-frame">
        <p class="eyebrow">How to Submit</p>
        <h2>Include the Following</h2>
        <ul>${listBlock(page.submissionItems)}</ul>
        ${paragraphBlock(page.notes)}
        <div class="button-row">
          <a class="button button-primary" href="${page.submit.href}" target="_blank" rel="noreferrer">${page.submit.label}</a>
        </div>
      </article>
      <article class="section-prose section-frame">
        <p class="eyebrow">Review and Presentation</p>
        <h2>Review Process and Presentation</h2>
        ${paragraphBlock(page.review)}
        <p class="detail-kicker">Selected work may appear in the event exhibition, evening program, or related event documentation.</p>
        <ul>${listBlock(page.presentation)}</ul>
      </article>
    </section>
  `;
}

function renderAbout() {
  const page = siteData.pages.about;
  const locationSection = page.sections.find((section) => section.id === "location");
  const registrationSection = page.sections.find((section) => section.id === "admission");
  const remainingSections = page.sections.filter(
    (section) => section.id !== "location" && section.id !== "admission"
  );
  return `
    ${renderPageHeader(page.pageHeader)}
    <section class="content-section">
      <article class="section-prose section-frame about-combined-card">
        <div class="about-combined-header">
          <div>
            <p class="eyebrow">${locationSection.eyebrow}</p>
            <h2>${locationSection.title}</h2>
          </div>
          <div>
            <p class="eyebrow">${registrationSection.eyebrow}</p>
            <h2>${registrationSection.title}</h2>
          </div>
        </div>
        <div class="about-combined-grid">
          <div class="about-combined-copy">
            ${paragraphBlock(locationSection.paragraphs)}
            <p>${registrationSection.paragraphs[0]}</p>
            <p>${registrationSection.paragraphs[1]}</p>
          </div>
          <div>
            ${renderRegistrationEmbed()}
          </div>
        </div>
      </article>
    </section>
    <section class="content-section card-grid card-grid-two">
      ${remainingSections
        .map(
          (section) => `
            <article class="section-prose section-frame" id="${section.id}">
              <p class="eyebrow">${section.eyebrow}</p>
              <h2>${section.title}</h2>
              ${paragraphBlock(section.paragraphs)}
              ${section.bullets ? `<ul>${listBlock(section.bullets)}</ul>` : ""}
            </article>
          `
        )
        .join("")}
    </section>
  `;
}

function setupEmbeds() {
  const frame = document.getElementById("JotFormIFrame-262326200071139");
  if (!frame) {
    return;
  }

  const existingScript = document.querySelector('script[data-jotform-embed="true"]');
  const initialize = () => {
    if (window.jotformEmbedHandler) {
      window.jotformEmbedHandler("iframe[id='JotFormIFrame-262326200071139']", "https://form.jotform.com/");
    }
  };

  if (existingScript) {
    initialize();
    return;
  }

  const script = document.createElement("script");
  script.src = "https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js";
  script.dataset.jotformEmbed = "true";
  script.onload = initialize;
  document.body.appendChild(script);
}

const pageRenderers = {
  home: renderHome,
  schedule: renderSchedule,
  "john-jennings": renderJohnJennings,
  "build-your-tiger-world": renderBuildYourTigerWorld,
  about: renderAbout
};

function renderCurrentPage() {
  const pageKey = document.body.dataset.page;
  renderHeader(pageKey);
  renderFooter();
  const renderer = pageRenderers[pageKey];
  document.getElementById("page-content").innerHTML = renderer ? renderer() : "";
  setupEmbeds();
}

function setupMenu() {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.getElementById("site-nav");
  if (!toggle || !nav) {
    return;
  }

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

renderCurrentPage();
setupMenu();
