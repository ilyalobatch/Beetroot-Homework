import "./swiperInit";
import { renderNewsCards } from "./initializeNewsCards";
import { renderHeaderTitles } from "./initializeHeaderTitles";
import { form, renderFormData, successIconOnSumbit } from "./formSubmit";

const headerButton = document.querySelector(".monticello-header-button");
const projectSection = document.querySelector("#projects");

headerButton.addEventListener("click", () => {
  projectSection.scrollIntoView();
});

document.addEventListener("DOMContentLoaded", () => {
  renderHeaderTitles();
  renderNewsCards();
});

form.addEventListener("submit", (event) => {
  renderFormData(event);
  successIconOnSumbit();
});
