const subBtn = document.querySelector("#btn-1");
const addBtn = document.querySelector("#btn-2");
const resetBtn = document.querySelector("#btn-3");
const defaultFontSize = document.querySelector("#default-fs");
const textArea = document.querySelector("#text-area");

// getting styles from custom css file of that element with getComputedStyle fn
const textAreaObject = getComputedStyle(textArea);

// Storing the original default font size
const orignalFont = parseInt(textAreaObject.fontSize);

let currentFontSize = parseInt(textAreaObject.fontSize);
defaultFontSize.innerHTML = `Current Font Size is : ${currentFontSize}`;

subBtn.addEventListener("click", (event) => {
  currentFontSize = currentFontSize - 2;
  textArea.style.fontSize = `${currentFontSize}px`;
  defaultFontSize.innerHTML = `Current Font Size is : ${currentFontSize}`;
});

addBtn.addEventListener("click", () => {
  currentFontSize = currentFontSize + 2;
  textArea.style.fontSize = `${currentFontSize}px`;
  defaultFontSize.innerHTML = `Current Font Size is : ${currentFontSize}`;
});

resetBtn.addEventListener("click", () => {
  textArea.value = "";
  textArea.style.fontSize = `${orignalFont}px`;
  defaultFontSize.innerHTML = `Current Font Size is : ${orignalFont}`;
});
