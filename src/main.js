import "./style.css";
import "./animations.css";
import "./text-animations.css";
import "./opening-animations.css";
import { createOpening } from "./opening.js";

const page = document.body.dataset.page;

/* =========================================
   SHARED PIECES
========================================= */

function header() {
  const home = page === "home";

  return `
    <header class="site-header ${home ? "home-header" : ""}">
      <a href="index.html" class="logo" aria-label="Home">
        <span class="logo-svg-placeholder"></span>
      </a>

      ${
        home
          ? ""
          : `
            <nav class="main-nav">
              <a href="about.html">About</a>
              <a href="experience.html">Experience</a>
              <a href="education.html">Education</a>
              <a href="projects.html">Projects</a>
            </nav>
          `
      }
    </header>
  `;
}

async function loadLogo() {
  const response = await fetch("/logo.svg");
  const svgText = await response.text();

  const headerPlaceholder = document.querySelector(
    ".logo-svg-placeholder"
  );

  const footerPlaceholder = document.querySelector(
    ".footer-logo-svg-placeholder"
  );

  if (headerPlaceholder) {
    headerPlaceholder.outerHTML = svgText;
  }

  if (footerPlaceholder) {
    footerPlaceholder.outerHTML = svgText;
  }

  document.querySelectorAll(".logo svg, .footer-logo svg").forEach((svg) => {
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("focusable", "false");
  });
}

function footer() {
  return `
    <footer class="site-footer">

      <div class="footer-content">

        <div class="footer-left">
          <a href="index.html" class="footer-logo" aria-label="Home">
            <span class="footer-logo-svg-placeholder"></span>
          </a>
          <span class="copyright">© 2026 James Han</span>
        </div>

        <button
          class="theme-toggle"
          type="button"
          aria-label="Toggle color theme"
        >
          <span>LIGHT</span>
          <span class="theme-divider"></span>
          <span>DARK</span>
        </button>

      </div>

    </footer>
  `;
}

function grid() {
  return `
    <div class="grid-system" aria-hidden="true">
      <span class="grid-outer grid-outer-left"></span>
      <span class="grid-outer grid-outer-right"></span>
      <span class="grid-header"></span>
      <span class="grid-footer"></span>
    </div>
  `;
}

/* =========================================
   HOME
========================================= */

function homePage() {
  return `
    <main class="home-page">

      <div class="home-content">

        <div class="home-intro">

          <div class="home-eyebrow">
            MECHATRONICS ENGINEERING - UNIVERSITY OF WATERLOO '30
          </div>

          <h1>James Han</h1>

          <p class="home-description">
            I'm a Mechatronics Engineering student at the University of Waterloo who likes building 
            things that move, sense, and actually work. From robotic drawing machines to carbon fiber 
            race car components, I'm happiest at the intersection of mechanical design, electronics, 
            and code — turning ideas into products you can hold.
          </p>

        </div>

        <div class="home-navigation">

          <a href="about.html" class="home-link">
            <span class="home-link-number">01</span>
            <span class="home-link-title">About</span>
          </a>

          <a href="experience.html" class="home-link">
            <span class="home-link-number">02</span>
            <span class="home-link-title">Experience</span>
          </a>

          <a href="education.html" class="home-link">
            <span class="home-link-number">03</span>
            <span class="home-link-title">Education</span>
          </a>

          <a href="projects.html" class="home-link">
            <span class="home-link-number">04</span>
            <span class="home-link-title">Projects</span>
          </a>

        </div>

      </div>

    </main>
  `;
}

/* =========================================
   ABOUT
========================================= */

function aboutPage() {
  return `
    <main class="inner-page about-page">

      <section class="about-intro">

        <div class="about-heading">

          <div class="about-heading-top">
            <span class="page-number">01</span>
            <div class="page-kicker">PROFILE</div>
          </div>

          <h2>About</h2>

        </div>

        <div class="about-description">
          <p class="large-copy">
            I'm James Han, a second year Mechatronics Engineering student at the University 
            of Waterloo. I take a strong interest in mechanical design, robotics, CAD, 
            prototyping, and embedded software, but am a fast learner and open to all 
            opportunities.<br><br>
            I'm currently seeking a 4 month Winter 2027 co-op position starting in
            January, feel free to reach out via LinkedIn or email.
          </p>
        </div>

      </section>

      <div class="page-scroll">

        <section class="split-section">

          <div class="section-label">
            Skills
          </div>

          <div class="section-content list skills-list">
            <div>Mechanical Design</div>
            <div>Robotics</div>
            <div>SolidWorks</div>
            <div>AutoCAD</div>
            <div>C++</div>
            <div>Python</div>
            <div>Machining</div>
            <div>Composite Layup</div>
            <div>GD&T</div>
            <div>2D & 3D CAD</div>
          </div>

        </section>

        <section class="split-section">

          <div class="section-label">
            Links
          </div>

          <div class="section-content list">

            <a
              href="https://github.com/yyames-ham"
              target="_blank"
              rel="noreferrer"
            >
              <span>GitHub</span>
              <span>↗</span>
            </a>

            <a
              href="https://www.linkedin.com/in/james-han-42aa1a384/"
              target="_blank"
              rel="noreferrer"
            >
              <span>LinkedIn</span>
              <span>↗</span>
            </a>

            <a
              href="mailto:jamesyrhan@gmail.com">
              <span>Primary Email</span>
              <span>↗</span>
            </a>

            <a
              href="mailto:j288han@uwaterloo.ca">
              <span>School Email</span>
              <span>↗</span>
            </a>

          </div>

        </section>

      </div>

    </main>
  `;
}

