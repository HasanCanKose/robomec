let turkishContents = document.getElementsByClassName("tr");
let englishContents = document.getElementsByClassName("en");

let selectTurkish = document.querySelector(".turkish");
let selectEnglish = document.querySelector(".english");

const removeEnglishContent = () => {
    for(var i = 0; i < englishContents.length; i++){
        englishContents[i].style.display = "none"
        turkishContents[i].style.display = "block"
    }
}

const removeTurkishContent = () => {
    for(var i = 0; i < englishContents.length; i++){
        turkishContents[i].style.display = "none"
        englishContents[i].style.display = "block"
    }
}

selectTurkish.onclick = function() {
    removeEnglishContent();
}

selectEnglish.onclick = function() {
    removeTurkishContent();
}


