function hideElement(element) {
    if (status == 'open') {
        document.querySelector(element).style.visibility = "visible";       
    } else {
        document.querySelector(element).style.visibility = "hidden";
    }
}

function removeElement(element) {
    var elem = document.querySelector(element);
    elem.parentNode.removeChild(elem);
    //element.parentNode.removeChild(element);
}

function appendElement(elementType, parent, element) {
    var z = document.createElement(elementType);
    z.innerHTML = element;
    document.querySelector(parent).appendChild(z);
}

function setAttribute(element, attributeKey, attributeValue) {
    document.querySelector(element).setAttribute(attributeKey, attributeValue);
}