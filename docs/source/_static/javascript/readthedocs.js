document.addEventListener("DOMContentLoaded", function(event) {
// Trigger Read the Docs' search addon instead of Material MkDocs default
document.querySelector("btn search-button-field search-button__button pst-js-only").addEventListener("click", (e) => {
        const event = new CustomEvent("readthedocs-search-show");
        document.dispatchEvent(event);
        console.log("here");
    });
});