/* =========================================
   EXPERIENCE
========================================= */

function experiencePage() {
  return `
    <main class="inner-page">

      <section class="page-heading">

        <span class="page-number">02</span>

        <div>
          <div class="page-kicker">BACKGROUND</div>
          <h2>Experience</h2>
        </div>

      </section>

      <div class="page-scroll">

        <section class="experience-list">

          <article class="experience-item">

            <div class="item-date">
              Sep 2025 — Present
            </div>

            <div class="item-main">

              <h3>Chassis Team Member</h3>

              <p class="item-company">
                University of Waterloo Formula Electric Design Team
              </p>

              <p class="item-description">
                Assisting in the creation of the structural framework of the competition car and working
                closely with other subteams to ensure the seamless integration of all physical systems.
                As a team member I have assisted in the creation of pedal faces using 3D printed molds and
                laying both kevlar and carbon fiber composite materials.
              </p>

              <div class="tags">
                <span>COMPOSITE LAYUP</span>
                <span>MACHINING</span>
                <span>TEAMWORK</span>
              </div>

            </div>

          </article>

          <article class="experience-item">

            <div class="item-date">
              Jun - Aug 2026
            </div>

            <div class="item-main">

              <h3>Digital Bootcamp: Web Design and Marketing Project Team Member</h3>

              <p class="item-company">
                Waterloo Experience Accelerate Program (remote)
              </p>

              <p class="item-description">
                Created a simulated company and website with a team of 4 using WIX to develop knowledge and 
                skills in web-design and marketing practices. Also completed a month-long project-based 
                experience with the Learning Disabilities Association of Chatham-Kent, performing audits and
                reviews and creating a content calendar in order to increase online presence and outreach, 
                increase personnel numbers and foster better organization within the company.
              </p>

              <div class="tags">
                <span>WEB DESIGN</span>
                <span>COMMUNICATIONS</span>
                <span>ORGANIZATION</span>
                <span>WIX STUDIO</span>
              </div>

            </div>

          </article>

        </section>

      </div>

    </main>
  `;
}

/* =========================================
   EDUCATION
========================================= */

function educationPage() {
  return `
    <main class="inner-page">

      <section class="page-heading">

        <span class="page-number">03</span>

        <div>
          <div class="page-kicker">ACADEMIC</div>
          <h2>Education</h2>
        </div>

      </section>

      <div class="page-scroll">

        <section class="education-item">

          <div class="item-date">
            2025 — Present<br><br>GPA: 3.26
          </div>

          <div class="item-main">

            <h3>University of Waterloo</h3>

            <p class="item-company">
              Bachelor of Applied Science · Honours Mechatronics Engineering
            </p>

            <p class="item-description">
              Currently pursuing an engineering degree at the #1 rated school for engineering in Canada. 
              Studying at the intersection of mechanical, software, and electrical engineering, I am 
              developing a large skill set and multiple design perspectives; preparing myself to graduate
              in 2030 ready for anything.
            </p>

          </div>

        </section>

        <section class="certifications">
          <div class="section-label">
            Certifications
          </div>

          <div class="section-content list certifications-list">

            <div class="certification-item">
              <div class="certification-name">
                SolidWorks Design Associate (CSWA)
              </div>

              <p class="item-company">
                VirtualTester Online, Tangix Design & Development AB
              </p>
            </div>

          </div>

        </section>

      </div>

    </main>
  `;
}

/* =========================================
   PROJECTS
========================================= */

function projectsPage() {
  return `
    <main class="inner-page">

      <section class="page-heading">

        <span class="page-number">04</span>

        <div>
          <div class="page-kicker">SELECTED WORK</div>
          <h2>Projects</h2>
        </div>

      </section>

      <div class="page-scroll">

        <section class="project-list">

          <a href="#" class="project-item">

            <span class="project-number">
              Nov 2025
            </span>

            <div class="project-main">

              <h3>Drawing Robot - "Dron on Top"</h3>

              <p>
                A robot that draws freehand using joysticks and pretedetermined shapes using buttons
                in a group of 4 for a final project using VEX IQ parts and C++ software.
                I took full responsibility for mechanical design and assembly, and thought out of the
                box to create a gantry system despite part limitations using a sprocket and chain to 
                mimic the movement of a rack and pinion. I also took charge of designing the boundary-detection
                logic, joystick movement controls, and one of the four predetermined shape functions.
              </p>

              <div class="tags">
                <span>MECHANICAL DESIGN</span>
                <span>VEX IQ</span>
                <span>C++</span>
                <span>PROTOTYPING</span>
                <span>EMBEDDED PROGRAMMING</span>
                <span>SENSORS</span>
              </div>

            </div>

          </a>

          <a href="#" class="project-item">

            <span class="project-number">
              Jan 2025
            </span>

            <div class="project-main">

              <h3>Mancala</h3>

              <p>
                A fully functional 2-player game of Mancala playable in the command line interface.
                Implemented turn-based logic, and edge-cases that account for opponent store skipping, 
                empty pit captures, and extra turns. Used modular functions to render the board in the
                console, validate inputs, calculate stone movements,calculate score, and detect game end.
              </p>

              <div class="tags">
                <span>PYTHON</span>
                <span>GAME DESIGN</span>
              </div>

            </div>

          </a>

        </section>

      </div>

    </main>
  `;
}

