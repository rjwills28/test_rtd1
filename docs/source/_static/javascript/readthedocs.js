document.addEventListener("DOMContentLoaded", function(event) {
const original_search = document.querySelector("button.btn.search-button-field.search-button__button.pst-js-only");
var new_search = original_search.cloneNode(true);
original_search.parentNode.replaceChild(new_search, original_search);
new_search.addEventListener("click", (e) => {
        const event = new CustomEvent("readthedocs-search-show");
        console.log("Dispatching event");
        document.dispatchEvent(event);
        console.log("disconnect");
        //document.querySelector("div.content form input").style.color="black";
        waitForElm('div form input').then((elm) => {
            console.log('Element is ready');
            console.log(elm.textContent);
        });
        console.log("Wait for elm completed");
    });
});

function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                observer.disconnect();
                resolve(document.querySelector(selector));
            }
        });

        // If you get "parameter 1 is not of type 'Node'" error, see https://stackoverflow.com/a/77855838/492336
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}