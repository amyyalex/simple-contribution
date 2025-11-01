window.addEventListener('DOMContentLoaded', () => {
  let scrollPos = 0;
  const mainNav = document.getElementById('navbar');
  const headerHeight = mainNav.clientHeight;
  window.addEventListener('scroll', function() {
      const currentTop = document.body.getBoundingClientRect().top * -1;
      if ( currentTop < scrollPos) {
          // Scrolling Up
          if (currentTop > 0 && mainNav.classList.contains('is-fixed')) {
              mainNav.classList.add('is-visible');
          } else {
              mainNav.classList.remove('is-visible', 'is-fixed');
          }
      } else {
          // Scrolling Down
          mainNav.classList.remove(['is-visible']);
          if (currentTop > headerHeight && !mainNav.classList.contains('is-fixed')) {
              mainNav.classList.add('is-fixed');
          }
      }
      scrollPos = currentTop;
  });
})

// initialization of cardDetailsArray
let cardDetailsArray;
const cardsPerPage = 10;
let noOfCards;
function createCard(details) {
  const cardTemplate = document.getElementById("contributor-card");
  const cardClone = cardTemplate.content.cloneNode(true);

  cardClone.querySelector(".card-details h1").textContent = details.name;
  cardClone.querySelector(".card-details h5").textContent = details.profession;
  cardClone.querySelector(".card-details p").innerHTML = details.quote;

  const socialIcons = cardClone.querySelector(".social-icon");

  // Normalize contact links (email / github / linkedin)
  const normalized = { ...details };
  if (normalized.email) {
    // extract just the email address even if someone provided "mailto:" or typos like "mailto://"
    const emailMatch = String(normalized.email).match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i);
    if (emailMatch) {
      normalized._cleanEmail = emailMatch[0];
      normalized.email = `mailto:${emailMatch[0]}`;
    } else {
      // keep original as fallback
      normalized._cleanEmail = String(normalized.email);
      if (!String(normalized.email).startsWith("mailto:")) {
        normalized.email = `mailto:${normalized._cleanEmail}`;
      }
    }
  }
  if (normalized.github && !/^https?:\/\//i.test(normalized.github)) {
    normalized.github = normalized.github.startsWith("github.com")
      ? `https://${normalized.github}`
      : `https://${normalized.github}`;
  }
  if (normalized.linkedin && !/^https?:\/\//i.test(normalized.linkedin)) {
    normalized.linkedin = normalized.linkedin.startsWith("linkedin.com")
      ? `https://${normalized.linkedin}`
      : `https://${normalized.linkedin}`;
  }

  // Define the social media platforms and their corresponding icons
  //if you have any other in mind add it here and test it out for icons
  const socialMedia = [
    { key: "twitter", icon: "uil uil-twitter" },
    { key: "github", icon: "uil uil-github" },
    { key: "linkedin", icon: "uil uil-linkedin" },
    { key: "dribble", icon: "uil uil-dribble" },
    { key: "behance", icon: "uil uil-behance" },
    { key: "email", icon: "uil uil-envelope" },
    { key: "instagram", icon: "uil uil-instagram" },
  ];

  // Iterate through the social media platforms and add icons if links are provided
  for (const platform of socialMedia) {
    if (normalized[platform.key]) {
      socialIcons.innerHTML += `<a href="${
        normalized[platform.key]
      }" target="_blank" rel="noopener noreferrer"><i class="${platform.icon}"></i></a>`;
    }
  }

  // Add "copy email" button if an email exists (uses normalized._cleanEmail)
  if (normalized._cleanEmail) {
    const copyBtn = document.createElement("button");
    copyBtn.type = "button";
    copyBtn.className = "copy-email-btn";
    copyBtn.title = "Copy email";
    copyBtn.style = "margin-left:8px; background:transparent; border:none; cursor:pointer;";
    copyBtn.innerHTML = `<i class="uil uil-copy"></i>`;

    copyBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const textToCopy = normalized._cleanEmail;
      if (!navigator.clipboard) {
        // fallback
        const ta = document.createElement("textarea");
        ta.value = textToCopy;
        document.body.appendChild(ta);
        ta.select();
        try { document.execCommand("copy"); } catch {}
        document.body.removeChild(ta);
      } else {
        navigator.clipboard.writeText(textToCopy).catch(() => {});
      }

      // transient feedback
      const feedback = document.createElement("span");
      feedback.textContent = "Copied!";
      feedback.style = "margin-left:8px; color: #2b7a0b; font-weight:600;";
      copyBtn.parentNode && copyBtn.parentNode.insertBefore(feedback, copyBtn.nextSibling);
      setTimeout(() => {
        feedback.remove();
      }, 1500);
    });

    // attach copy button after social icons
    socialIcons.appendChild(copyBtn);
  }

  return cardClone;
}

