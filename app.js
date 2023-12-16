// initialization of cardDetailsArray
let cardDetailsArray;

function createCard(details) {
  const cardTemplate = document.getElementById("contributor-card");
  const cardClone = cardTemplate.content.cloneNode(true);

  cardClone.querySelector(".card-details h1").textContent = details.name;
  cardClone.querySelector(".card-details h5").textContent = details.profession;
  cardClone.querySelector(".card-details p").innerHTML = details.quote;

  const socialIcons = cardClone.querySelector(".social-icon");

  // Define the social media platforms and their corresponding icons
  //if you have any other in mind add it here and test it out for icons
  const socialMedia = [
    { key: "twitter", icon: "uil uil-twitter" },
    { key: "github", icon: "uil uil-github" },
    { key: "linkedin", icon: "uil uil-linkedin" },
    { key: "dribbble", icon: "uil uil-dribbble" },
    { key: "behance", icon: "uil uil-behance" },
    { key: "email", icon: "uil uil-envelope" },
    { key: "instagram", icon: "uil uil-instagram" },
  ];

  // Iterate through the social media platforms and add icons if links are provided
  for (const platform of socialMedia) {
    if (details[platform.key]) {
      socialIcons.innerHTML += `<a href="${
        details[platform.key]
      }" target="_blank"><i class="${platform.icon}"></i></a>`;
    }
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
    const noResultsParagraph = cardsContainer.querySelector(".no-results-message");

    resultArray.sort((a, b) => a.name.localeCompare(b.name));

    const filteredResults = resultArray.filter(
      (details) => details.name.toLowerCase().includes(searchValue)
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
const inputSearch = document.getElementById("search");

inputSearch.addEventListener("input", research);

fetch("./cardDetails.json")
  .then((response) => response.json())
  .then((data) => {
    cardDetailsArray = data.cardDetails;
    for (const details of cardDetailsArray) {
      const card = createCard(details);
      cardsContainer.appendChild(card);
    }
  })
  .catch((error) => console.error("Error fetching JSON:", error));