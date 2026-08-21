/* =========================================================
   R&AW — COMPLETE INTERACTION SCRIPT
   Educational project • Public-source research
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =======================================================
     CASE DATA
  ======================================================= */

  const caseData = {

    "Bangladesh": {
      number: "CASE 01",
      year: "1971",
      title: "Bangladesh",
      background: "images/bangladesh-1971.jpg",
      status: "🟢 DOCUMENTED / HISTORICAL RECORD",

      intro:
        "The Bangladesh Liberation War became one of the defining episodes of R&AW's early history.",

      sections: [
        {
          title: "THE BACKGROUND",
          text:
            "Political conflict in Pakistan's eastern wing escalated dramatically after the 1970 election crisis and the Pakistani military crackdown in East Pakistan. Millions of refugees crossed into India, creating an enormous humanitarian and security crisis."
        },
        {
          title: "R&AW'S ROLE",
          text:
            "Public historical accounts describe Indian intelligence involvement in establishing contacts with Bengali resistance networks, collecting intelligence and supporting the wider Indian effort. R&AW was one component of a much larger Indian political, diplomatic and military response."
        },
        {
          title: "THE BIGGER PICTURE",
          text:
            "The creation of Bangladesh cannot be attributed to a single agency. Bengali political mobilisation, the Mukti Bahini, India's military intervention, diplomacy and the wider international environment all played important roles."
        },
        {
          title: "WHY IT MATTERS",
          text:
            "The 1971 experience demonstrated how intelligence, diplomacy, covert support and conventional military power could interact during a major regional crisis."
        }
      ]
    },

    "The Ganga": {
  number: "CASE 02",
  year: "1971",
  title: "The Ganga",
  background: "images/ganga-1971.png",
  status: "🔵 REPORTED / CONTESTED",

  intro:
    "The hijacking of an Indian Airlines aircraft became an important episode in India–Pakistan relations.",

  sections: [
    {
      title: "WHAT HAPPENED",
      text:
        "Indian Airlines flight Ganga was hijacked on 30 January 1971 and taken to Lahore, Pakistan. The aircraft was eventually destroyed there."
    },
    {
      title: "THE INTELLIGENCE STORY",
      text:
        "Later accounts by former intelligence officials have described the episode as connected to an intelligence operation and to India's assessment of militant activity. However, the exact operational history remains contested in the public record."
    },
    {
      title: "WHY CAUTION MATTERS",
      text:
        "Because much of the alleged intelligence story comes from later accounts rather than a complete publicly available official operational file, this website does not present every detail as established fact."
    },
    {
      title: "WHY IT MATTERS",
      text:
        "The episode had major consequences for India–Pakistan aviation and political relations in the tense period immediately preceding the 1971 war."
    }
  ]
},

    "Kahuta": {
      number: "CASE 03",
      year: "1970s–80s",
      title: "Kahuta",
      background: "images/Kahuta.jpg",
      status: "🔵 REPORTED ACCOUNT",

      intro:
        "Pakistan's nuclear programme became a major strategic intelligence concern for India.",

      sections: [
        {
          title: "THE BACKGROUND",
          text:
            "Pakistan pursued a uranium-enrichment programme at Kahuta during the 1970s. The programme attracted intense international attention and became a major concern for India."
        },
        {
          title: "INTELLIGENCE COLLECTION",
          text:
            "Former Indian intelligence officials have described efforts to obtain information about Pakistan's nuclear programme. Some later accounts include the famous story involving hair samples collected from a barber shop near Kahuta."
        },
        {
          title: "THE EVIDENCE PROBLEM",
          text:
            "The hair-sample episode is widely repeated in intelligence literature, but the complete operational chain is not established by a publicly available primary Indian intelligence file. We therefore classify it as a reported account."
        },
        {
          title: "THE MORARJI DESAI CONTROVERSY",
          text:
            "Later accounts also allege that Prime Minister Morarji Desai revealed to Pakistan's leadership that India knew about its nuclear programme. The dramatic claim that this directly destroyed an Indian intelligence network is not fully established by publicly available primary evidence."
        }
      ]
    },

    "Sikkim": {
      number: "CASE 04",
      year: "1975",
      title: "Sikkim",
      background: "images/sikkim-flag.png",
      status: "🔵 FIRST-HAND ACCOUNT",

      intro:
        "Sikkim's transformation from a Himalayan kingdom to an Indian state involved politics, diplomacy, public mobilisation and security considerations.",

      sections: [
        {
          title: "THE BACKGROUND",
          text:
            "Sikkim had a distinctive constitutional relationship with India after independence. Political tensions increased during the early 1970s."
        },
        {
          title: "THE 1975 TURNING POINT",
          text:
            "In 1975, a referendum followed political upheaval in Sikkim, and the Indian Parliament subsequently approved constitutional changes resulting in Sikkim becoming a state of India."
        },
        {
          title: "THE INTELLIGENCE DIMENSION",
          text:
            "Former R&AW officer G. B. S. Sidhu later published a first-hand account describing the political and intelligence environment surrounding these events."
        },
        {
          title: "WHY IT MATTERS",
          text:
            "Sikkim demonstrates why intelligence history cannot be separated from diplomacy, local politics and regional geopolitics."
        }
      ]
    },

    "Sri Lanka": {
      number: "CASE 05",
      year: "1980s",
      title: "Sri Lanka",
       background: "images/ipkf-deployment.jpg",
      status: "🟡 COMPLEX / CONTESTED",

      intro:
        "Sri Lanka became one of the most complicated chapters in India's regional-security and intelligence history.",

      sections: [
        {
          title: "THE BACKGROUND",
          text:
            "Ethnic conflict between Sri Lanka's Sinhalese-majority state and Tamil political and militant movements intensified during the late 1970s and 1980s."
        },
        {
          title: "INDIA'S INVOLVEMENT",
          text:
            "India developed relationships with Tamil militant organisations during the period before its policy changed dramatically. The situation later evolved into direct Indian military involvement through the Indian Peace Keeping Force."
        },
        {
          title: "THE COMPLICATION",
          text:
            "India's objectives changed over time, and relationships with militant groups became increasingly difficult. The Sri Lankan episode ultimately demonstrated how covert relationships can produce consequences that are difficult to control."
        },
        {
          title: "WHY IT MATTERS",
          text:
            "This is an important case for understanding the limits and risks of intelligence activity in a complicated regional conflict."
        }
      ]
    },

    "Kargil": {
      number: "CASE 06",
      year: "1999",
      title: "Kargil",
      background: "images/kargil-1999.jpg",
      status: "🟢 OFFICIAL REVIEW",

      intro:
        "Kargil is one of the clearest examples of why intelligence collection alone is not enough.",

      sections: [
        {
          title: "WHAT HAPPENED",
          text:
            "In 1999, Pakistani forces and irregulars occupied positions on the Indian side of the Line of Control in the Kargil sector."
        },
        {
          title: "THE INTELLIGENCE PROBLEM",
          text:
            "The subsequent Kargil Review Committee examined weaknesses in intelligence collection, interpretation, surveillance and coordination between organisations."
        },
        {
          title: "DURING THE WAR",
          text:
            "Publicly available intelligence literature also describes important technical intelligence obtained during the conflict that helped establish Pakistani military involvement."
        },
        {
          title: "THE LESSON",
          text:
            "Kargil demonstrated that intelligence has to be collected, analysed, shared and acted upon effectively. Information that does not reach the right decision-maker at the right time can fail to prevent surprise."
        }
      ]
    }

  };


  /* =======================================================
     MOBILE NAVIGATION
  ======================================================= */

  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

      const isOpen =
        navLinks.classList.toggle("active");

      menuToggle.setAttribute(
        "aria-expanded",
        isOpen ? "true" : "false"
      );

      menuToggle.textContent =
        isOpen ? "×" : "☰";

    });


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


  /* =======================================================
     CREATE CASE MODAL
  ======================================================= */

  function createCaseModal() {

    if (document.getElementById("caseModal")) {
      return;
    }

    const modal =
      document.createElement("div");

    modal.id = "caseModal";
    modal.className = "case-modal";

    modal.innerHTML = `

      <div class="case-modal-backdrop"></div>

      <div
        class="case-modal-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="caseModalTitle"
      >

        <button
          class="case-modal-close"
          aria-label="Close case file"
          type="button"
        >
          ×
        </button>

        <div class="case-modal-header">

          <span class="modal-case-number"></span>

          <span class="modal-case-year"></span>

          <h2 id="caseModalTitle"></h2>

          <div class="modal-evidence"></div>

        </div>

        <div class="modal-intro"></div>

        <div class="modal-sections"></div>

        <div class="modal-footer">

          <div class="modal-warning">

            <strong>PUBLIC-SOURCE NOTE</strong>

            <p>
              This case file describes information available
              in the public record. Classified operational
              details may not be publicly verifiable.
            </p>

          </div>

        </div>

      </div>
    `;

    document.body.appendChild(modal);

    const closeButton =
      modal.querySelector(".case-modal-close");

    const backdrop =
      modal.querySelector(".case-modal-backdrop");

    if (closeButton) {

      closeButton.addEventListener(
        "click",
        closeCaseModal
      );

    }

    if (backdrop) {

      backdrop.addEventListener(
        "click",
        closeCaseModal
      );

    }

  }


  /* =======================================================
     OPEN CASE MODAL
  ======================================================= */

  function openCaseModal(data) {

    if (!data) {
      return;
    }

    createCaseModal();

    const modal =
      document.getElementById("caseModal");

    if (!modal) {
      return;
    }


    const numberElement =
      modal.querySelector(".modal-case-number");

    const yearElement =
      modal.querySelector(".modal-case-year");

    const titleElement =
      modal.querySelector("#caseModalTitle");

    const evidenceElement =
      modal.querySelector(".modal-evidence");

    const introElement =
      modal.querySelector(".modal-intro");

    const sectionsContainer =
      modal.querySelector(".modal-sections");


    if (numberElement) {
      numberElement.textContent =
        data.number || "";
    }

    if (yearElement) {
      yearElement.textContent =
        data.year || "";
    }

    if (titleElement) {
      titleElement.textContent =
        data.title || "";
    }

    if (evidenceElement) {
      evidenceElement.textContent =
        data.status || "";
    }

    if (introElement) {
      introElement.textContent =
        data.intro || "";
    }


    /* -------------------------------------------------------
       CASE IMAGE
    ------------------------------------------------------- */

    const modalPanel =
      modal.querySelector(".case-modal-panel");

    if (
      modalPanel &&
      data.background
    ) {

      modalPanel.style.backgroundImage =
        `linear-gradient(
          rgba(0, 0, 0, 0.72),
          rgba(0, 0, 0, 0.84)
        ), url("${data.background}")`;

      modalPanel.style.backgroundSize =
        "cover";

      modalPanel.style.backgroundPosition =
        "center";

      modalPanel.style.backgroundRepeat =
        "no-repeat";

    }


    /* -------------------------------------------------------
       CASE SECTIONS
    ------------------------------------------------------- */

    if (sectionsContainer) {

      sectionsContainer.innerHTML = "";

      if (
        Array.isArray(data.sections)
      ) {

        data.sections.forEach(section => {

          const article =
            document.createElement("article");

          article.className =
            "modal-section";

          const heading =
            document.createElement("h3");

          heading.textContent =
            section.title || "";

          const paragraph =
            document.createElement("p");

          paragraph.textContent =
            section.text || "";

          article.appendChild(heading);

          article.appendChild(paragraph);

          sectionsContainer.appendChild(article);

        });

      }

    }


    /* -------------------------------------------------------
       SHOW MODAL
    ------------------------------------------------------- */

    modal.classList.add("open");

    document.body.classList.add("modal-open");

    const panel =
      modal.querySelector(".case-modal-panel");

    if (panel) {
      panel.scrollTop = 0;
    }

    const closeButton =
      modal.querySelector(".case-modal-close");

    if (closeButton) {

      setTimeout(() => {
        closeButton.focus();
      }, 100);

    }

  }


  /* =======================================================
     CLOSE CASE MODAL
  ======================================================= */

  function closeCaseModal() {

    const modal =
      document.getElementById("caseModal");

    if (!modal) {
      return;
    }

    modal.classList.remove("open");

    document.body.classList.remove("modal-open");

  }


  /* =======================================================
     CASE BUTTONS
  ======================================================= */

  const caseButtons =
    document.querySelectorAll(".case-button");

  caseButtons.forEach(button => {

    button.addEventListener("click", event => {

      event.preventDefault();

      event.stopPropagation();


      const card =
        button.closest(".case-card");

      if (!card) {
        return;
      }


      const titleElement =
        card.querySelector("h3");

      if (!titleElement) {
        return;
      }


      const title =
        titleElement.textContent.trim();


      const data =
        caseData[title];


      if (!data) {

        console.warn(
          "No case data found for:",
          title
        );

        return;

      }


      openCaseModal(data);

    });

  });


  /* =======================================================
     ESCAPE KEY
  ======================================================= */

  document.addEventListener(
    "keydown",
    event => {

      if (
        event.key === "Escape"
      ) {

        const modal =
          document.getElementById("caseModal");

        if (
          modal &&
          modal.classList.contains("open")
        ) {

          closeCaseModal();

        }

      }

    }
  );


  /* =======================================================
     SCROLL REVEAL
  ======================================================= */

  const revealElements =
    document.querySelectorAll(
      ".timeline-card, .case-card, .person-card, .shadow-card, .source-card, .flow-step"
    );


  if (
    "IntersectionObserver" in window
  ) {

    const revealObserver =
      new IntersectionObserver(
        (entries, observer) => {

          entries.forEach(entry => {

            if (
              entry.isIntersecting
            ) {

              entry.target.classList.add(
                "revealed"
              );

              observer.unobserve(
                entry.target
              );

            }

          });

        },
        {
          threshold: 0.12
        }
      );


    revealElements.forEach(element => {

      element.classList.add(
        "reveal"
      );

      revealObserver.observe(
        element
      );

    });

  } else {

    revealElements.forEach(element => {

      element.classList.add(
        "revealed"
      );

    });

  }


  /* =======================================================
     ACTIVE NAVIGATION
  ======================================================= */

  const sections =
    document.querySelectorAll(
      "section[id]"
    );

  const navItems =
    document.querySelectorAll(
      ".nav-links a"
    );


  if (
    "IntersectionObserver" in window
  ) {

    const sectionObserver =
      new IntersectionObserver(
        entries => {

          entries.forEach(entry => {

            if (
              entry.isIntersecting
            ) {

              navItems.forEach(link => {

                link.classList.remove(
                  "active"
                );

              });


              const activeLink =
                document.querySelector(
                  `.nav-links a[href="#${entry.target.id}"]`
                );


              if (activeLink) {

                activeLink.classList.add(
                  "active"
                );

              }

            }

          });

        },
        {
          rootMargin:
            "-35% 0px -55% 0px"
        }
      );


    sections.forEach(section => {

      sectionObserver.observe(
        section
      );

    });

  }


  /* =======================================================
     SHADOW FILE BUTTONS
  ======================================================= */

  /* =======================================================
   EVIDENCE REVIEW MODAL
======================================================= */

