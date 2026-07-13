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
        <figure class="footer-logo-card">
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
          <p>Planet Deep South returns to Jackson as a focused gathering rooted in scholarship, art, performance, and Black speculative futures.</p>
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
            <span>Time to be announced · College of Liberal Arts</span>
          </div>
        </article>
      </div>
    </section>

    <section class="content-section">
      <div class="section-heading">
        <p class="eyebrow">Program Highlights</p>
        <h2>Scholarship, exhibition, performance, and collective imagination.</h2>
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

    <section class="content-section closing-banner">
      <div>
        <p class="eyebrow">Join Us at Planet Deep South</p>
        <h2>Spend the day exploring art, scholarship, creative practice, and the future of the Black South.</h2>
      </div>
      <div class="button-row">
        <a class="button button-primary" href="schedule.html">View the Schedule</a>
        <a class="button button-secondary" href="build-your-tiger-world.html">Student Participation</a>
      </div>
    </section>
  `;
}

function renderSchedule() {
  const page = siteData.pages.schedule;
  return `
    ${renderPageHeader(page.pageHeader)}
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
                  ${paragraphBlock(item.description)}
                  ${item.bullets ? `<ul>${listBlock(item.bullets)}</ul>` : ""}
                  <ul class="meta-list">${listBlock(item.meta)}</ul>
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
            <span>Time to be announced · College of Liberal Arts</span>
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
        <a class="text-link" href="exhibition.html">Explore the Exhibition</a>
      </article>
    </section>
  `;
}

function renderExhibition() {
  const { site, pages } = siteData;
  const page = pages.exhibition;
  return `
    ${renderPageHeader(page.pageHeader)}
    <section class="content-section feature-band">
      <div class="feature-grid">
        <article class="section-prose section-frame">
          <p class="eyebrow">Exhibition Overview</p>
          <h2>Visualizing the Black Speculative South</h2>
          ${paragraphBlock(page.overview)}
        </article>
        <figure class="portrait-frame section-frame">
          <img src="${site.heroImage}" alt="${site.heroAlt}" />
        </figure>
      </div>
    </section>
    <section class="content-section card-grid card-grid-two">
      <article class="list-panel">
        <p class="eyebrow">What Visitors Will See</p>
        <ul>${listBlock(page.components)}</ul>
        <p class="response-prompt"><strong>Response wall prompt:</strong> What kind of world will Tigers build?</p>
      </article>
      <article class="section-prose section-frame">
        <p class="eyebrow">College of Liberal Arts Installation</p>
        <h2>Companion Installation</h2>
        ${paragraphBlock(page.claInstallation)}
      </article>
    </section>
    <section class="content-section feature-grid">
      <article class="section-prose section-frame">
        <p class="eyebrow">Student Responses</p>
        <h2>Selected Work May Appear</h2>
        <p>${page.studentWork.intro}</p>
      </article>
      <article class="list-panel">
        <p class="eyebrow">Student Work May Include</p>
        <ul>${listBlock(page.studentWork.items)}</ul>
      </article>
    </section>
    <section class="content-section section-frame visit-strip">
      <div><span>Dates</span><strong>Exhibition dates to be announced</strong></div>
      <div><span>Location</span><strong>College of Liberal Arts</strong></div>
      <div><span>Hours</span><strong>Viewing hours to be announced</strong></div>
      <div><span>Admission</span><strong>Free</strong></div>
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
          <p class="eyebrow">The Prompt</p>
          <h2>What Kind of World Will Tigers Build?</h2>
          ${paragraphBlock(page.prompt)}
        </article>
        <article class="list-panel">
          <p class="eyebrow">Selected Work May Be Featured In</p>
          <ul>${listBlock(page.featuredIn)}</ul>
        </article>
      </div>
    </section>
    <section class="content-section">
      <div class="section-heading">
        <p class="eyebrow">Choose Your Form</p>
        <h2>Worldbuilding Across Media</h2>
      </div>
      <div class="card-grid card-grid-three">
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
      <article class="list-panel">
        <p class="eyebrow">Eligibility</p>
        <ul>${listBlock(page.eligibility)}</ul>
      </article>
      <article class="list-panel">
        <p class="eyebrow">How to Submit</p>
        <ul>${listBlock(page.submissionItems)}</ul>
        <p class="microcopy">Submission deadline and form link to be announced.</p>
      </article>
    </section>
    <section class="content-section feature-grid">
      <article class="section-prose section-frame">
        <p class="eyebrow">Selection Process</p>
        <h2>Concepts, Drafts, and Works in Progress Welcome</h2>
        ${paragraphBlock(page.selection)}
      </article>
      <article class="section-prose section-frame">
        <p class="eyebrow">For Faculty</p>
        <h2>Bring the Prompt into the Classroom</h2>
        ${paragraphBlock(page.faculty)}
      </article>
    </section>
  `;
}

function renderAbout() {
  const page = siteData.pages.about;
  return `
    ${renderPageHeader(page.pageHeader)}
    <section class="content-section card-grid card-grid-two">
      ${page.sections
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

function renderEventInformation() {
  const page = siteData.pages["event-information"];
  return `
    ${renderPageHeader(page.pageHeader)}
    <section class="content-section card-grid card-grid-two">
      ${page.sections
        .map(
          (section) => `
            <article class="section-prose section-frame" id="${section.id}">
              <p class="eyebrow">${section.eyebrow}</p>
              <h2>${section.title}</h2>
              ${paragraphBlock(section.paragraphs)}
            </article>
          `
        )
        .join("")}
    </section>
  `;
}

const pageRenderers = {
  home: renderHome,
  schedule: renderSchedule,
  "john-jennings": renderJohnJennings,
  exhibition: renderExhibition,
  "build-your-tiger-world": renderBuildYourTigerWorld,
  about: renderAbout,
  "event-information": renderEventInformation
};

function renderCurrentPage() {
  const pageKey = document.body.dataset.page;
  renderHeader(pageKey);
  renderFooter();
  const renderer = pageRenderers[pageKey];
  document.getElementById("page-content").innerHTML = renderer ? renderer() : "";
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
