function createAjaxRequestObject() {
    var xmlhttp;

    if(window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
        document.cookie = "browser=notIEcompatibility";
    } else { // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        browser = "browser=IEcompatibility";
    }

    // Create the object
    return xmlhttp;
}


function ajaxPost(ajaxURL, parameters, callback) {
    var http3 = createAjaxRequestObject();

    if (callback) {
        http3.onreadystatechange = function(){
            if (http3.readyState == 4 && http3.status == 200){
                callback(http3.responseText);
            }
        }
    }
    
    // Make request
    http3.open("POST", ajaxURL, true);
    http3.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    http3.setRequestHeader("Authorization", getCookie("token"));

    if (parameters) {
        http3.send(parameters);
    }

    return http3;
}

function ajaxGet(ajaxURL, parameters, callback) {
    var http3 = createAjaxRequestObject();

    if (callback) {
        http3.onreadystatechange = function(){
            if (http3.readyState == 4 && http3.status == 200){
                console.log(http3);
                callback(http3.responseText);
            }
        }
    }

    // Make request
    http3.open("GET", ajaxURL, true);
    http3.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    http3.setRequestHeader("Authorization", getCookie("token"));

    if (parameters) {
        http3.send(parameters);
    }
    
    return http3;
}