const evidenceData = {

  "Balochistan": {
    status: "🟡 CLAIMED / CONTESTED",

    intro:
      "Public reporting contains allegations concerning Indian intelligence involvement in Balochistan. The available public record does not establish every operational claim as fact.",

    sections: [
      {
        title: "WHAT IS CLAIMED",
        text:
          "Various reports and commentators have alleged Indian intelligence involvement with Baloch separatist movements."
      },
      {
        title: "THE EVIDENCE PROBLEM",
        text:
          "Attribution of intelligence activity is difficult to independently verify when the underlying operational material is classified or unavailable in primary public records."
      },
      {
        title: "WHAT CAN BE SAID RESPONSIBLY",
        text:
          "The allegations can be studied as part of the wider India–Pakistan security relationship, but disputed claims should not be presented as established operational facts."
      },
      {
        title: "PUBLIC-SOURCE ASSESSMENT",
        text:
          "This project classifies the case as contested because publicly available evidence does not independently verify every allegation."
      }
    ]
  },


  "Unknown Gunmen": {
    status: "🟡 CLAIMED / UNVERIFIED",

    intro:
      "Reports concerning unidentified gunmen and alleged intelligence-linked activity require careful examination because attribution is often disputed.",

    sections: [
      {
        title: "THE CLAIM",
        text:
          "Public reporting has attributed certain incidents involving unidentified gunmen to various actors, sometimes including alleged intelligence connections."
      },
      {
        title: "THE ATTRIBUTION PROBLEM",
        text:
          "Identifying the individuals or organisation responsible can be difficult when investigations are incomplete or the available evidence is indirect."
      },
      {
        title: "WHY CAUTION MATTERS",
        text:
          "Unverified attribution should not be treated as established fact. Reliable evidence, independent reporting and primary documentation are important when assessing such claims."
      },
      {
        title: "PUBLIC-SOURCE ASSESSMENT",
        text:
          "This project therefore treats the case as an allegation requiring further evidence rather than as a confirmed intelligence operation."
      }
    ]
  }

};