function removeCard() {
  const cards = document.querySelectorAll(".card");
  cards.forEach((element) => {
    cardsContainer.removeChild(element);
  });
}
function research() {
  removeCard();

  const searchValue = inputSearch.value.trim().toLowerCase();

  if (searchValue.length <= 0) {
    cardDetailsArray.forEach((details) => {
      const card = createCard(details);
      cardsContainer.appendChild(card);
    });
    inputSearch.value = "";
  } else {
    const resultArray = [...cardDetailsArray];
    const noResultsParagraph = cardsContainer.querySelector(
      ".no-results-message"
    );

    resultArray.sort((a, b) => a.name.localeCompare(b.name));

    const filteredResults = resultArray.filter((details) =>
      details.name.toLowerCase().startsWith(searchValue.toLowerCase())
    );

    if (filteredResults.length > 0) {
      filteredResults.forEach((details) => {
        const card = createCard(details);
        cardsContainer.appendChild(card);
      });

      if (noResultsParagraph) {
        cardsContainer.removeChild(noResultsParagraph);
      }
    } else {
      if (!noResultsParagraph) {
        const noResultsParagraph = document.createElement("p");
        noResultsParagraph.className = "no-results-message";
        noResultsParagraph.textContent = "Name Not Found.";
        cardsContainer.appendChild(noResultsParagraph);
      }
    }
  }
}

const cardsContainer = document.querySelector(".cards");
const paginationContainer = document.querySelector(".pagination");
const inputSearch = document.getElementById("search");

inputSearch.addEventListener("input", research);

fetch("./cardDetails.json")
  .then((response) => response.json())
  .then((data) => {
    cardDetailsArray = data.cardDetails;
    noOfCards = cardDetailsArray.length;
    let noOfPages = Math.ceil(noOfCards / cardsPerPage);
    cardsContainer.style.display = "none";
    displayPages(1);
    for (let j = 1; j <= noOfPages; j++) {
      const pageTemplate = document.getElementById("pages");
      const pageClone = pageTemplate.content.cloneNode(true);
      pageClone.querySelector(".page-details p").textContent = j;
      pageClone
        .querySelector(".page-details")
        .addEventListener("click", function () {
          cardsContainer.innerHTML = "";
          displayPages(j);
          setPageStyle(j);
          window.scrollTo({ top: 560, behavior: "smooth" });
        });
      paginationContainer.appendChild(pageClone);
    }
  })
.catch((error) => {
    console.error("Error fetching JSON:", error);
    // Show error message to user
    cardsContainer.innerHTML = '<p style="text-align: center; color: red;">Error loading cards. The contributor made a mistake in cardDetails.json</p>';
    cardsContainer.style.display = "block";
  });
function displayPages(j) {
  for (
    let i = (j - 1) * cardsPerPage;
    i < j * cardsPerPage && i < noOfCards;
    i++
  ) {
    let details = cardDetailsArray[i];
    const card = createCard(details);
    cardsContainer.appendChild(card);
  }
  cardsContainer.style.display = "flex";
}
function setPageStyle(selectedPage) {
  const allPages = document.querySelectorAll(".page-details p");
  allPages.forEach((page, index) => {
    const isSelected = index + 1 === selectedPage;

    if (page && page.classList && page.style) {
      if (isSelected) {
        page.classList.add("selected-page");
      } else {
        page.classList.remove("selected-page");
      }
    }
  });
}

//
//
// Toggle mobile navbar menu
const attachMobileMenuToggleFunction = () => {
  try {
    const menuIcon = document.getElementById("navbar-menu-icon-1");
    const linkListContainer = document.getElementById(
      "navbar-link-list-container"
    );
    const navbar_social_media_container = document.getElementById(
      "navbar-social-media-container"
    );
    const google_translate_element = document.getElementById(
      "google_translate_element"
    );

    // validate
    if (menuIcon === null || menuIcon === undefined) {
      console.log("Element with ID 'navbar-menu-icon-1' not found");
      return;
    }
    if (linkListContainer === null || linkListContainer === undefined) {
      console.log("Element with ID 'navbar-link-list-container' not found");
      return;
    }
    if (
      navbar_social_media_container === null ||
      navbar_social_media_container === undefined
    ) {
      console.log("Element with ID 'navbar-social-media-container' not found");
      return;
    }
    if (
      google_translate_element === null ||
      google_translate_element === undefined
    ) {
      console.log("Element with ID 'google_translate_element' not found");
      return;
    }

    // Attach a function to the click event of menuIcon
    menuIcon.addEventListener("click", function () {
      // Toggle the display property of linkListContainer
      if (linkListContainer.style.display === "flex") {
        linkListContainer.style.display = "none";
        google_translate_element.style.display = "none";
        navbar_social_media_container.style.display = "none";
        menuIcon.style.opacity = 1;
      } else {
        linkListContainer.style.display = "flex";
        google_translate_element.style.display = "flex";
        navbar_social_media_container.style.display = "flex";
        menuIcon.style.opacity = 0.2;
      }
    });
  } catch (error) {
    console.error(error);
  }
};

document.addEventListener("DOMContentLoaded", function () {
  attachMobileMenuToggleFunction();
});
