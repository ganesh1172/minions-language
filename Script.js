var userClick = document.querySelector("#trans_btn");
var txtInput = document.querySelector("#txt_input");

function showOutput() {
    var userInput = txtInput.value;
    console.log("Welcome " + userInput);
}

userClick.addEventListener("click", showOutput);