var userClick = document.querySelector("#trans_btn");
var txtInput = document.querySelector("#txt_input");
var shwOpt = document.querySelector("#shw_opt");

function showOutput() {
    var userInput = txtInput.value;
    shwOpt.innerText = userInput;
    // console.log("Welcome " + userInput);
}

userClick.addEventListener("click", showOutput);