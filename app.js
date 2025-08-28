// Sample contributors data (replace/add your real data)
const contributors = [
  { name: "Harsh Kumar", role: "Frontend Dev", desc: "Loves React & JS", github: "https://github.com/harshkumar" },
  { name: "Tushar Singh", role: "Backend Dev", desc: "Java & Spring", github: "https://github.com/tusharsingh" },
  { name: "Amy Alex", role: "Designer", desc: "UI/UX Specialist", github: "https://github.com/amyyalex" },
  { name: "John Doe", role: "Fullstack Dev", desc: "Node.js & React", github: "https://github.com/johndoe" },
  { name: "Jane Smith", role: "Contributor", desc: "Open Source Enthusiast", github: "https://github.com/janesmith" },
  // Add more contributors here
];

const cardsContainer = document.querySelector(".cards");
const searchInput = document.getElementById("search");
const paginationContainer = document.querySelector(".pagination");

const contributorsPerPage = 3;
let currentPage = 1;
let filteredContributors = [...contributors];

// Function to render contributor cards
function renderCards(list) {
  cardsContainer.innerHTML = "";
  list.forEach(contributor => {
    const template = document.getElementById("contributor-card").content.cloneNode(true);
    template.querySelector("h1").textContent = contributor.name;
    template.querySelector("h5").textContent = contributor.role;
    template.querySelector("p").textContent = contributor.desc;
    template.querySelector(".social-icon").innerHTML = `<a href="${contributor.github}" target="_blank"><i class="uil uil-github"></i></a>`;
    template.querySelector(".connect a").href = contributor.github;
    cardsContainer.appendChild(template);
  });
}

// Function to render pagination
function renderPagination(totalItems) {
  const totalPages = Math.ceil(totalItems / contributorsPerPage);
  paginationContainer.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    const pageTemplate = document.getElementById("pages").content.cloneNode(true);
    pageTemplate.querySelector("p").textContent = i;
    const pageElement = pageTemplate.querySelector(".page-details");
    if (i === currentPage) pageElement.classList.add("active-page");

    pageElement.addEventListener("click", () => {
      currentPage = i;
      updateView();
    });

    paginationContainer.appendChild(pageElement);
  }
}

// Function to update view
function updateView() {
  const start = (currentPage - 1) * contributorsPerPage;
  const end = start + contributorsPerPage;
  renderCards(filteredContributors.slice(start, end));
  renderPagination(filteredContributors.length);
}

// Search functionality
searchInput.addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase();
  filteredContributors = contributors.filter(c => c.name.toLowerCase().includes(query));
  currentPage = 1;
  updateView();
});

// Initial render
updateView();
