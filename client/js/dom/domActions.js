function hideElement(element) {
    if (status == 'open') {
        document.querySelector(element).style.visibility = "visible";       
    } else {
        document.querySelector(element).style.visibility = "hidden";
    }
}
