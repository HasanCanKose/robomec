let turkishContents = document.getElementsByClassName("tr");
let englishContents = document.getElementsByClassName("en");

let selectTurkish = document.querySelectorAll(".turkish");
let selectEnglish = document.querySelectorAll(".english");

const setTextColor = (language) => {
    if(language == "tr"){
        for(var i = 0; i < selectTurkish.length; i++){
            selectTurkish[i].style.color = "red";
            selectEnglish[i].style.color = "#ccc";
        }
    }

    if(language == "en"){
        for(var i = 0; i < selectEnglish.length; i++){
            selectEnglish[i].style.color = "blue";
            selectTurkish[i].style.color = "#ccc";
        }
    }
}

const removeEnglishContent = () => {
    setTextColor("tr");

    for(var i = 0; i < englishContents.length; i++){
        englishContents[i].style.display = "none"
        turkishContents[i].style.display = "block"
    }
}

const removeTurkishContent = () => {
    setTextColor("en");

    for(var i = 0; i < englishContents.length; i++){
        turkishContents[i].style.display = "none"
        englishContents[i].style.display = "block"
    }
}

const setCookie = (cname, cvalue, exdays) => {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
  
const getCookie = (cname) => {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }
    }
    return "";
}
  
const checkCookie = () => {
    let language = getCookie("language");
    if (language == "") {
        setCookie("language", "tr", 365);
    }
}

for(var i = 0; i < selectTurkish.length; i++){
    selectTurkish[i].onclick = function() {
        setCookie("language", "tr", 365);
        removeEnglishContent();
    }

    selectEnglish[i].onclick = function() {
        setCookie("language", "en", 365);
        removeTurkishContent();
    }
}

const pageOnLoad = () => {
    checkCookie();
    var language = getCookie("language");
    if(language == "tr")
        removeEnglishContent();
    if(language == "en")
        removeTurkishContent(); 
}

document.getElementById("content-body").onload = pageOnLoad();

