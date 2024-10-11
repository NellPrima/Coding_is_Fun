const nothing = document.querySelector("#nothing");
const something = document.querySelector("#something");

nothing.addEventListener("click", changeWords);

function changeWords() {
  nothing.textContent = something.textContent;

}
    