/* =======================================================
   CREATE EVIDENCE MODAL
======================================================= */

function createEvidenceModal() {

  if (
    document.getElementById(
      "evidenceModal"
    )
  ) {
    return;
  }

  const modal =
    document.createElement("div");

  modal.id =
    "evidenceModal";

  modal.className =
    "case-modal";

  modal.innerHTML = `

    <div class="case-modal-backdrop"></div>

    <div
      class="case-modal-panel"
      role="dialog"
      aria-modal="true"
      aria-labelledby="evidenceModalTitle"
    >

      <button
        class="case-modal-close"
        type="button"
        aria-label="Close evidence review"
      >
        ×
      </button>

      <div class="case-modal-header">

        <span class="modal-case-number">
          CLAIM FILE
        </span>

        <span class="modal-case-year">
          EVIDENCE REVIEW
        </span>

        <h2 id="evidenceModalTitle"></h2>

        <div class="modal-evidence"></div>

      </div>

      <div class="modal-intro"></div>

      <div class="modal-sections"></div>

      <div class="modal-footer">

        <div class="modal-warning">

          <strong>PUBLIC-SOURCE NOTE</strong>

          <p>
            This review describes information available
            in public reporting and research. Classified
            operational details may not be publicly verifiable.
          </p>

        </div>

      </div>

    </div>
  `;

  document.body.appendChild(modal);

  const closeButton =
    modal.querySelector(
      ".case-modal-close"
    );

  const backdrop =
    modal.querySelector(
      ".case-modal-backdrop"
    );

  if (closeButton) {

    closeButton.addEventListener(
      "click",
      closeEvidenceModal
    );

  }

  if (backdrop) {

    backdrop.addEventListener(
      "click",
      closeEvidenceModal
    );

  }

}


