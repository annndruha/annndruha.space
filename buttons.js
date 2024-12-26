function update_buttons(lang="en"){
    $.getJSON("buttons.json", function(json) {
        let button_lines = ''
        json['buttons'].forEach((line) => {
            let buttons = ''
            line.forEach((button_json) => {
                buttons += get_button(button_json, lang)
            })
            button_lines += get_line(buttons)
        })
        document.getElementById('buttons').innerHTML = button_lines
    })
}

function update_name(lang="en"){
    $.getJSON("buttons.json", function(json) {
        if (lang == "en"){
            document.getElementById('name').innerHTML = json['full_name_en']
        }
        else {
            document.getElementById('name').innerHTML = json['full_name_ru']
        }
    })
}


function get_line(buttons){
    return `<div class="p-2 rounded-3">
                <div class="d-flex flex-row justify-content-center">
                    ${buttons}
                </div>
            </div>`
}

function get_button(button_json, lang="ru"){
    icon = button_json['icon']
    
    if (lang == "ru"){
        text = button_json["text_ru"]
        href = button_json["href_ru"]
    }
    else {
        text = button_json["text_en"]
        href = button_json["href_en"]
    }

    let button = `
    <div class="d-flex flex-col">
    <div class="container text-center">
        <div class="row text-">
            <div class="embed-responsive embed-responsive-1by1">
                <a class="text-dark" href="${href}">
                    <img src="./${icon}" class="img-fluid rounded-4" style="width: 70px; height: 70px;" draggable="false" alt="">
                </a>
            </div>
        </div>
        <div class="row text-center">
            <a class="text-dark" href="${href}">
                <div class="p-2">${text}</div>
            </a>
        </div>
    </div>
    </div>
    `
    return button
}