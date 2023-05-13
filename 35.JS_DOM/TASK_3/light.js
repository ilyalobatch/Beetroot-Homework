const lightColors = ["red", "orange", "green"];
const lights = document.querySelectorAll("div.light");
const switcher = document.querySelector("button");
let index = 0;

const addLight = (index) => {
  lights[index].style.backgroundColor = lightColors[index];
};

const removePreviousLight = (index) => {
  lights[index - 1].style.backgroundColor = null;
};

switcher.addEventListener("click", () => {
  switch (index) {
    case 0:
      removePreviousLight(lightColors.length);
      addLight(index);
      index++;
      break;

    case 1:
      removePreviousLight(index);
      addLight(index);
      index++;
      break;

    case 2:
      removePreviousLight(index);
      addLight(index);
      index = 0;
      break;
  }
});
