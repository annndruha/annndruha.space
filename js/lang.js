document.addEventListener("DOMContentLoaded", () => {
    let searchParams = new URLSearchParams(window.location.search)
    if (searchParams.has('lang')){
        update_lang(searchParams.get('lang'))
    }
    else {
        update_lang("ru")
    }
})

function change_uri(lang){
    if (history.pushState) {
        let url = window.location.protocol + "//" + window.location.host + window.location.pathname + '?lang=' + lang
        window.history.pushState({path:url},'',url)
    }
}

function lang_to(lang){
    if (lang === "en"){
        $("#to_main_lang").css('display', 'block')
        $("#to_second_lang").css('display', 'none')
    }
    else {
        $("#to_main_lang").css('display', 'none')
        $("#to_second_lang").css('display', 'block')
    }
}

function update_lang(lang, force_change_uri=false){
    if (lang !== 'ru' && lang !== 'en'){
        lang = 'ru'
        change_uri(lang)
    }
    if (force_change_uri){
        change_uri(lang)
    }
    update_buttons(lang)
    update_name(lang)
    lang_to(lang)
}

$("#to_main_lang").on("click", () => {
    update_lang("ru", force_change_uri=true)
})


$("#to_second_lang").on("click", () => {
    update_lang("en", force_change_uri=true)
})