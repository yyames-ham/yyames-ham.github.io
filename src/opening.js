/* =========================================
   OPENING ANIMATION
========================================= */

function moveToTarget(source, target, alignLeft = false) {
  const targetRect = target.getBoundingClientRect();

  const targetWidth = targetRect.width;
  const targetHeight = targetRect.height;

  if (source.classList.contains("opening-logo")) {
    source.style.width = `${targetWidth}px`;
    source.style.height = `${targetHeight}px`;
  }

  /*
    The homepage name is left-aligned,
    so match its left edge instead of its center.
  */
  if (alignLeft) {
    const targetFontSize =
      parseFloat(getComputedStyle(target).fontSize);

    source.style.fontSize = `${targetFontSize}px`;

    const targetTop =
      targetRect.top + targetRect.height / 2;

    source.style.transform =
      "translate(0, -50%)";

    requestAnimationFrame(() => {
      source.style.left = `${targetRect.left}px`;
      source.style.top = `${targetTop}px`;
    });

    return;
  }

  /*
    JH uses center alignment.
  */
  const targetCenterX =
    targetRect.left + targetRect.width / 2;

  const targetCenterY =
    targetRect.top + targetRect.height / 2;

  source.style.transform =
    "translate(-50%, -50%)";

  requestAnimationFrame(() => {
    source.style.left = `${targetCenterX}px`;
    source.style.top = `${targetCenterY}px`;
  });
}


export function createOpening() {
  if (document.body.dataset.page !== "home") {
    return null;
  }

  const navigationEntry =
    performance.getEntriesByType("navigation")[0];

  /*
    Show the opening animation whenever
    the homepage is loaded or refreshed.
  */
  if (
    navigationEntry &&
    navigationEntry.type !== "reload" &&
    navigationEntry.type !== "navigate"
  ) {
    return null;
  }

  const opening = document.createElement("div");

  opening.className = "opening";

  opening.innerHTML = `
    <div class="opening-vertical opening-vertical-left"></div>
    <div class="opening-vertical opening-vertical-right"></div>
    <div class="opening-vertical opening-vertical-left2"></div>
    <div class="opening-vertical opening-vertical-right2"></div>

    <div class="opening-horizontal opening-horizontal-top"></div>
    <div class="opening-horizontal opening-horizontal-bottom"></div>

    <div class="opening-center">
      <div class="opening-logo"></div>
      <div class="opening-name">James Han</div>
    </div>
  `;

  document.body.appendChild(opening);

  fetch("/logo.svg")
  .then((response) => response.text())
  .then((svgText) => {
    const openingLogo = opening.querySelector(".opening-logo");

    if (openingLogo) {
      openingLogo.innerHTML = svgText;

      const svg = openingLogo.querySelector("svg");

      if (svg) {
        svg.setAttribute("aria-hidden", "true");
        svg.setAttribute("focusable", "false");
      }
    }
  });

  /*
    Give the opening screen a moment
    before starting the movement.
  */
  setTimeout(() => {
    const openingLogo =
      opening.querySelector(".opening-logo");

    const openingName =
      opening.querySelector(".opening-name");

    const homeLogo =
      document.querySelector(".site-header .logo");

    const homeName =
      document.querySelector(".home-intro h1");

    if (
      !openingLogo ||
      !openingName ||
      !homeLogo ||
      !homeName
    ) {
      opening.remove();
      return;
    }

    /*
      Move both elements directly to
      their homepage positions.
    */
    moveToTarget(openingLogo, homeLogo);
    moveToTarget(openingName, homeName, true);

    /*
      Move the opening grid lines at
      the same time.
    */
    opening.classList.add("is-exiting");

    /*
      Wait for the 900ms animation.
    */
    setTimeout(() => {
      opening.remove();

      document.documentElement.classList.add(
        "home-animation-ready"
      );

      document.documentElement.classList.add(
        "page-loaded"
      );

      window.dispatchEvent(
        new Event("opening-complete")
      );
    }, 900);

  }, 1000);

  return opening;
}