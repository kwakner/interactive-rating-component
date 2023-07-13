const mainContainer = document.querySelector(".main-container");
const secondContainer = document.querySelector(".second-container ");
const submitButton = document.getElementById("sub-btn");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".numb");

submitButton.addEventListener("click", () => {
  secondContainer.classList.remove("hidden");
  mainContainer.classList.add("hidden");
});

rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    rating.innerHTML = rate.innerHTML;
  });
});