/* =======================================================
   OPEN EVIDENCE MODAL
======================================================= */

function openEvidenceModal(
  title,
  data
) {

  createEvidenceModal();

  const modal =
    document.getElementById(
      "evidenceModal"
    );

  if (!modal || !data) {
    return;
  }


  const titleElement =
    modal.querySelector(
      "#evidenceModalTitle"
    );

  const evidenceElement =
    modal.querySelector(
      ".modal-evidence"
    );

  const introElement =
    modal.querySelector(
      ".modal-intro"
    );

  const sectionsContainer =
    modal.querySelector(
      ".modal-sections"
    );


  if (titleElement) {

    titleElement.textContent =
      title;

  }


  if (evidenceElement) {

    evidenceElement.textContent =
      data.status || "";

  }


  if (introElement) {

    introElement.textContent =
      data.intro || "";

  }


  if (sectionsContainer) {

    sectionsContainer.innerHTML =
      "";

    data.sections.forEach(
      section => {

        const article =
          document.createElement(
            "article"
          );

        article.className =
          "modal-section";


        const heading =
          document.createElement(
            "h3"
          );

        heading.textContent =
          section.title;


        const paragraph =
          document.createElement(
            "p"
          );

        paragraph.textContent =
          section.text;


        article.appendChild(
          heading
        );

        article.appendChild(
          paragraph
        );

        sectionsContainer.appendChild(
          article
        );

      }
    );

  }


  modal.classList.add(
    "open"
  );

  document.body.classList.add(
    "modal-open"
  );


  const panel =
    modal.querySelector(
      ".case-modal-panel"
    );

  if (panel) {

    panel.scrollTop =
      0;

  }


  const closeButton =
    modal.querySelector(
      ".case-modal-close"
    );

  if (closeButton) {

    setTimeout(
      () => closeButton.focus(),
      100
    );

  }

}


