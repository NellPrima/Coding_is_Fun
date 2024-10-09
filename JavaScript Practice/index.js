const nothing = document.querySelector("#nothing");
const something = document.querySelector("#something");

nothing.addEventListener("click", changeWords);

function changeWords() {
    //When I click on nothing I want the words to change to #something
    document.getElementById("nothing") == ("something");
    if (document.innerHTML === "Something")
        document.getElementById("nothing").innerHTML = "Nothing";

}


 