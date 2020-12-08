var userClick = document.querySelector("#trans_btn");
var txtInput = document.querySelector("#txt_input");
var shwOpt = document.querySelector("#shw_opt");
var speak = document.querySelector("#read_opt");

var serverApi = "https://api.funtranslations.com/translate/minion.json";
// var serverApi = "https://api.funtranslations.com/translate/groot.json";
// var serverApi = "https://api.funtranslations.com/translate/ferb-latin.json";

function getTranslatedUrl(text) {
    return serverApi + "?" + "text=" + text;
}

function errorHandler(error) {
    console.log("Error occured" + error);
    alert("caught error");
}

function showOutput() {
    var inputTxt = txtInput.value;
    fetch(getTranslatedUrl(inputTxt))
        .then(res => res.json())
        .then(data => {
            var translatedTxt = data.contents.translated;
            shwOpt.innerText = translatedTxt;
        })
        .catch(errorHandler);
}

function speakVoice() {
    var speakVoice = shwOpt.innerText;
    responsiveVoice.speak(speakVoice);
}

userClick.addEventListener("click", showOutput);
speak.addEventListener("click", speakVoice);