/* =======================================================
   CLOSE EVIDENCE MODAL
======================================================= */

function closeEvidenceModal() {

  const modal =
    document.getElementById(
      "evidenceModal"
    );

  if (!modal) {
    return;
  }

  modal.classList.remove(
    "open"
  );

  document.body.classList.remove(
    "modal-open"
  );

}


/* =======================================================
   EVIDENCE REVIEW BUTTONS
======================================================= */

const evidenceButtons =
  document.querySelectorAll(
    ".evidence-button"
  );

evidenceButtons.forEach(
  button => {

    button.addEventListener(
      "click",
      event => {

        event.preventDefault();

        event.stopPropagation();


        const card =
          button.closest(
            ".shadow-card"
          );

        if (!card) {
          return;
        }


        const titleElement =
          card.querySelector(
            "h3"
          );

        if (!titleElement) {
          return;
        }


        const title =
          titleElement.textContent.trim();


        const data =
          evidenceData[title];


        if (!data) {

          console.warn(
            "No evidence data found for:",
            title
          );

          return;

        }


        openEvidenceModal(
          title,
          data
        );

      }
    );

  });


/* =======================================================
   EVIDENCE MODAL — ESCAPE KEY
======================================================= */

document.addEventListener(
  "keydown",
  event => {

    if (
      event.key === "Escape"
    ) {

      const modal =
        document.getElementById(
          "evidenceModal"
        );

      if (
        modal &&
        modal.classList.contains(
          "open"
        )
      ) {

        closeEvidenceModal();

      }

    }

  }
);
  /* =======================================================
     SOURCE BUTTONS
  ======================================================= */

  const sourceButtons =
    document.querySelectorAll(
      ".source-card button"
    );

  sourceButtons.forEach(button => {

    button.addEventListener(
      "click",
      () => {

        button.textContent =
          "SOURCE VAULT COMING →";

      }
    );

  });



  /* =======================================================
     HERO PARALLAX
  ======================================================= */

  const hero =
    document.querySelector(".hero");


  if (hero) {

    window.addEventListener(
      "scroll",
      () => {

        const scrollPosition =
          window.scrollY;


        if (
          scrollPosition <
          window.innerHeight
        ) {

          hero.style.backgroundPosition =
            `center ${scrollPosition * 0.15}px`;

        }

      },
      {
        passive: true
      }
    );

  }


  /* =======================================================
     TIMELINE EFFECT
  ======================================================= */

  const timelineCards =
    document.querySelectorAll(
      ".timeline-card"
    );


  timelineCards.forEach(
    (card, index) => {

      card.style.transitionDelay =
        `${index * 70}ms`;

    }
  );


  /* =======================================================
     FINAL INITIALIZATION
  ======================================================= */

  console.log(
    "%cR&AW — THE SHADOW BEHIND THE INFORMATION",
    "font-size:18px;font-weight:bold;"
  );

  console.log(
    "Educational project • Public-source research"
  );

  console.log(
    "Case files loaded:",
    Object.keys(caseData).length
  );

});
