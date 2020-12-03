var userClick = document.querySelector("#trans_btn");
var txtInput = document.querySelector("#txt_input");
var shwOpt = document.querySelector("#shw_opt");

var serverApi = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

function showOutput() {
    fetch(serverApi)
        .then(response => response.json())
        .then(data => console.log(data));
    var userInput = txtInput.value;
    shwOpt.innerText = userInput;
    // console.log("Welcome " + userInput);
}

userClick.addEventListener("click", showOutput);