const randomIndex = Math.floor(Math.random() * 4) + 1;
const selected = document
  .querySelector(".index" + randomIndex + " .card__title")
  .classList.add("peekaboo");
