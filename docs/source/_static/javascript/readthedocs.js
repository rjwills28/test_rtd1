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
        waitForElement('cntent.div form input', (element) => {
            console.log('Element is ready');
            console.log(elm.textContent);
        });
        console.log("Wait for elm completed");
    });
});

function waitForElement(selector, callback) {
    const interval = setInterval(() => {
        const element = document.querySelector(selector);
        if (element) {
            clearInterval(interval);
            callback(element);
        }
    }, 100); // Check every 100ms
}