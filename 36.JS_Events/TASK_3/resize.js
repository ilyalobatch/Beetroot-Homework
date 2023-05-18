const blockElement = document.querySelector(".block");
const { body } = document;

const startResize = (event) => {
  event.preventDefault();
  body.addEventListener("mousemove", resize);
  body.addEventListener("mouseup", stopResize);
};

const resize = (event) => {
  blockElement.style.width = `${event.clientX - blockElement.offsetLeft}px`;
  blockElement.style.height = `${event.clientY - blockElement.offsetTop}px`;
};

const stopResize = () => {
  body.removeEventListener("mousemove", resize);
  body.removeEventListener("mouseup", stopResize);
};

blockElement.addEventListener("mousedown", startResize);
