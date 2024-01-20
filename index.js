import {
    translate
} from "./translate/index.js";

window.translate_page = function translate_page({ language }) {
    const languages_icons = document.querySelectorAll(".language-icon");

    languages_icons.forEach(element => {
        element.classList.remove("active-language");
    });

    const [ active_language ] = document.getElementsByName(language);
    active_language.classList.add("active-language");

    const elements_to_translate = document.getElementsByName("translate-v0");
    
    elements_to_translate.forEach(element => {
        const text = element.getAttribute('translate-text');
        const translated_text = translate[language][text];
       
        element.innerText = translated_text;
    });
};

const init = () => {
    window.translate_page({ language: "pt-br" });
};

init();