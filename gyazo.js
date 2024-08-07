function getData() {
    const current_url = window.location.href;
    const gyazo_url_regex = /https:\/\/gyazo.com\/[0-9a-fA-F]{32}/;

    if (current_url.match(gyazo_url_regex)) {
        console.log("Gyazoページです");
        chrome.runtime.sendMessage({ action: "addContextMenu" });
    }
}

getData();
