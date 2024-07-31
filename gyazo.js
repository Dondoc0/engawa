function get_data() {
    const current_url = window.location.href;
    const gyazo_url_regex = /https:\/\/gyazo.com\/[0-9a-fA-F]{32}/;
    const gyazo_id_regex = /[0-9a-fA-F]{32}/;

    if (current_url.match(gyazo_url_regex)) {
        console.log("Gyazoページです")
    }

}

get_data();
