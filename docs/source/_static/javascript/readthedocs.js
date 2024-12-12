function triggerRtdSearch() {
    const event = new CustomEvent("readthedocs-search-show");
    document.dispatchEvent(event);
    document.querySelector("readthedocs-search").shadowRoot.querySelector("div form input").style.color="black";
    document.querySelector("readthedocs-search").shadowRoot.querySelector("div ul li input").checked=true
}

document.addEventListener("DOMContentLoaded", function(event) {
const original_search = document.querySelector("button.btn.search-button-field.search-button__button.pst-js-only");
var new_search = original_search.cloneNode(true);
original_search.parentNode.replaceChild(new_search, original_search);
new_search.addEventListener("click", (e) => {
        triggerRtdSearch();
    });
 
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === "k" && !e.shiftKey && !e.altKey) {
       console.log("You just pressed Control and K!");
       if (document.contains(document.getElementById("pst-search-dialog"))) {
           document.getElementById("pst-search-dialog").style.visibility="hidden";
           document.getElementById("pst-search-dialog").close();
       }
       triggerRtdSearch();
    }
    });
});


