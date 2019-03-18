document.getElementById("submit").onclick = function(e) {
    e.preventDefault();
    login();
 };

function processLogin(response) {
    var obj = JSON.parse(response);
    tok = obj["token"];
    document.cookie = "token=" + tok;
    document.location.replace("/account.html");
}

function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let creds = "email=" + email + "&password=" + password;
    
    ajaxPost("/api/users/login", creds, function(response) {
        processLogin(response);
    });
}