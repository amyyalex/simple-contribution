const cardDetailsArray = [
  {
    name: "Your Name",
    profession: "Your profession",
    quote: '"Your favorite quote"</br> - Said by', // say annonymous if unknown
    twitter: "https://twitter.com",
    dribbble: "https://dribbble.com",
    behance: "https://behance.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "mailto:youremail@gmail.com",
  },
  {
    name: "Abhi Joshi",
    profession: "Recruiter turned front-end developer",
    quote:
      '"Jarvis, sometimes you gotta run before you can walk."</br> - Tony Stark',
    twitter: "https://twitter.com/abhiness",
    github: "https://github.com/abhiness",
    linkedin: "https://linkedin.com/in/abhijoshi747",
    email: "mailto:abhijoshi30995@gmail.com",
  },
  {
    name: "Vedang",
    profession: "Undergraduate Student",
    quote: '"Never stop learning"</br>-annonymous',
    twitter: "https://twitter.com/ThisIsVedang",
    github: "https://github.com/vedang685",
    linkedin: "https://www.linkedin.com/in/vedang-69674222b",
    email: "mailto:vedang685@gmail.com",
  },
  {
    name: "Rita Uzoma",
    profession: "Frontend Developer",
    quote:
      "Challenges are hard to overcome but without them, success would have no meaning.",
    twitter: "https://twitter.com/reetahUzoma",
    github: "https://github.com/i-am-rita",
    linkedin: "https://www.linkedin.com/in/ritauzoma/",
    email: "mailto:ritauzoma07@gmail.com",
  },
  {
    name: "CHILAKA CHIGOZIE MICHEAL",
    profession: "FULL STACK STUDENT",
    quote: "It's only you can help yourself to win",
    twitter: "https://twitter.com/officialbos_s",
    github: "https://github.com/officialboss1",
    email: "mailto:mikeedaboss1@gmail.com",
  },
  {
    name: "DIABY IBRAHIM MOHAMED",
    profession: "FULL STACK STUDENT",
    quote: "Truth can only be found in one place: the code.",
    twitter: "https://twitter.com/kingibro345",
    behance: "https://behance.com/Diaby%20Mohammed%20Ibrahim",
    github: "https://github.com/Dmambo",
    linkedin: "https://linkedin.com/Diaby%20Mohammed%20Ibrahim",
    email: "mailto:ibkhalidworld@gmail.com",
  },
  {
    name: "Gracioux Mbanugo",
    profession: "Frontend Software Developer",
    quote:
      "\"You can't rely on how you look to sustain you, what sustains us, what is fundamentally beautiful is compassion; for yourself and for those around you.\" - Lupita Nyong'o",
    twitter: "https://twitter.com/Gracioux_codes",
    github: "https://github.com/GraciouxMbanugo",
    linkedin: "https://linkedin.com/in/grace-mbanugo",
    email: "mailto:chiziterem01@gmail.com",
  },
  {
    name: "Daniel Ukoha",
    profession: "Front End Software Engineer & Open Source Contributor",
    quote:
      "Hard work is worthless for those that do not believe in themselves - uzumaki naruto",
    twitter: "https://twitter.com/i_amsuperfly",
    github: "https://github.com/superfly101",
    linkedin: "https://linkedin.com/in/danielukoha101",
    email: "mailto:danielukoha101@gmail.com",
  },
  {
    name: "Carmen Amba",
    profession: "Software Engineer and OpenSource contributor",
    quote:
      '"Whatever is worth doing at all, is worth doing well." - Philip Stanhope',
    twitter: "https://twitter.com/car__mie",
    github: "https://github.com/Carmenbelle",
    linkedin: "https://www.linkedin.com/in/carmen-amba-226975185/",
    email: "mailto:carmieamba@gmail.com",
  },
  {
    name: "Amyy Alex-Okenwa",
    profession: "Software Engineer",
    quote:
      "While you might be doubting yourself, someone else is admiring your strength.",
    twitter: "https://twitter.com/AlexStephanie10",
    dribbble: "https://dribbble.com/Stephnny",
    github: "https://github.com/amyyalex",
    linkedin: "https://linkedin.com/stephaniealexokenwa",
    email: "mailto:deeptruth247@gmail.com",
  },
  {
    name: "s_shemmee",
    profession: "Web Developer and OpenSource contributor",
    quote: "Dream big, Stay positive, Work hard + Enjoy the Journey",
    twitter: "https://twitter.com/s_shemmee",
    dribbble: "https://dribbble.com/s-shemmee",
    github: "https://github.com/s-shemmee",
  },
  {
    name: "Jeffrey Whewhetu",
    profession: "Software Developer and OpenSource Contributor",
    quote: "Know thyself - Socrates",
    twitter: "https://twitter.com/c0d33ngr",
    github: "https://github.com/c0d33ngr",
    linkedin: "https://linkedin.com/in/jeffrey-whewhetu-483170240",
  },
  {
    name: "Favour Naza Anajemba",
    profession: "Software Developer",
    quote: "Be a rainbow in someone else's cloud - Maya Angelou",
    twitter: "https://www.twitter.com/TechSiz",
    github: "https://github.com/naz-coder",
    linkedin: "https://www.linkedin.com/in/favour-naza-anajemba-02a156196",
    email: "mailto:nazanajemba@gmail.com",
  },
  },
  {
    name: "Ashwin Dhangar",
    profession: "Frontend Developer",
    quote: "You never meet same person again - Ashwin Dhangar",
    github: "https://github.com/MrAshwin2142",
    linkedin: "https://www.linkedin.com/in/ashwin-dhangar-btech24",
  },
];

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

const cardsContainer = document.querySelector(".cards");

for (const details of cardDetailsArray) {
  const card = createCard(details);
  cardsContainer.appendChild(card);
}