/* =========================================
   RENDER
========================================= */

function render() {
  let content = "";

  switch (page) {
    case "about":
      content = aboutPage();
      break;

    case "experience":
      content = experiencePage();
      break;

    case "education":
      content = educationPage();
      break;

    case "projects":
      content = projectsPage();
      break;

    default:
      content = homePage();
  }

  document.querySelector("#app").innerHTML = `
    ${header()}
    ${grid()}
    ${content}
    ${footer()}
  `;
}

render();
loadLogo();

const opening = createOpening();

/* =========================================
   THEME
========================================= */

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.documentElement.classList.add("dark");
}

document
  .querySelector(".theme-toggle")
  ?.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");

    localStorage.setItem(
      "theme",
      document.documentElement.classList.contains("dark")
        ? "dark"
        : "light"
    );
  });

/* =========================================
   PAGE LINE ANIMATIONS
========================================= */

const pageKey = window.location.pathname;

const navigationLinks = document.querySelectorAll("a[href$='.html']");

function animatePageExit(url) {
  const topLine = document.querySelector(".grid-header");
  const footerLine = document.querySelector(".grid-footer");
  const innerLine = document.querySelector(".page-heading::after");

  document.documentElement.classList.add("page-leaving");

  if (topLine) {
    topLine.classList.add("line-exit-left");
  }

  if (footerLine) {
    footerLine.classList.add("line-exit-right");
  }

  if (innerLine) {
    innerLine.classList.add("line-exit-left");
  }

  setTimeout(() => {
    window.location.href = url;
  }, 750);
}

navigationLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const url = link.href;

    if (
      !url ||
      link.target === "_blank" ||
      url === window.location.href
    ) {
      return;
    }

    event.preventDefault();

    animatePageExit(url);
  });
});

/* =========================================
   PAGE LOAD
========================================= */

requestAnimationFrame(() => {
  requestAnimationFrame(() => {
    document.documentElement.classList.remove("theme-preload");

    /*
      HOMEPAGE
    */
    if (page === "home") {

      /*
        If there is an opening animation,
        opening.js will add page-loaded later.
      */
      if (opening) {
        return;
      }

      /*
        If we arrived here from another page,
        there is no opening animation.

        Therefore reveal the homepage immediately.
      */
      document.documentElement.classList.add("page-loaded");

      document.documentElement.classList.add(
        "home-animation-ready"
      );

      startHomeTyping();

      return;
    }

    /*
      INNER PAGES
    */
    document.documentElement.classList.add("page-loaded");

    startInnerTyping();
  });
});


/* =========================================
   TYPING
========================================= */

function startHomeTyping() {
  const titles = document.querySelectorAll(".home-link-title");

  if (!titles.length) return;

  const characterSpeed = 120;

  titles.forEach((title) => {
    const text = title.textContent;
    title.textContent = "";

    [...text].forEach((character, index) => {
      const span = document.createElement("span");

      span.className = "typing-character";
      span.textContent = character;

      title.appendChild(span);

      setTimeout(() => {
        span.classList.add("visible");
      }, index * characterSpeed);
    });
  });
}

window.addEventListener("opening-complete", () => {
  if (page === "home") {
    startHomeTyping();
  }
});

function typeText(element, speed) {
  if (!element) return;

  const nodes = [...element.childNodes];
  element.innerHTML = "";

  let characterIndex = 0;

  nodes.forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      [...node.textContent].forEach((character) => {
        const span = document.createElement("span");

        span.className = "typing-character";
        span.textContent = character;

        element.appendChild(span);

        setTimeout(() => {
          span.classList.add("visible");
        }, characterIndex * speed);

        characterIndex++;
      });
    }

    else if (node.nodeName === "BR") {
      const marker = document.createComment("typing-break");

      element.appendChild(marker);

      setTimeout(() => {
        const br = document.createElement("br");
        marker.replaceWith(br);
      }, characterIndex * speed);
    }
  });
}

function startInnerTyping() {
  const speed1 = 110;
  const speed2 = 10;

  document
    .querySelectorAll(".page-kicker, .page-heading h2, .about-heading h2")
    .forEach((element) => {
      typeText(element, speed1);
    });

  const aboutDescription = document.querySelector(".about-description .large-copy");

  if (aboutDescription) {
    typeText(aboutDescription, speed2);
  }
}