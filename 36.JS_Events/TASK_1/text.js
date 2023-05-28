const textContainerElement = document.querySelector(".text-container");
const hintElement = document.querySelector(".text-hint");

document.addEventListener("keydown", function (event) {
  if (event.ctrlKey && event.key.toLowerCase() === "e") {
    event.preventDefault();
    const displayElement = document.querySelector(".text-display");

    if (displayElement) {
      const newEditElement = document.createElement("textarea");
      newEditElement.className = "text-edit";
      newEditElement.value = displayElement.innerText;
      textContainerElement.replaceChild(newEditElement, displayElement);
      newEditElement.focus();
      hintElement.innerText = "Press Ctrl+S to save";
    }
  }
  if (event.ctrlKey && event.key.toLowerCase() === "s") {
    event.preventDefault();
    const editElement = document.querySelector(".text-edit");

    if (editElement) {
      const newDisplayElement = document.createElement("div");
      newDisplayElement.className = "text-display";
      newDisplayElement.innerText = editElement.value;
      textContainerElement.replaceChild(newDisplayElement, editElement);
      hintElement.innerText = "Press Ctrl+E to edit";
    }
  }
});
