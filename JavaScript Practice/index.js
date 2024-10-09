let nothing = document.querySelector("#nothing");
const something = document.querySelector("#something");

nothing.addEventListener("click", changeWords);

function changeWords() {
  nothing.textContent = something.textContent;

  if (something.textContent === "Turns to Something") {
    something.textContent = "Still results as nothing";
  } else if (something.textContent === "Still results as nothing") {
    something.textContent = "Will eventually turn to Something";
  } else if (something.textContent === "Will eventually turn to Something") {
    something.textContent = "Then turns back to";
    //turn the text back to #nothing
  } else if  (something.textContent === "Then turns back to") {
    nothing.textContent = something.textContent;
  }
  

  
    
}

